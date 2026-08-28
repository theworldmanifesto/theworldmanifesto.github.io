// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK från <html lang="..."> ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ORDBOK FÖR ALLA MENY-OBJEKT (översättningar) ---
    const translations = {
        // Större språk
        'en': {
            home: 'HOME',
            moreLanguages: 'More Languages',
            freedomStaircase: 'Freedom Staircase',
            tropics: 'The Tropics',
            robotel: 'Robotel',
            share: 'Share'
        },
        'sv': {
            home: 'HEM',
            moreLanguages: 'Fler språk',
            freedomStaircase: 'Frihetstrappan',
            tropics: 'Tropikerna',
            robotel: 'Robotel',
            share: 'Dela'
        },
        'zh': {
            home: '首页',
            moreLanguages: '更多语言',
            freedomStaircase: '自由阶梯',
            tropics: '热带地区',
            robotel: '机器人',
            share: '分享'
        },
        'es': {
            home: 'INICIO',
            moreLanguages: 'Más idiomas',
            freedomStaircase: 'Escalera de la Libertad',
            tropics: 'Los Trópicos',
            robotel: 'Robotel',
            share: 'Compartir'
        },
        'fr': {
            home: 'ACCUEIL',
            moreLanguages: 'Plus de langues',
            freedomStaircase: 'Escalier de la Liberté',
            tropics: 'Les Tropiques',
            robotel: 'Robotel',
            share: 'Partager'
        },
        'de': {
            home: 'STARTSEITE',
            moreLanguages: 'Weitere Sprachen',
            freedomStaircase: 'Freiheitstreppe',
            tropics: 'Die Tropen',
            robotel: 'Robotel',
            share: 'Teilen'
        },
        // ... lägg till fler språk här efter behov
    };

    // Fallback till engelska om språket saknas
    const t = translations[currentLang] || translations['en'];

    // --- RÄKNA UT HUR MÅNGA NIVÅER UPP VI BEFINNER OSS ---
    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }

    const base = getBasePath();

    // --- Hjälpfunktion för att avgöra om vi är på mobil ---
    function isMobile() {
        return window.innerWidth <= 600;
    }

    // --- Bygg knapptext beroende på skärmbredd ---
    function getButtonText() {
        return isMobile() ? '☰ ' + t.home : '🌐 ' + t.home;
    }

    // --- SKAPA MENYN (med dynamisk knapptext och översättningar) ---
    function buildMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <a href="${base}index.html" class="dropbtn" id="homeBtn">${btnText}</a>
                    <div class="dropdown-content">
                        <a href="${base}index.html">🏠 ${t.home}</a>
                        <a href="${base}lang/lang.html">🌐 ${t.moreLanguages}</a>
                        <a href="${base}freedom-staircase/freedom-staircase.html">🪜 ${t.freedomStaircase}</a>
                        <a href="${base}tropics/tropics.html">🌎 ${t.tropics}</a>
                        <a href="${base}robotel/robotel.html">🤖 ${t.robotel}</a>
                        <a href="${base}share/share.html">💬 ${t.share}</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Sätt in menyn i #main-menu
    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = buildMenu();
    }

    // --- Uppdatera knapptext vid fönsterändring ---
    function updateButtonText() {
        const btn = document.getElementById('homeBtn');
        if (btn) {
            btn.textContent = getButtonText();
        }
    }

    window.addEventListener('resize', updateButtonText);

    // --- MOBIL: KLICK VÄXLAR MENYN ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('homeBtn');

    if (btn && dropdown) {
        // Klona för att undvika dubbla eventlisteners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        const newDropdown = dropdown.cloneNode(true);
        dropdown.parentNode.replaceChild(newDropdown, dropdown);

        const freshBtn = document.getElementById('homeBtn');
        const freshDropdown = document.getElementById('homeDropdown');

        if (freshBtn && freshDropdown) {
            freshBtn.addEventListener('click', function(e) {
                if (isMobile()) {
                    e.preventDefault();
                    freshDropdown.classList.toggle('active');
                }
            });

            document.addEventListener('click', function(e) {
                if (!freshDropdown.contains(e.target)) {
                    freshDropdown.classList.remove('active');
                }
            });
        }
    }
});
