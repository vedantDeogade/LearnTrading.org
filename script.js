// ============================================
// LEARNTRADING.ORG — UNIFIED SCRIPT
// ============================================

// ─── AUTH STATE ───────────────────────────────
function isLoggedIn() {
    return localStorage.getItem('learntrading_logged_in') === 'true';
}

function setLoggedIn(email) {
    localStorage.setItem('learntrading_logged_in', 'true');
    localStorage.setItem('learntrading_user_email', email);
}

function logOut() {
    localStorage.removeItem('learntrading_logged_in');
    localStorage.removeItem('learntrading_user_email');
    location.reload();
}

// ─── AUTH MODAL ──────────────────────────────

function createAuthModal() {
    // Don't duplicate
    if (document.getElementById('auth-modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'auth-modal-overlay';
    overlay.className = 'auth-overlay';

    overlay.innerHTML = `
        <div class="auth-modal" id="auth-modal">
            <button class="auth-close-btn" id="auth-close-btn" aria-label="Close">&times;</button>

            <!-- Tabs -->
            <div class="auth-tabs">
                <button class="auth-tab active" id="tab-login" data-tab="login">Log In</button>
                <button class="auth-tab" id="tab-signup" data-tab="signup">Sign Up</button>
            </div>

            <!-- LOGIN FORM -->
            <form class="auth-form" id="login-form" >
                <div class="auth-brand">
                    <span class="auth-logo">📈</span>
                    <h2>Welcome Back</h2>
                    <p>Log in to continue trading with virtual money</p>
                </div>

                <div class="auth-field">
                    <label for="login-email">Email Address</label>
                    <input type="email" id="login-email" placeholder="you@example.com" required autocomplete="email">
                </div>

                <div class="auth-field">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" placeholder="Enter your password" required autocomplete="current-password" minlength="6">
                </div>

                <div class="auth-extras">
                    <label class="auth-remember">
                        <input type="checkbox" checked> Remember me
                    </label>
                    <a href="#" class="auth-forgot">Forgot password?</a>
                </div>

                <button type="submit" class="auth-submit-btn">Log In</button>

                <div class="auth-divider"><span>or continue with</span></div>

                <div class="auth-social-row">
                    <button type="button" class="auth-social-btn" data-provider="Google">
                        <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                        Google
                    </button>
                    <button type="button" class="auth-social-btn" data-provider="GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                    </button>
                </div>

                <p class="auth-footer-text">Don't have an account? <a href="#" data-switch-tab="signup">Sign up free</a></p>
            </form>

            <!-- SIGNUP FORM -->
            <form class="auth-form" id="signup-form" style="display:none;" >
                <div class="auth-brand">
                    <span class="auth-logo">🚀</span>
                    <h2>Create Account</h2>
                    <p>Start trading with ₹10 Lakh demo cash — 100% free</p>
                </div>

                <div class="auth-field">
                    <label for="signup-name">Full Name</label>
                    <input type="text" id="signup-name" placeholder="John Doe" required autocomplete="name">
                </div>

                <div class="auth-field">
                    <label for="signup-email">Email Address</label>
                    <input type="email" id="signup-email" placeholder="you@example.com" required autocomplete="email">
                </div>

                <div class="auth-field">
                    <label for="signup-password">Password</label>
                    <input type="password" id="signup-password" placeholder="Min. 6 characters" required autocomplete="new-password" minlength="6">
                </div>

                <div class="auth-field">
                    <label for="signup-confirm">Confirm Password</label>
                    <input type="password" id="signup-confirm" placeholder="Re-enter password" required autocomplete="new-password" minlength="6">
                </div>

                <label class="auth-remember" style="margin-bottom:1rem;">
                    <input type="checkbox" required> I agree to the <a href="terms.html" target="_blank">Terms</a> & <a href="privacy.html" target="_blank">Privacy Policy</a>
                </label>

                <button type="submit" class="auth-submit-btn auth-submit-signup">Create Free Account</button>

                <div class="auth-divider"><span>or continue with</span></div>

                <div class="auth-social-row">
                    <button type="button" class="auth-social-btn" data-provider="Google">
                        <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                        Google
                    </button>
                    <button type="button" class="auth-social-btn" data-provider="GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                    </button>
                </div>

                <p class="auth-footer-text">Already have an account? <a href="#" data-switch-tab="login">Log in</a></p>
            </form>
        </div>
    `;

    
    document.body.appendChild(overlay);

    // ── Wire modal events (no inline handlers) ──
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeAuthModal(); });
    overlay.querySelector('#auth-close-btn').addEventListener('click', closeAuthModal);
    overlay.querySelectorAll('.auth-tab[data-tab]').forEach(btn => {
        btn.addEventListener('click', function() { switchAuthTab(this.getAttribute('data-tab')); });
    });
    overlay.querySelectorAll('[data-switch-tab]').forEach(link => {
        link.addEventListener('click', function(e) { e.preventDefault(); switchAuthTab(this.getAttribute('data-switch-tab')); });
    });
    const lf = overlay.querySelector('#login-form');
    const sf = overlay.querySelector('#signup-form');
    if (lf) lf.addEventListener('submit', handleLogin);
    if (sf) sf.addEventListener('submit', handleSignup);
    overlay.querySelectorAll('.auth-social-btn[data-provider]').forEach(btn => {
        btn.addEventListener('click', function() { socialLogin(this.getAttribute('data-provider')); });
    });
    document.addEventListener('keydown', function escH(e) {
        if (e.key === 'Escape') { closeAuthModal(); document.removeEventListener('keydown', escH); }
    });

}

function openAuthModal(tab) {
    createAuthModal();
    const overlay = document.getElementById('auth-modal-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (tab) switchAuthTab(tab);
}

function closeAuthModal() {
    const overlay = document.getElementById('auth-modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        tabLogin.classList.remove('active');
        tabSignup.classList.add('active');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email && password.length >= 6) {
        setLoggedIn(email);
        closeAuthModal();
        showToast('✅ Logged in successfully! Welcome back.');
        updateAuthUI();
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;

    if (password !== confirm) {
        showToast('Passwords do not match!', 'error');
        return;
    }
    if (name && email && password.length >= 6) {
        setLoggedIn(email);
        localStorage.setItem('learntrading_user_name', name);
        closeAuthModal();
        showToast('🎉 Account created! You have ₹10 Lakh virtual cash.');
        updateAuthUI();
    }
}

function socialLogin(provider) {
    setLoggedIn(provider.toLowerCase() + '_user@example.com');
    closeAuthModal();
    showToast('✅ Signed in with ' + provider + '!');
    updateAuthUI();
}

// ─── BUTTON INTERCEPTION ─────────────────────
// If user is NOT logged in, intercept clicks on action buttons/links
function interceptButtons() {
    document.addEventListener('click', function(e) {
        if (isLoggedIn()) return; // let everything through

        const target = e.target.closest('a, button');
        if (!target) return;

        // Navigation links we should NOT block (basic page nav)
        const safeLinks = ['index.html', 'about.html', 'faq.html', 'contact.html', 'terms.html', 'privacy.html'];
        const href = target.getAttribute('href') || '';

        // Allow same-page anchors, safe page links, and the logo
        if (target.classList.contains('logo')) return;
        if (href === '#' || href === '') return;
        if (safeLinks.some(link => href.endsWith(link))) return;

        // Allow nav links that are plain navigation (no btn class)
        if (target.closest('.nav-links') && !target.classList.contains('btn')) return;

        // Allow footer links
        if (target.closest('.footer')) return;

        // Allow auth modal interactions
        if (target.closest('.auth-overlay')) return;

        // Allow menu toggle
        if (target.closest('.menu-toggle')) return;

        // Block everything else — show the login modal
        const isBtnClass = target.classList.contains('btn');
        const isNavBtn = target.closest('.nav-links') && target.classList.contains('btn');
        const isDashboardLink = href.includes('dashboard.html');
        const isSubmitBtn = target.type === 'submit';
        const isActionButton = target.tagName === 'BUTTON';

        if (isBtnClass || isNavBtn || isDashboardLink || isSubmitBtn || isActionButton) {
            e.preventDefault();
            e.stopPropagation();
            openAuthModal('login');
        }
    }, true);
}

// ─── AUTH UI UPDATE ──────────────────────────
// Add a user avatar / logout button in nav when logged in
function updateAuthUI() {
    // Remove existing auth UI
    const existing = document.getElementById('nav-auth-section');
    if (existing) existing.remove();

    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;

    if (isLoggedIn()) {
        const email = localStorage.getItem('learntrading_user_email') || 'User';
        const name = localStorage.getItem('learntrading_user_name') || email.split('@')[0];
        const li = document.createElement('li');
        li.id = 'nav-auth-section';
        li.innerHTML = `
            <div class="nav-user-pill">
                <span class="nav-user-avatar">${name.charAt(0).toUpperCase()}</span>
                <span class="nav-user-name">${name}</span>
                <button class="nav-logout-btn" id="nav-logout-btn" title="Log out">✕</button>
            </div>
        `;
        navLinks.appendChild(li);
        const logoutBtn = li.querySelector('#nav-logout-btn');
        if (logoutBtn) logoutBtn.addEventListener('click', logOut);
    } else {
        const li = document.createElement('li');
        li.id = 'nav-auth-section';
        li.innerHTML = `<a href="#" class="btn btn-primary nav-login-btn" style="padding: 0.7rem 1.5rem; color:#fff;" id="nav-login-link">Login / Sign Up</a>`;
        navLinks.appendChild(li);
        const loginLink = li.querySelector('#nav-login-link');
        if (loginLink) loginLink.addEventListener('click', function(e){ e.preventDefault(); openAuthModal('login'); });
    }
}

// ─── MOBILE MENU TOGGLE ─────────────────────
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ─── FAQ ACCORDION ───────────────────────────
function toggleFaq(id) {
    const answer = document.getElementById('answer-' + id);
    const icon = document.getElementById('icon-' + id);
    if (answer) answer.classList.toggle('active');
    if (icon) icon.classList.toggle('active');
}

// ─── TOAST NOTIFICATION ──────────────────────
function showToast(message, type = 'success') {
    const existing = document.querySelector('.trade-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'trade-toast' + (type === 'error' ? ' error' : '');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

// ============================================
// DEMO TRADING ENGINE (Virtual Money)
// ============================================

const INITIAL_BALANCE = 1000000; // ₹10,00,000
let tradeType = 'buy';

// Initialize or load account from localStorage
function getAccount() {
    const saved = localStorage.getItem('learntrading_demo_account');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        balance: INITIAL_BALANCE,
        initialBalance: INITIAL_BALANCE,
        positions: {},
        history: [],
        totalTrades: 0
    };
}

function saveAccount(account) {
    localStorage.setItem('learntrading_demo_account', JSON.stringify(account));
}

// Stock prices with simulated fluctuation
const stockPrices = {
    'RELIANCE': { name: 'Reliance Industries', price: 2890.50 },
    'TCS': { name: 'Tata Consultancy Services', price: 3950.75 },
    'INFY': { name: 'Infosys', price: 1685.30 },
    'HDFCBANK': { name: 'HDFC Bank', price: 1620.45 },
    'ICICIBANK': { name: 'ICICI Bank', price: 1245.80 },
    'WIPRO': { name: 'Wipro', price: 542.15 },
    'SBIN': { name: 'State Bank of India', price: 785.60 },
    'TATAMOTORS': { name: 'Tata Motors', price: 945.30 },
    'ADANIENT': { name: 'Adani Enterprises', price: 2340.90 },
    'ITC': { name: 'ITC Limited', price: 465.20 }
};

// Simulate price fluctuation
function simulatePriceChange() {
    for (let symbol in stockPrices) {
        const change = (Math.random() - 0.48) * 0.02;
        stockPrices[symbol].price *= (1 + change);
        stockPrices[symbol].price = Math.round(stockPrices[symbol].price * 100) / 100;
    }

    const assetSelect = document.getElementById('trade-asset');
    if (assetSelect) {
        const options = assetSelect.options;
        for (let i = 0; i < options.length; i++) {
            const symbol = options[i].value;
            if (stockPrices[symbol]) {
                options[i].setAttribute('data-price', stockPrices[symbol].price);
            }
        }
    }

    updateTradePreview();
    renderPositions();
    updateDashboardStats();
}

// Format currency
function formatINR(amount) {
    const abs = Math.abs(amount);
    const sign = amount < 0 ? '-' : '';
    if (abs >= 10000000) {
        return sign + '₹' + (abs / 10000000).toFixed(2) + ' Cr';
    } else if (abs >= 100000) {
        return sign + '₹' + (abs / 100000).toFixed(2) + ' L';
    }
    return sign + '₹' + abs.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Select trade type
function selectTradeType(type) {
    tradeType = type;
    const buyBtn = document.getElementById('btn-buy');
    const sellBtn = document.getElementById('btn-sell');
    const executeBtn = document.getElementById('execute-trade-btn');
    if (!buyBtn || !sellBtn || !executeBtn) return;

    if (type === 'buy') {
        buyBtn.style.opacity = '1';
        sellBtn.style.opacity = '0.5';
        executeBtn.textContent = 'Buy with Virtual Money';
        executeBtn.style.background = 'var(--gradient-success)';
    } else {
        buyBtn.style.opacity = '0.5';
        sellBtn.style.opacity = '1';
        executeBtn.textContent = 'Sell from Portfolio';
        executeBtn.style.background = 'var(--gradient-danger)';
    }
}

// Update trade preview
function updateTradePreview() {
    const assetSelect = document.getElementById('trade-asset');
    const quantityEl = document.getElementById('trade-quantity');
    const priceDisplay = document.getElementById('trade-price-display');
    const totalDisplay = document.getElementById('trade-total-display');
    if (!assetSelect || !quantityEl || !priceDisplay || !totalDisplay) return;

    const quantity = parseInt(quantityEl.value) || 0;
    const selectedOption = assetSelect.options[assetSelect.selectedIndex];
    const price = parseFloat(selectedOption.getAttribute('data-price'));
    const total = price * quantity;

    priceDisplay.textContent = formatINR(price);
    totalDisplay.textContent = formatINR(total);
}

// Execute demo trade
function executeDemoTrade() {
    const account = getAccount();
    const assetSelect = document.getElementById('trade-asset');
    const symbol = assetSelect.value;
    const quantity = parseInt(document.getElementById('trade-quantity').value) || 0;
    const price = stockPrices[symbol].price;
    const total = price * quantity;

    if (quantity <= 0) {
        showToast('Please enter a valid quantity', 'error');
        return;
    }

    if (tradeType === 'buy') {
        if (total > account.balance) {
            showToast('Insufficient virtual funds! Available: ' + formatINR(account.balance), 'error');
            return;
        }

        if (account.positions[symbol]) {
            const existing = account.positions[symbol];
            const totalQty = existing.quantity + quantity;
            const avgPrice = ((existing.avgPrice * existing.quantity) + (price * quantity)) / totalQty;
            account.positions[symbol] = {
                quantity: totalQty,
                avgPrice: Math.round(avgPrice * 100) / 100,
                name: stockPrices[symbol].name
            };
        } else {
            account.positions[symbol] = {
                quantity: quantity,
                avgPrice: price,
                name: stockPrices[symbol].name
            };
        }

        account.balance -= total;
        showToast(`✅ Bought ${quantity} shares of ${symbol} at ${formatINR(price)} (Demo Trade)`);

    } else {
        if (!account.positions[symbol] || account.positions[symbol].quantity < quantity) {
            const available = account.positions[symbol] ? account.positions[symbol].quantity : 0;
            showToast(`Not enough shares! You have ${available} shares of ${symbol}`, 'error');
            return;
        }

        account.positions[symbol].quantity -= quantity;
        account.balance += total;

        if (account.positions[symbol].quantity === 0) {
            delete account.positions[symbol];
        }

        showToast(`✅ Sold ${quantity} shares of ${symbol} at ${formatINR(price)} (Demo Trade)`);
    }

    account.history.unshift({
        date: new Date().toLocaleString('en-IN'),
        type: tradeType.toUpperCase(),
        symbol: symbol,
        quantity: quantity,
        price: price,
        total: total
    });

    account.totalTrades++;
    saveAccount(account);
    renderAll();
}

// Reset demo account
function resetAccount() {
    if (confirm('Reset your demo account? This will clear all positions and history, and reset your virtual balance to ₹10,00,000.')) {
        localStorage.removeItem('learntrading_demo_account');
        renderAll();
        showToast('🔄 Demo account reset! You have ₹10,00,000 virtual cash again.');
    }
}

// Render positions table
function renderPositions() {
    const account = getAccount();
    const positions = account.positions;
    const keys = Object.keys(positions);

    const emptyEl = document.getElementById('positions-empty');
    const tableEl = document.getElementById('positions-table');
    const bodyEl = document.getElementById('positions-body');
    if (!emptyEl || !tableEl || !bodyEl) return;

    if (keys.length === 0) {
        emptyEl.style.display = 'block';
        tableEl.style.display = 'none';
        return;
    }

    emptyEl.style.display = 'none';
    tableEl.style.display = 'table';

    bodyEl.innerHTML = keys.map(symbol => {
        const pos = positions[symbol];
        const currentPrice = stockPrices[symbol] ? stockPrices[symbol].price : pos.avgPrice;
        const pnl = (currentPrice - pos.avgPrice) * pos.quantity;
        const pnlPercent = ((currentPrice - pos.avgPrice) / pos.avgPrice * 100).toFixed(2);
        const pnlClass = pnl >= 0 ? 'profit-positive' : 'profit-negative';

        return `
            <tr>
                <td><strong>${symbol}</strong><br><small style="color:#b8c5d6;">${pos.name}</small></td>
                <td><span class="badge badge-success">BUY</span></td>
                <td>${pos.quantity}</td>
                <td>${formatINR(pos.avgPrice)}</td>
                <td>${formatINR(currentPrice)}</td>
                <td class="${pnlClass}"><strong>${formatINR(pnl)} (${pnlPercent}%)</strong></td>
                <td><button class="btn btn-danger" style="padding: 0.5rem 1rem;" data-symbol="${symbol}" data-qty="${pos.quantity}">Close</button></td>
            </tr>
        `;
    }).join('');
}

// Quick sell all shares of a position
function quickSell(symbol, quantity) {
    const account = getAccount();
    const price = stockPrices[symbol].price;
    const total = price * quantity;

    account.balance += total;

    account.history.unshift({
        date: new Date().toLocaleString('en-IN'),
        type: 'SELL',
        symbol: symbol,
        quantity: quantity,
        price: price,
        total: total
    });

    delete account.positions[symbol];
    account.totalTrades++;
    saveAccount(account);
    renderAll();
    showToast(`✅ Closed ${symbol} position — ${quantity} shares sold at ${formatINR(price)}`);
}

// Render trade history
function renderHistory() {
    const account = getAccount();
    const history = account.history;

    const emptyEl = document.getElementById('history-empty');
    const tableEl = document.getElementById('history-table');
    const bodyEl = document.getElementById('history-body');
    if (!emptyEl || !tableEl || !bodyEl) return;

    if (history.length === 0) {
        emptyEl.style.display = 'block';
        tableEl.style.display = 'none';
        return;
    }

    emptyEl.style.display = 'none';
    tableEl.style.display = 'table';

    bodyEl.innerHTML = history.slice(0, 20).map(trade => {
        const badgeClass = trade.type === 'BUY' ? 'badge-success' : 'badge-danger';
        return `
            <tr>
                <td>${trade.date}</td>
                <td><span class="badge ${badgeClass}">${trade.type}</span></td>
                <td><strong>${trade.symbol}</strong></td>
                <td>${trade.quantity}</td>
                <td>${formatINR(trade.price)}</td>
                <td>${formatINR(trade.total)}</td>
                <td><span class="badge badge-success">Completed</span></td>
            </tr>
        `;
    }).join('');
}

// Update dashboard stats
function updateDashboardStats() {
    const account = getAccount();

    let portfolioValue = 0;
    let investedValue = 0;
    for (let symbol in account.positions) {
        const pos = account.positions[symbol];
        const currentPrice = stockPrices[symbol] ? stockPrices[symbol].price : pos.avgPrice;
        portfolioValue += currentPrice * pos.quantity;
        investedValue += pos.avgPrice * pos.quantity;
    }

    const totalValue = account.balance + portfolioValue;
    const totalPnl = totalValue - account.initialBalance;
    const pnlPercent = ((totalPnl / account.initialBalance) * 100).toFixed(2);

    const totalBalanceEl = document.getElementById('total-balance');
    const availCashEl = document.getElementById('available-cash');
    const inPosEl = document.getElementById('in-positions');
    const totalTradesEl = document.getElementById('total-trades');
    const pnlEl = document.getElementById('total-pnl');
    const activeTradesEl = document.getElementById('active-trades-count');

    if (totalBalanceEl) totalBalanceEl.textContent = formatINR(totalValue);
    if (availCashEl) availCashEl.textContent = formatINR(account.balance);
    if (inPosEl) inPosEl.textContent = formatINR(portfolioValue);
    if (totalTradesEl) totalTradesEl.textContent = account.totalTrades;

    if (pnlEl) {
        pnlEl.textContent = `${formatINR(totalPnl)} (${pnlPercent}%) P&L`;
        pnlEl.className = totalPnl >= 0 ? 'profit-positive' : 'profit-negative';
    }

    if (activeTradesEl) {
        const activeCount = Object.keys(account.positions).length;
        activeTradesEl.textContent = `${activeCount} Active Trade${activeCount !== 1 ? 's' : ''}`;
    }
}

// Render everything (dashboard)
function renderAll() {
    updateDashboardStats();
    renderPositions();
    renderHistory();
    updateTradePreview();
}
// ============================================
// DARK MODE
// ============================================

// Apply theme IMMEDIATELY before DOM is ready (avoids flash)
(function() {
    const saved = localStorage.getItem('learntrading_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('learntrading_theme', 'light');
        updateThemeIcons('light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('learntrading_theme', 'dark');
        updateThemeIcons('dark');
    }
}

function updateThemeIcons(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
        btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
}

// ============================================
// INITIALIZATION — Wire all events here
// ============================================
document.addEventListener('DOMContentLoaded', function() {

    // ----- Sync theme icon on load -----
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeIcons(currentTheme);

    // ----- Theme toggle buttons -----
    document.addEventListener('click', function(e) {
        if (e.target.closest('.theme-toggle-btn')) toggleTheme();
    });

    // ----- Mobile menu toggle -----
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks   = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // ----- FAQ accordion -----
    document.querySelectorAll('[data-faq-id]').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-faq-id');
            toggleFaq(id);
        });
    });

    // ----- Auth UI -----
    updateAuthUI();
    interceptButtons();

    // ----- Dashboard: BUY / SELL buttons -----
    const btnBuy = document.getElementById('btn-buy');
    const btnSell = document.getElementById('btn-sell');
    const executeBtn = document.getElementById('execute-trade-btn');
    const resetBtn = document.getElementById('reset-account-btn');
    const tradeAsset = document.getElementById('trade-asset');
    const tradeQty = document.getElementById('trade-quantity');

    if (btnBuy)    btnBuy.addEventListener('click',    () => selectTradeType('buy'));
    if (btnSell)   btnSell.addEventListener('click',   () => selectTradeType('sell'));
    if (executeBtn) executeBtn.addEventListener('click', executeDemoTrade);
    if (resetBtn)  resetBtn.addEventListener('click',  resetAccount);
    if (tradeAsset) tradeAsset.addEventListener('change', updateTradePreview);
    if (tradeQty)   tradeQty.addEventListener('input',   updateTradePreview);

    // Dashboard-specific init
    if (document.getElementById('trade-asset')) {
        selectTradeType('buy');
        renderAll();
        setInterval(simulatePriceChange, 5000);
    }

    // ----- Event delegation: quickSell buttons in positions table -----
    // (these are dynamically rendered, so we delegate from a stable ancestor)
    document.addEventListener('click', function(e) {
        const closeBtn = e.target.closest('button[data-symbol]');
        if (closeBtn) {
            const symbol = closeBtn.getAttribute('data-symbol');
            const qty    = parseInt(closeBtn.getAttribute('data-qty'), 10);
            quickSell(symbol, qty);
        }
    });
});

