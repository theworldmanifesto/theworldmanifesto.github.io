/* ======================================== */
/* MENY – READ + MENY                       */
/* ======================================== */

.nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    max-width: 800px;
    margin: 0 auto;
    padding: 12px 20px;
    background: transparent;
    position: sticky;
    top: 0;
    z-index: 500;
    flex-wrap: wrap;
}

/* ======================================== */
/* READ-MENY – SPRÅKVALS-RULLGARDIN          */
/* ======================================== */

.read-menu {
    display: inline-block;
    font-family: sans-serif;
    font-size: 14px;
    flex-shrink: 0;
}

.read-menu label {
    margin-right: 4px;
    font-weight: bold;
    color: #1a1a1a;
}

.read-menu select {
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    font-size: 13px;
    cursor: pointer;
    transition: border-color 0.2s;
    font-family: sans-serif;
}

.read-menu select:hover {
    border-color: #888;
}

.read-menu select:focus {
    outline: none;
    border-color: #555;
}

/* ======================================== */
/* MENY-MENY – FLYTANDE                       */
/* ======================================== */

#main-menu {
    display: inline-block;
    flex-shrink: 0;
}

.site-nav {
    position: relative;
    display: inline-block;
}

/* MENY-knapp – button, inte länk */
.dropbtn {
    color: #1a1a1a;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: inline-block;
    transition: background 0.2s, box-shadow 0.2s;
    cursor: pointer;
    font-family: system-ui, sans-serif;
}

.dropbtn:hover {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* ======================================== */
/* MENY-RULLGARDIN                            */
/* ======================================== */

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 8px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    min-width: 200px;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(200, 200, 200, 0.2);
    z-index: 999;
    overflow: hidden;
}

.dropdown-content a {
    color: #1a1a1a;
    padding: 10px 16px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    font-family: system-ui, sans-serif;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.15s;
}

.dropdown-content a:last-child {
    border-bottom: none;
}

.dropdown-content a:hover {
    background: #f7f7f7;
}

/* ======================================== */
/* DESKTOP – HOVER                          */
/* ======================================== */

@media (min-width: 601px) {
    .dropdown:hover .dropdown-content {
        display: block;
    }
}

/* ======================================== */
/* MOBIL – KLICK                            */
/* ======================================== */

@media (max-width: 600px) {
    .nav-wrapper {
        padding: 8px 12px;
        gap: 10px;
    }

    .dropbtn {
        font-size: 14px;
        padding: 6px 12px;
    }

    .dropdown-content {
        left: 0;
        width: 80vw;
        max-width: 280px;
    }

    .dropdown.active .dropdown-content {
        display: block;
    }

    .read-menu select {
        font-size: 12px;
        padding: 4px 8px;
    }

    .read-menu label {
        font-size: 12px;
    }
}// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK från <html lang="..."> ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ORDBOK FÖR ALLA SPRÅK (menytexter) ---
    const translations = {
        // Större språk
        'en': { home: 'Home', menu: 'MENU', read: 'READ:', choose: 'Choose language' },
        'zh': { home: '首页', menu: '菜单', read: '阅读:', choose: '选择语言' },
        'hi': { home: 'होम', menu: 'मेनू', read: 'पढ़ें:', choose: 'भाषा चुनें' },
        'es': { home: 'Inicio', menu: 'MENÚ', read: 'LEER:', choose: 'Elige idioma' },
        'fr': { home: 'Accueil', menu: 'MENU', read: 'LIRE:', choose: 'Choisissez la langue' },
        'ar': { home: 'الرئيسية', menu: 'القائمة', read: 'اقرأ:', choose: 'اختر اللغة' },
        'bn': { home: 'হোম', menu: 'মেনু', read: 'পড়ুন:', choose: 'ভাষা নির্বাচন করুন' },
        'pt': { home: 'Início', menu: 'MENU', read: 'LER:', choose: 'Escolha o idioma' },
        'ru': { home: 'Главная', menu: 'МЕНЮ', read: 'ЧИТАТЬ:', choose: 'Выберите язык' },
        'ur': { home: 'ہوم', menu: 'مینو', read: 'پڑھیں:', choose: 'زبان منتخب کریں' },
        'id': { home: 'Beranda', menu: 'MENU', read: 'BACA:', choose: 'Pilih bahasa' },
        'de': { home: 'Startseite', menu: 'MENÜ', read: 'LESEN:', choose: 'Sprache wählen' },
        'ja': { home: 'ホーム', menu: 'メニュー', read: '読む:', choose: '言語を選択' },
        'sw': { home: 'Nyumbani', menu: 'MENU', read: 'SOMA:', choose: 'Chagua lugha' },
        'tl': { home: 'Home', menu: 'MENU', read: 'BASAHIN:', choose: 'Pumili ng wika' },
        'tr': { home: 'Ana Sayfa', menu: 'MENÜ', read: 'OKU:', choose: 'Dil seçin' },
        'vi': { home: 'Trang chủ', menu: 'MENU', read: 'ĐỌC:', choose: 'Chọn ngôn ngữ' },
        'ko': { home: '홈', menu: '메뉴', read: '읽기:', choose: '언어 선택' },
        'fa': { home: 'خانه', menu: 'منو', read: 'خواندن:', choose: 'انتخاب زبان' },
        'it': { home: 'Home', menu: 'MENU', read: 'LEGGI:', choose: 'Scegli la lingua' },
        'th': { home: 'หน้าแรก', menu: 'เมนู', read: 'อ่าน:', choose: 'เลือกภาษา' },
        'pl': { home: 'Strona główna', menu: 'MENU', read: 'CZYTAJ:', choose: 'Wybierz język' },
        'uk': { home: 'Головна', menu: 'МЕНЮ', read: 'ЧИТАТИ:', choose: 'Виберіть мову' },
        'nl': { home: 'Home', menu: 'MENU', read: 'LEES:', choose: 'Kies taal' },
        'ro': { home: 'Acasă', menu: 'MENIU', read: 'CITEȘTE:', choose: 'Alegeți limba' },
        'el': { home: 'Αρχική', menu: 'ΜΕΝΟΥ', read: 'ΔΙΑΒΑΣΤΕ:', choose: 'Επιλέξτε γλώσσα' },
        'hu': { home: 'Főoldal', menu: 'MENÜ', read: 'OLVASS:', choose: 'Válasszon nyelvet' },
        'cs': { home: 'Domů', menu: 'MENU', read: 'ČTĚTE:', choose: 'Vyberte jazyk' },
        'sv': { home: 'Hem', menu: 'MENY', read: 'LÄS:', choose: 'Välj språk' },
        'bg': { home: 'Начало', menu: 'МЕНЮ', read: 'ЧЕТЕТЕ:', choose: 'Изберете език' },
        'no': { home: 'Hjem', menu: 'MENY', read: 'LES:', choose: 'Velg språk' },
        'da': { home: 'Hjem', menu: 'MENU', read: 'LÆS:', choose: 'Vælg sprog' },
        'fi': { home: 'Etusivu', menu: 'VALIKKO', read: 'LUE:', choose: 'Valitse kieli' },
        'he': { home: 'בית', menu: 'תפריט', read: 'קרא:', choose: 'בחר שפה' },
        'af': { home: 'Tuis', menu: 'MENU', read: 'LEES:', choose: 'Kies taal' },

        // Mindre/regionala språk
        'zu': { home: 'Ikhaya', menu: 'IMENU', read: 'FUNDA:', choose: 'Khetha ulimi' },
        'xh': { home: 'Ikhaya', menu: 'IMENU', read: 'FUNDA:', choose: 'Khetha ulimi' },
        'is': { home: 'Heim', menu: 'VALMYND', read: 'LESA:', choose: 'Veldu tungumál' },
        'fo': { home: 'Heim', menu: 'MENU', read: 'LES:', choose: 'Vel mál' },
        'crs': { home: 'Lakaz', menu: 'MENI', read: 'LIR:', choose: 'Sazir langaz' },
        'se': { home: 'Ruoktu', menu: 'MENU', read: 'LOHKKA:', choose: 'Vállje giella' },
        'fit': { home: 'Koti', menu: 'VALIKKO', read: 'LUVE:', choose: 'Välj kieli' }
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
        return isMobile() ? '☰' : '📋 ' + t.menu;
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

    // --- SKAPA MENY-MENYN (knappen är inte en länk) ---
    function buildMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <button class="dropbtn" id="homeBtn">${btnText}</button>
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
            // Klick på knappen – öppna/stäng menyn
            freshBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (isMobile()) {
                    freshDropdown.classList.toggle('active');
                }
            });

            // Klick utanför – stäng menyn
            document.addEventListener('click', function(e) {
                if (!freshDropdown.contains(e.target)) {
                    freshDropdown.classList.remove('active');
                }
            });
        }
    }
});
