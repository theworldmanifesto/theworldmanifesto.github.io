// ============================================================
// MENU.JS – Två knappar med rullgardiner: MANIFESTET + HEM
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SPRÅK ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ÖVERSÄTTNINGAR ---
    const translations = {
        'en': { home: 'HOME', manifesto: '🌐 MANIFESTO' },
        'zh': { home: '首页', manifesto: '🌐 宣言' },
        'hi': { home: 'होम', manifesto: '🌐 घोषणापत्र' },
        'es': { home: 'INICIO', manifesto: '🌐 MANIFIESTO' },
        'fr': { home: 'ACCUEIL', manifesto: '🌐 MANIFESTE' },
        'ar': { home: 'الرئيسية', manifesto: '🌐 البيان' },
        'bn': { home: 'হোম', manifesto: '🌐 ইশতেহার' },
        'pt': { home: 'INÍCIO', manifesto: '🌐 MANIFESTO' },
        'ru': { home: 'ГЛАВНАЯ', manifesto: '🌐 МАНИФЕСТ' },
        'ur': { home: 'ہوم', manifesto: '🌐 منشور' },
        'id': { home: 'BERANDA', manifesto: '🌐 MANIFES' },
        'de': { home: 'STARTSEITE', manifesto: '🌐 MANIFEST' },
        'ja': { home: 'ホーム', manifesto: '🌐 宣言' },
        'sw': { home: 'NYUMBA', manifesto: '🌐 ILANI' },
        'tl': { home: 'HOME', manifesto: '🌐 MANIPESTO' },
        'tr': { home: 'ANA SAYFA', manifesto: '🌐 MANİFESTO' },
        'vi': { home: 'TRANG CHỦ', manifesto: '🌐 TUYÊN NGÔN' },
        'ko': { home: '홈', manifesto: '🌐 선언문' },
        'fa': { home: 'خانه', manifesto: '🌐 مانیفست' },
        'it': { home: 'HOME', manifesto: '🌐 MANIFESTO' },
        'th': { home: 'หน้าแรก', manifesto: '🌐 แถลงการณ์' },
        'pl': { home: 'STRONA GŁÓWNA', manifesto: '🌐 MANIFEST' },
        'uk': { home: 'ГОЛОВНА', manifesto: '🌐 МАНІФЕСТ' },
        'nl': { home: 'HOME', manifesto: '🌐 MANIFEST' },
        'ro': { home: 'ACASĂ', manifesto: '🌐 MANIFEST' },
        'el': { home: 'ΑΡΧΙΚΗ', manifesto: '🌐 ΜΑΝΙΦΕΣΤΟ' },
        'hu': { home: 'FŐOLDAL', manifesto: '🌐 MANIFESZTUM' },
        'cs': { home: 'DOMŮ', manifesto: '🌐 MANIFEST' },
        'sv': { home: 'HEM', manifesto: '🌐 MANIFESTET' },
        'bg': { home: 'НАЧАЛО', manifesto: '🌐 МАНИФЕСТ' },
        'no': { home: 'HJEM', manifesto: '🌐 MANIFESTET' },
        'da': { home: 'HJEM', manifesto: '🌐 MANIFESTET' },
        'fi': { home: 'ETUSIVU', manifesto: '🌐 MANIFESTI' },
        'he': { home: 'בית', manifesto: '🌐 מניפוסט' },
        'af': { home: 'TUIS', manifesto: '🌐 MANIFES' },
        'zu': { home: 'IKHAYA', manifesto: '🌐 IMANIFESTO' },
        'xh': { home: 'IKHAYA', manifesto: '🌐 IMANIFESTO' },
        'is': { home: 'HEIM', manifesto: '🌐 MANIFESTI' },
        'fo': { home: 'HEIM', manifesto: '🌐 MANIFEST' },
        'crs': { home: 'LAKAZ', manifesto: '🌐 MANIFEST' },
        'se': { home: 'RUOKTU', manifesto: '🌐 MANIFESTA' },
        'fit': { home: 'KOTI', manifesto: '🌐 MANIFESTI' }
    };

    const t = translations[currentLang] || translations['en'];

    // --- SÖKVÄG ---
    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }
    const base = getBasePath();

    // --- Hjälpfunktion för mobil ---
    function isMobile() {
        return window.innerWidth <= 600;
    }

    // --- HEM-knapptext (mobil/dator) ---
    function getHomeButtonText() {
        return isMobile() ? '☰ ' + t.home : '🏠 ' + t.home;
    }

    // --- MANIFESTET-knapptext ---
    function getManifestoButtonText() {
        return isMobile() ? '📄' : t.manifesto; // Mobil: kortare text
    }

    // --- MANIFESTET-MENY (språkval) ---
    function getManifestoMenu() {
        const languages = [
            { code: 'af', name: 'Afrikaans' },
            { code: 'ar', name: 'العربية' },
            { code: 'bg', name: 'Български' },
            { code: 'bn', name: 'বাংলা' },
            { code: 'crs', name: 'Kreol seselwa' },
            { code: 'cs', name: 'Čeština' },
            { code: 'da', name: 'Dansk' },
            { code: 'de', name: 'Deutsch' },
            { code: 'el', name: 'Ελληνικά' },
            { code: 'en', name: 'English' },
            { code: 'es', name: 'Español' },
            { code: 'fa', name: 'فارسی' },
            { code: 'fi', name: 'Suomi' },
            { code: 'fit', name: 'Meänkieli' },
            { code: 'fo', name: 'Føroyskt' },
            { code: 'fr', name: 'Français' },
            { code: 'he', name: 'עברית' },
            { code: 'hi', name: 'हिंदी' },
            { code: 'hu', name: 'Magyar' },
            { code: 'id', name: 'Bahasa Indonesia' },
            { code: 'is', name: 'Íslenska' },
            { code: 'it', name: 'Italiano' },
            { code: 'ja', name: '日本語' },
            { code: 'ko', name: '한국어' },
            { code: 'nl', name: 'Nederlands' },
            { code: 'no', name: 'Norsk' },
            { code: 'pl', name: 'Polski' },
            { code: 'pt', name: 'Português' },
            { code: 'ro', name: 'Română' },
            { code: 'ru', name: 'Русский' },
            { code: 'se', name: 'Davvisámegiella' },
            { code: 'sv', name: 'Svenska' },
            { code: 'sw', name: 'Kiswahili' },
            { code: 'th', name: 'ภาษาไทย' },
            { code: 'tl', name: 'Filipino' },
            { code: 'tr', name: 'Türkçe' },
            { code: 'uk', name: 'Українська' },
            { code: 'ur', name: 'اردو' },
            { code: 'vi', name: 'Tiếng Việt' },
            { code: 'xh', name: 'isiXhosa' },
            { code: 'zh', name: '中文' },
            { code: 'zu', name: 'isiZulu' }
        ];

        languages.sort((a, b) => a.name.localeCompare(b.name));

        let menu = `
            <div class="dropdown" id="manifestoDropdown">
                <a href="#" class="dropbtn" id="manifestoBtn">${getManifestoButtonText()}</a>
                <div class="dropdown-content">
        `;
        languages.forEach(lang => {
            menu += `<a href="${base}lang/read.html?lang=${lang.code}">${lang.name}</a>`;
        });
        menu += `</div></div>`;
        return menu;
    }

    // --- HEM-MENY (navigering) ---
    function getHomeMenu() {
        const btnText = getHomeButtonText();
        return `
            <div class="dropdown" id="homeDropdown">
                <a href="${base}index.html" class="dropbtn" id="homeBtn">${btnText}</a>
                <div class="dropdown-content">
                    <a href="${base}index.html">🏠 ${t.home}</a>
                    <a href="${base}freedom-staircase/freedom-staircase.html">🪜 Freedom Staircase</a>
                    <a href="${base}tropics/tropics.html">🌎 The Tropics</a>
                    <a href="${base}robotel/robotel.html">👄 Robotel</a>
                    <a href="${base}share/share.html">💬 Share</a>
                </div>
            </div>
        `;
    }

    // --- SÄTT IN MENYERNA ---
    const navWrapper = document.querySelector('.nav-wrapper');
    if (navWrapper) {
        // MANIFESTET – lägg till om den inte redan finns
        if (!document.getElementById('manifestoDropdown')) {
            const manifestoContainer = document.createElement('div');
            manifestoContainer.className = 'menu-item';
            manifestoContainer.innerHTML = getManifestoMenu();
            navWrapper.prepend(manifestoContainer);
        }

        // HEM – uppdatera befintlig
        const menuContainer = document.getElementById('main-menu');
        if (menuContainer) {
            menuContainer.innerHTML = getHomeMenu();
        }
    }

    // --- Uppdatera knapptext vid fönsterändring ---
    function updateButtonTexts() {
        const manifestoBtn = document.getElementById('manifestoBtn');
        if (manifestoBtn) {
            manifestoBtn.textContent = getManifestoButtonText();
        }
        const homeBtn = document.getElementById('homeBtn');
        if (homeBtn) {
            homeBtn.textContent = getHomeButtonText();
        }
    }
    window.addEventListener('resize', updateButtonTexts);

    // --- MOBIL: klick öppnar menyerna ---
    function setupDropdown(dropdownId, btnId) {
        const dropdown = document.getElementById(dropdownId);
        const btn = document.getElementById(btnId);

        if (btn && dropdown) {
            // Ta bort gamla event listeners
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            const newDropdown = dropdown.cloneNode(true);
            dropdown.parentNode.replaceChild(newDropdown, dropdown);

            const freshBtn = document.getElementById(btnId);
            const freshDropdown = document.getElementById(dropdownId);

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
    }

    setupDropdown('manifestoDropdown', 'manifestoBtn');
    setupDropdown('homeDropdown', 'homeBtn');
});
