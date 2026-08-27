// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK från <html lang="..."> ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ORDBOK FÖR ALLA SPRÅK (menytexter) ---
    const translations = {
        // Större språk
        'en': { home: 'MENU', read: 'READ:', choose: 'Choose language' },
        'zh': { home: '菜单', read: '阅读:', choose: '选择语言' },
        'hi': { home: 'मेनू', read: 'पढ़ें:', choose: 'भाषा चुनें' },
        'es': { home: 'MENÚ', read: 'LEER:', choose: 'Elige idioma' },
        'fr': { home: 'MENU', read: 'LIRE:', choose: 'Choisissez la langue' },
        'ar': { home: 'القائمة', read: 'اقرأ:', choose: 'اختر اللغة' },
        'bn': { home: 'মেনু', read: 'পড়ুন:', choose: 'ভাষা নির্বাচন করুন' },
        'pt': { home: 'MENU', read: 'LER:', choose: 'Escolha o idioma' },
        'ru': { home: 'МЕНЮ', read: 'ЧИТАТЬ:', choose: 'Выберите язык' },
        'ur': { home: 'مینو', read: 'پڑھیں:', choose: 'زبان منتخب کریں' },
        'id': { home: 'MENU', read: 'BACA:', choose: 'Pilih bahasa' },
        'de': { home: 'MENÜ', read: 'LESEN:', choose: 'Sprache wählen' },
        'ja': { home: 'メニュー', read: '読む:', choose: '言語を選択' },
        'sw': { home: 'MENU', read: 'SOMA:', choose: 'Chagua lugha' },
        'tl': { home: 'MENU', read: 'BASAHIN:', choose: 'Pumili ng wika' },
        'tr': { home: 'MENÜ', read: 'OKU:', choose: 'Dil seçin' },
        'vi': { home: 'MENU', read: 'ĐỌC:', choose: 'Chọn ngôn ngữ' },
        'ko': { home: '메뉴', read: '읽기:', choose: '언어 선택' },
        'fa': { home: 'منو', read: 'خواندن:', choose: 'انتخاب زبان' },
        'it': { home: 'MENU', read: 'LEGGI:', choose: 'Scegli la lingua' },
        'th': { home: 'เมนู', read: 'อ่าน:', choose: 'เลือกภาษา' },
        'pl': { home: 'MENU', read: 'CZYTAJ:', choose: 'Wybierz język' },
        'uk': { home: 'МЕНЮ', read: 'ЧИТАТИ:', choose: 'Виберіть мову' },
        'nl': { home: 'MENU', read: 'LEES:', choose: 'Kies taal' },
        'ro': { home: 'MENIU', read: 'CITEȘTE:', choose: 'Alegeți limba' },
        'el': { home: 'ΜΕΝΟΥ', read: 'ΔΙΑΒΑΣΤΕ:', choose: 'Επιλέξτε γλώσσα' },
        'hu': { home: 'MENÜ', read: 'OLVASS:', choose: 'Válasszon nyelvet' },
        'cs': { home: 'MENU', read: 'ČTĚTE:', choose: 'Vyberte jazyk' },
        'sv': { home: 'MENY', read: 'LÄS:', choose: 'Välj språk' },
        'bg': { home: 'МЕНЮ', read: 'ЧЕТЕТЕ:', choose: 'Изберете език' },
        'no': { home: 'MENY', read: 'LES:', choose: 'Velg språk' },
        'da': { home: 'MENU', read: 'LÆS:', choose: 'Vælg sprog' },
        'fi': { home: 'VALIKKO', read: 'LUE:', choose: 'Valitse kieli' },
        'he': { home: 'תפריט', read: 'קרא:', choose: 'בחר שפה' },
        'af': { home: 'MENU', read: 'LEES:', choose: 'Kies taal' },

        // Mindre/regionala språk
        'zu': { home: 'IMENU', read: 'FUNDA:', choose: 'Khetha ulimi' },
        'xh': { home: 'IMENU', read: 'FUNDA:', choose: 'Khetha ulimi' },
        'is': { home: 'VALMYND', read: 'LESA:', choose: 'Veldu tungumál' },
        'fo': { home: 'MENU', read: 'LES:', choose: 'Vel mál' },
        'crs': { home: 'MENI', read: 'LIR:', choose: 'Sazir langaz' },
        'se': { home: 'MENU', read: 'LOHKKA:', choose: 'Vállje giella' },
        'fit': { home: 'VALIKKO', read: 'LUVE:', choose: 'Välj kieli' }
    };

    // Välj rätt språk eller fallback till engelska
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
        return isMobile() ? '☰' : '📋 ' + t.home;
    }

    // --- READ-MENY (språkval) ---
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
                <label for="read-select">${t.read}</label>
                <select id="read-select" onchange="if(this.value) window.location.href='${base}lang/read.html?lang=' + this.value">
                    <option value="">${t.choose}</option>
        `;
        languages.forEach(lang => {
            menu += `<option value="${lang.code}">${lang.name}</option>`;
        });
        menu += `</select></div>`;
        return menu;
    }

    // --- SKAPA MENY-MENYN ---
    function buildMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <a href="${base}index.html" class="dropbtn" id="homeBtn">${btnText}</a>
                    <div class="dropdown-content">
                        <a href="${base}index.html">🏠 ${t.home}</a>
                        <a href="${base}lang/lang.html">🌐 More Languages</a>
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

    // MENY – uppdatera befintlig
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

    // Lyssna på fönsterändringar
    window.addEventListener('resize', updateButtonText);

    // --- MOBIL: KLICK VÄXLAR MENYN ---
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
