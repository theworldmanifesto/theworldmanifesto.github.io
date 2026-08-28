// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ÖVERSÄTTNINGAR ---
    const translations = {
        'en': {
            menuLabel: 'MENU',
            home: 'Home',
            manifesto: 'The World Manifesto',
            freedom: 'Freedom Staircase',
            tropics: 'The Tropics',
            robotel: 'Robotel',
            share: 'Share'
        },
        'sv': {
            menuLabel: 'MENY',
            home: 'Hem',
            manifesto: 'Världsmanifestet',
            freedom: 'Frihetstrappan',
            tropics: 'Tropikerna',
            robotel: 'Robotel',
            share: 'Dela'
        },
        'zh': {
            menuLabel: '菜单',
            home: '首页',
            manifesto: '世界宣言',
            freedom: '自由阶梯',
            tropics: '热带地区',
            robotel: '机器人',
            share: '分享'
        }
        // Lägg till fler språk här...
    };

    const t = translations[currentLang] || translations['en'];

    // --- RÄKNA UT SÖKVÄG (fungerar från alla mappar) ---
    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0 && p !== 'index.html');
        const depth = parts.length;
        return '../'.repeat(Math.max(0, depth));
    }

    const base = getBasePath();

    // --- SKAPA MENYN ---
    const menuHTML = `
        <div class="site-nav">
            <div class="dropdown" id="homeDropdown">
                <button class="dropbtn" id="menuBtn">${t.menuLabel}</button>
                <div class="dropdown-content">
                    <a href="${base}index.html">🏠 ${t.home}</a>
                    <a href="${base}lang/lang.html">📜 ${t.manifesto}</a>
                    <a href="${base}freedom-staircase/freedom-staircase.html">🪜 ${t.freedom}</a>
                    <a href="${base}tropics/tropics.html">🌎 ${t.tropics}</a>
                    <a href="${base}robotel/robotel.html">🤖 ${t.robotel}</a>
                    <a href="${base}share/share.html">💬 ${t.share}</a>
                </div>
            </div>
        </div>
    `;

    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    }

    // --- KLICK ÖPPNAR/STÄNGER ---
    const dropdown = document.getElementById('homeDropdown');
    const menuBtn = document.getElementById('menuBtn');

    if (menuBtn && dropdown) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
});
