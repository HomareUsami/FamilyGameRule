const STATE_KEY = 'family_rules_state';

// State management
function loadSettings() {
    try {
        const data = localStorage.getItem(STATE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.error("Failed to load settings", e);
    }
    return { poker: {}, daifugo: {}, defaults: { poker: {}, daifugo: {} } };
}

function saveSettings(state) {
    try {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));
        // Simple cookie backup
        document.cookie = `${STATE_KEY}=${encodeURIComponent(JSON.stringify(state))}; max-age=31536000; path=/`;
    } catch (e) {
        console.error("Failed to save settings", e);
    }
}

function resetRules(game) {
    const state = loadSettings();
    state[game] = {};
    saveSettings(state);
    alert('現在の設定を消去し、デフォルト設定に戻しました。');
    location.reload();
}

function setRule(game, ruleId, value) {
    const state = loadSettings();
    if (!state[game]) state[game] = {};
    state[game][ruleId] = value;
    saveSettings(state);
}

function getRule(game, ruleId) {
    const state = loadSettings();
    return state[game]?.[ruleId];
}

function setDefaultRule(game, ruleId, value) {
    const state = loadSettings();
    if (!state.defaults) state.defaults = { poker: {}, daifugo: {} };
    if (!state.defaults[game]) state.defaults[game] = {};
    state.defaults[game][ruleId] = value;
    saveSettings(state);
}

function getDefaultRule(game, ruleId) {
    const state = loadSettings();
    return state.defaults?.[game]?.[ruleId];
}

function setVisibility(game, ruleId, value) {
    const state = loadSettings();
    if (!state.visibility) state.visibility = { poker: {}, daifugo: {} };
    if (!state.visibility[game]) state.visibility[game] = {};
    state.visibility[game][ruleId] = value;
    saveSettings(state);
}

async function checkRuleVisibility(game, ruleId, allRulesData) {
    const depsData = await loadJSON(`../../data/dependencies.json`);
    if (!depsData || !depsData[game] || !depsData[game][ruleId]) return true;

    const condition = depsData[game][ruleId].show_if;
    if (!condition) return true;

    return checkCondition(game, condition, allRulesData);
}

function checkCondition(game, condition, allRulesData) {
    // any_of (OR) support
    if (condition.any_of && Array.isArray(condition.any_of)) {
        return condition.any_of.some(c => checkCondition(game, c, allRulesData));
    }
    
    // all_of (AND) support (explicit)
    if (condition.all_of && Array.isArray(condition.all_of)) {
        return condition.all_of.every(c => checkCondition(game, c, allRulesData));
    }

    // Default: AND check for all properties in the object
    for (const [depId, depValue] of Object.entries(condition)) {
        const currentVal = getRuleValue(game, depId, allRulesData);
        if (currentVal !== depValue) return false;
    }
    return true;
}

function getRuleValue(game, ruleId, allRulesData) {
    const state = loadSettings();
    const customVal = getRule(game, ruleId);
    if (customVal !== undefined) return customVal;

    const customDef = getDefaultRule(game, ruleId);
    if (customDef !== undefined) return customDef;

    // Find in data
    if (allRulesData) {
        for (const catData of Object.values(allRulesData)) {
            const rule = catData.rules?.find(r => r.id === ruleId);
            if (rule) return rule.default;
        }
    }
    return undefined;
}

// Data Loading
async function loadJSON(path) {
    // 互換性のため、.json のパスを .js の読み込みに変換
    const filename = path.split('/').pop();
    const basename = filename.replace('.json', '');
    const varName = 'DATA_' + basename;
    const jsPath = path.replace('.json', '.js');

    return new Promise((resolve) => {
        if (window[varName]) {
            return resolve(window[varName]);
        }
        
        const script = document.createElement('script');
        script.src = jsPath;
        script.onload = () => resolve(window[varName]);
        script.onerror = (e) => {
            console.error("Failed to load script", jsPath);
            showError("エラー：データの読み込みに失敗しました");
            resolve(null);
        };
        document.head.appendChild(script);
    });
}

function showError(msg) {
    let errDiv = document.getElementById('error-message');
    if (!errDiv) {
        errDiv = document.createElement('div');
        errDiv.id = 'error-message';
        errDiv.className = 'error-ui';
        document.body.prepend(errDiv);
    }
    errDiv.textContent = msg;
    errDiv.style.display = 'block';
}

// Helper to identify game based on URL
function getGameName() {
    return window.location.pathname.includes('daifugo') ? 'daifugo' : 'poker';
}

// Helper to get URL query params
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// UI generation helpers
function createRuleControl(game, rule, isDefault = false) {
    let value;
    if (isDefault) {
        value = getDefaultRule(game, rule.id) !== undefined ? getDefaultRule(game, rule.id) : rule.default;
    } else {
        const customDef = getDefaultRule(game, rule.id);
        const fallback = customDef !== undefined ? customDef : rule.default;
        value = getRule(game, rule.id) !== undefined ? getRule(game, rule.id) : fallback;
    }
    
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '20px';
    wrapper.style.paddingBottom = '15px';
    wrapper.style.borderBottom = '1px dashed var(--border-color)';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'rule-header';

    const titleStr = document.createElement('strong');
    titleStr.textContent = rule.name;
    titleStr.style.color = 'var(--accent-gold)';

    const detailLink = document.createElement('a');
    detailLink.href = rule.detail;
    detailLink.textContent = '詳細';
    detailLink.className = 'btn-detail';

    headerDiv.appendChild(titleStr);
    headerDiv.appendChild(detailLink);

    const descDiv = document.createElement('div');
    descDiv.style.fontSize = '0.9rem';
    descDiv.style.color = 'var(--text-muted)';
    descDiv.style.marginBottom = '10px';
    descDiv.textContent = rule.desc;

    const controlDiv = document.createElement('div');
    controlDiv.className = 'form-group';
    controlDiv.style.marginTop = '0';
    controlDiv.style.borderTop = 'none';
    controlDiv.style.paddingTop = '0';
    
    const label = document.createElement('label');
    label.textContent = isDefault ? 'デフォルト値:' : '現在の設定値:';
    
    if (rule.type === 'boolean') {
        const labelSwitch = document.createElement('label');
        labelSwitch.className = 'switch';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = value;
        input.addEventListener('change', (e) => {
            if (isDefault) setDefaultRule(game, rule.id, e.target.checked);
            else setRule(game, rule.id, e.target.checked);
        });
        
        const span = document.createElement('span');
        span.className = 'slider';
        
        labelSwitch.appendChild(input);
        labelSwitch.appendChild(span);
        
        controlDiv.appendChild(label);
        controlDiv.appendChild(labelSwitch);
    } else if (rule.type === 'select') {
        const select = document.createElement('select');
        rule.options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            if (value === opt) option.selected = true;
            select.appendChild(option);
        });
        select.addEventListener('change', (e) => {
            if (isDefault) setDefaultRule(game, rule.id, e.target.value);
            else setRule(game, rule.id, e.target.value);
        });
        
        controlDiv.appendChild(label);
        controlDiv.appendChild(select);
    } else if (rule.type === 'number') {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = value;
        input.style.width = '80px';
        input.style.textAlign = 'right';
        input.addEventListener('change', (e) => {
            const val = parseInt(e.target.value, 10) || 0;
            if (isDefault) setDefaultRule(game, rule.id, val);
            else setRule(game, rule.id, val);
            
            // Trigger visibility update if needed
            if (window.updateAllVisibilities) window.updateAllVisibilities();
        });
        
        controlDiv.appendChild(label);
        controlDiv.appendChild(input);
    }
    
    // Add change listeners to trigger visibility updates
    const inputs = controlDiv.querySelectorAll('input, select');
    inputs.forEach(i => i.addEventListener('change', () => {
        if (window.updateAllVisibilities) window.updateAllVisibilities();
    }));
    
    wrapper.appendChild(headerDiv);
    wrapper.appendChild(descDiv);
    wrapper.appendChild(controlDiv);
    
    return wrapper;
}

// Setup common navigation back buttons
document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.back();
        });
    }
});
