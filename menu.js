// ============================================================
// MENU.JS – Modern meny med READ + HEM
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SPRÅK ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ÖVERSÄTTNINGAR FÖR MENYERNA ---
    const translations = {
        'en': { home: 'HOME', read: '-- READ: Choose language --' },
        'zh': { home: '首页', read: '-- 阅读: 选择语言 --' },
        'hi': { home: 'होम', read: '-- पढ़ें: भाषा चुनें --' },
        'es': { home: 'INICIO', read: '-- LEER: Elige idioma --' },
        'fr': { home: 'ACCUEIL', read: '-- LIRE: Choisissez la langue --' },
        'ar': { home: 'الرئيسية', read: '-- اقرأ: اختر اللغة --' },
        'bn': { home: 'হোম', read: '-- পড়ুন: ভাষা নির্বাচন করুন --' },
        'pt': { home: 'INÍCIO', read: '-- LER: Escolha o idioma --' },
        'ru': { home: 'ГЛАВНАЯ', read: '-- ЧИТАТЬ: Выберите язык --' },
        'ur': { home: 'ہوم', read: '-- پڑھیں: زبان منتخب کریں --' },
        'id': { home: 'BERANDA', read: '-- BACA: Pilih bahasa --' },
        'de': { home: 'STARTSEITE', read: '-- LESEN: Sprache wählen --' },
        'ja': { home: 'ホーム', read: '-- 読む: 言語を選択 --' },
        'sw': { home: 'NYUMBA', read: '-- SOMA: Chagua lugha --' },
        'tl': { home: 'HOME', read: '-- BASAHIN: Pumili ng wika --' },
        'tr': { home: 'ANA SAYFA', read: '-- OKU: Dil seçin --' },
        'vi': { home: 'TRANG CHỦ', read: '-- ĐỌC: Chọn ngôn ngữ --' },
        'ko': { home: '홈', read: '-- 읽기: 언어 선택 --' },
        'fa': { home: 'خانه', read: '-- خواندن: انتخاب زبان --' },
        'it': { home: 'HOME', read: '-- LEGGI: Scegli la lingua --' },
        'th': { home: 'หน้าแรก', read: '-- อ่าน: เลือกภาษา --' },
        'pl': { home: 'STRONA GŁÓWNA', read: '-- CZYTAJ: Wybierz język --' },
        'uk': { home: 'ГОЛОВНА', read: '-- ЧИТАТИ: Виберіть мову --' },
        'nl': { home: 'HOME', read: '-- LEES: Kies taal --' },
        'ro': { home: 'ACASĂ', read: '-- CITEȘTE: Alegeți limba --' },
        'el': { home: 'ΑΡΧΙΚΗ', read: '-- ΔΙΑΒΑΣΤΕ: Επιλέξτε γλώσσα --' },
        'hu': { home: 'FŐOLDAL', read: '-- OLVASS: Válasszon nyelvet --' },
        'cs': { home: 'DOMŮ', read: '-- ČTĚTE: Vyberte jazyk --' },
        'sv': { home: 'HEM', read: '-- LÄS: Välj språk --' },
        'bg': { home: 'НАЧАЛО', read: '-- ЧЕТЕТЕ: Изберете език --' },
        'no': { home: 'HJEM', read: '-- LES: Velg språk --' },
        'da': { home: 'HJEM', read: '-- LÆS: Vælg sprog --' },
        'fi': { home: 'ETUSIVU', read: '-- LUE: Valitse kieli --' },
        'he': { home: 'בית', read: '-- קרא: בחר שפה --' },
        'af': { home: 'TUIS', read: '-- LEES: Kies taal --' },
        'zu': { home: 'IKHAYA', read: '-- FUNDA: Khetha ulimi --' },
        'xh': { home: 'IKHAYA', read: '-- FUNDA: Khetha ulimi --' },
        'is': { home: 'HEIM', read: '-- LESA: Veldu tungumál --' },
        'fo': { home: 'HEIM', read: '-- LES: Vel mál --' },
        'crs': { home: 'LAKAZ', read: '-- LIR: Sazir langaz --' },
        'se': { home: 'RUOKTU', read: '-- LOHKKA: Vállje giella --' },
        'fit': { home: 'KOTI', read: '-- LUVE: Välj kieli --' }
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

    // --- HEM-knapptext ---
    function getButtonText() {
        return isMobile() ? '☰ ' + t.home : '🌐 ' + t.home;
    }

    // --- READ-MENY (utan separat etikett, med "Läs:" i rullgardinen) ---
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

    // --- HEM-MENY ---
    function getHomeMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
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
            </div>
        `;
    }

    // --- SÄTT IN MENYERNA ---
    const navWrapper = document.querySelector('.nav-wrapper');
    if (navWrapper) {
        if (!navWrapper.querySelector('.read-menu')) {
            const readContainer = document.createElement('div');
            readContainer.innerHTML = getReadMenu();
            navWrapper.prepend(readContainer);
        }
    }

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
