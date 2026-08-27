// ============================================================
// MENU.JS – MANIFESTET (språkmeny) + HEM (navigering)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SPRÅK ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ÖVERSÄTTNINGAR ---
    const translations = {
        'en': { home: 'HOME', read: 'THE MANIFESTO' },
        'sv': { home: 'HEM', read: 'MANIFESTET' },
        'es': { home: 'INICIO', read: 'EL MANIFIESTO' },
        'fr': { home: 'ACCUEIL', read: 'LE MANIFESTE' },
        'de': { home: 'STARTSEITE', read: 'DAS MANIFEST' },
        // ... lägg till alla 42 språk här ...
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

    // --- Mobil? ---
    function isMobile() {
        return window.innerWidth <= 600;
    }

    // --- MANIFESTET-knapptext ---
    function getManifestText() {
        return isMobile() ? '📖' : t.read;
    }

    // --- HEM-knapptext ---
    function getHomeButtonText() {
        return isMobile() ? '☰ ' + t.home : '🌐 ' + t.home;
    }

    // --- MANIFESTET (språkmeny) ---
    function getManifestMenu() {
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

        const btnText = getManifestText();

        let menu = `
            <div class="manifest-menu">
                <div class="dropdown manifest-dropdown" id="manifestDropdown">
                    <button class="dropbtn manifest-btn" id="manifestBtn">${btnText}</button>
                    <div class="dropdown-content manifest-content">
        `;
        languages.forEach(lang => {
            menu += `<a href="${base}lang/read.html?lang=${lang.code}">${lang.name}</a>`;
        });
        menu += `
                    </div>
                </div>
            </div>
        `;
        return menu;
    }

    // --- HEM-MENY (navigering) ---
    function getHomeMenu() {
        const btnText = getHomeButtonText();
        return `
            <div class="home-menu">
                <div class="dropdown home-dropdown" id="homeDropdown">
                    <a href="${base}index.html" class="dropbtn home-btn" id="homeBtn">${btnText}</a>
                    <div class="dropdown-content home-content">
                        <a href="${base}index.html">🏠 ${t.home}</a>
                        <a href="${base}freedom-staircase/freedom-staircase.html">🪜 Freedom Staircase</a>
                        <a href="${base}tropics/tropics.html">🌎 The Tropics</a>
                        <a href="${base}robotel/robotel.html">👄 Robotel</a>
                        <a href="${base}share/share.html">💬 Share</a>
                    </div>
                </div>
            </div>
        `;
    }

    // --- SÄTT IN MENYERNA ---
    const navWrapper = document.querySelector('.nav-wrapper');
    if (navWrapper) {
        // MANIFESTET – lägg till
        if (!navWrapper.querySelector('.manifest-menu')) {
            const manifestContainer = document.createElement('div');
            manifestContainer.innerHTML = getManifestMenu();
            navWrapper.prepend(manifestContainer);
        }

        // HEM – uppdatera befintlig
        const menuContainer = document.getElementById('main-menu');
        if (menuContainer) {
            menuContainer.innerHTML = getHomeMenu();
        }
    }

    // --- Uppdatera knappar vid fönsterändring ---
    function updateButtons() {
        const manifestBtn = document.getElementById('manifestBtn');
        if (manifestBtn) {
            manifestBtn.textContent = getManifestText();
        }
        const homeBtn = document.getElementById('homeBtn');
        if (homeBtn) {
            homeBtn.textContent = getHomeButtonText();
        }
    }
    window.addEventListener('resize', updateButtons);

    // --- MOBIL: klick öppnar MANIFESTET ---
    const manifestDropdown = document.getElementById('manifestDropdown');
    const manifestBtn = document.getElementById('manifestBtn');
    if (manifestBtn && manifestDropdown) {
        const newBtn = manifestBtn.cloneNode(true);
        manifestBtn.parentNode.replaceChild(newBtn, manifestBtn);
        const newDropdown = manifestDropdown.cloneNode(true);
        manifestDropdown.parentNode.replaceChild(newDropdown, manifestDropdown);

        const freshManifestBtn = document.getElementById('manifestBtn');
        const freshManifestDropdown = document.getElementById('manifestDropdown');

        if (freshManifestBtn && freshManifestDropdown) {
            freshManifestBtn.addEventListener('click', function(e) {
                if (isMobile()) {
                    e.preventDefault();
                    freshManifestDropdown.classList.toggle('active');
                }
            });
            document.addEventListener('click', function(e) {
                if (!freshManifestDropdown.contains(e.target)) {
                    freshManifestDropdown.classList.remove('active');
                }
            });
        }
    }

    // --- MOBIL: klick öppnar HEM ---
    const homeDropdown = document.getElementById('homeDropdown');
    const homeBtn = document.getElementById('homeBtn');
    if (homeBtn && homeDropdown) {
        const newBtn = homeBtn.cloneNode(true);
        homeBtn.parentNode.replaceChild(newBtn, homeBtn);
        const newDropdown = homeDropdown.cloneNode(true);
        homeDropdown.parentNode.replaceChild(newDropdown, homeDropdown);

        const freshHomeBtn = document.getElementById('homeBtn');
        const freshHomeDropdown = document.getElementById('homeDropdown');

        if (freshHomeBtn && freshHomeDropdown) {
            freshHomeBtn.addEventListener('click', function(e) {
                if (isMobile()) {
                    e.preventDefault();
                    freshHomeDropdown.classList.toggle('active');
                }
            });
            document.addEventListener('click', function(e) {
                if (!freshHomeDropdown.contains(e.target)) {
                    freshHomeDropdown.classList.remove('active');
                }
            });
        }
    }
});
