// ============================================================
// MENU.JS – Modern meny med READ + HEM (flytande)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SPRÅK ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ÖVERSÄTTNINGAR FÖR MENYERNA ---
    const translations = {
        'en': { home: 'HOME', read: '🌐 Choose language' },
        'zh': { home: '首页', read: '🌐 选择语言' },
        'hi': { home: 'होम', read: '🌐 भाषा चुनें' },
        'es': { home: 'INICIO', read: '🌐 Elige idioma' },
        'fr': { home: 'ACCUEIL', read: '🌐 Choisissez la langue' },
        'ar': { home: 'الرئيسية', read: '🌐 اختر اللغة' },
        'bn': { home: 'হোম', read: '🌐 ভাষা নির্বাচন করুন' },
        'pt': { home: 'INÍCIO', read: '🌐 Escolha o idioma' },
        'ru': { home: 'ГЛАВНАЯ', read: '🌐 Выберите язык' },
        'ur': { home: 'ہوم', read: '🌐 زبان منتخب کریں' },
        'id': { home: 'BERANDA', read: '🌐 Pilih bahasa' },
        'de': { home: 'STARTSEITE', read: '🌐 Sprache wählen' },
        'ja': { home: 'ホーム', read: '🌐 言語を選択' },
        'sw': { home: 'NYUMBA', read: '🌐 Chagua lugha' },
        'tl': { home: 'HOME', read: '🌐 Pumili ng wika' },
        'tr': { home: 'ANA SAYFA', read: '🌐 Dil seçin' },
        'vi': { home: 'TRANG CHỦ', read: '🌐 Chọn ngôn ngữ' },
        'ko': { home: '홈', read: '🌐 언어 선택' },
        'fa': { home: 'خانه', read: '🌐 انتخاب زبان' },
        'it': { home: 'HOME', read: '🌐 Scegli la lingua' },
        'th': { home: 'หน้าแรก', read: '🌐 เลือกภาษา' },
        'pl': { home: 'STRONA GŁÓWNA', read: '🌐 Wybierz język' },
        'uk': { home: 'ГОЛОВНА', read: '🌐 Виберіть мову' },
        'nl': { home: 'HOME', read: '🌐 Kies taal' },
        'ro': { home: 'ACASĂ', read: '🌐 Alegeți limba' },
        'el': { home: 'ΑΡΧΙΚΗ', read: '🌐 Επιλέξτε γλώσσα' },
        'hu': { home: 'FŐOLDAL', read: '🌐 Válasszon nyelvet' },
        'cs': { home: 'DOMŮ', read: '🌐 Vyberte jazyk' },
        'sv': { home: 'HEM', read: '🌐 Välj språk' },
        'bg': { home: 'НАЧАЛО', read: '🌐 Изберете език' },
        'no': { home: 'HJEM', read: '🌐 Velg språk' },
        'da': { home: 'HJEM', read: '🌐 Vælg sprog' },
        'fi': { home: 'ETUSIVU', read: '🌐 Valitse kieli' },
        'he': { home: 'בית', read: '🌐 בחר שפה' },
        'af': { home: 'TUIS', read: '🌐 Kies taal' },
        'zu': { home: 'IKHAYA', read: '🌐 Khetha ulimi' },
        'xh': { home: 'IKHAYA', read: '🌐 Khetha ulimi' },
        'is': { home: 'HEIM', read: '🌐 Veldu tungumál' },
        'fo': { home: 'HEIM', read: '🌐 Vel mál' },
        'crs': { home: 'LAKAZ', read: '🌐 Sazir langaz' },
        'se': { home: 'RUOKTU', read: '🌐 Vállje giella' },
        'fit': { home: 'KOTI', read: '🌐 Välj kieli' }
    };

    const t = translations[currentLang] || translations['en'];

    // --- SÖKVÄG (för att hantera olika mappdjup) ---
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
    function getButtonText() {
        return isMobile() ? '☰ ' + t.home : '🌐 ' + t.home;
    }

    // --- READ-MENY (språkval, utan "Läs:") ---
    function getReadMenu() {
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
            <div class="read-menu">
                <select id="read-select" onchange="if(this.value) window.location.href='${base}lang/read.html?lang=' + this.value">
                    <option value="">${t.read}</option>
        `;
        languages.forEach(lang => {
            menu += `<option value="${lang.code}">${lang.name}</option>`;
        });
        menu += `</select></div>`;
        return menu;
    }

    // --- HEM-MENY (utan "More Languages") ---
    function getHomeMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <a href="${base}index.html" class="dropbtn" id="homeBtn">${btnText}</a>
                    <div class="dropdown-content">
                        <a href="${base}index.html">🏠 ${t.home}</a>
                        <!-- More Languages BORTTAGEN -->
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
        // READ – lägg till om den inte redan finns
        if (!navWrapper.querySelector('.read-menu')) {
            const readContainer = document.createElement('div');
            readContainer.innerHTML = getReadMenu();
            navWrapper.prepend(readContainer);
        }
    }

    // HEM – uppdatera befintlig
    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = getHomeMenu();
    }

    // --- Uppdatera HEM-knapp vid fönsterändring ---
    function updateButtonText() {
        const btn = document.getElementById('homeBtn');
        if (btn) {
            btn.textContent = getButtonText();
        }
    }
    window.addEventListener('resize', updateButtonText);

    // --- MOBIL: klick öppnar HEM-menyn ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('homeBtn');

    if (btn && dropdown) {
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
