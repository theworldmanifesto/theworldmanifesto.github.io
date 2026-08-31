// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK från <html lang="..."> ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ORDBOK FÖR ALLA SPRÅK (menytexter) ---
    const translations = {
        // Större språk
        'en': { home: 'HOME', read: 'READ', choose: '-- Choose language --' },
        'zh': { home: '首页', read: '阅读', choose: '-- 选择语言 --' },
        'hi': { home: 'होम', read: 'पढ़ें', choose: '-- भाषा चुनें --' },
        'es': { home: 'INICIO', read: 'LEER', choose: '-- Elige idioma --' },
        'fr': { home: 'ACCUEIL', read: 'LIRE', choose: '-- Choisissez la langue --' },
        'ar': { home: 'الرئيسية', read: 'اقرأ', choose: '-- اختر اللغة --' },
        'bn': { home: 'হোম', read: 'পড়ুন', choose: '-- ভাষা নির্বাচন করুন --' },
        'pt': { home: 'INÍCIO', read: 'LER', choose: '-- Escolha o idioma --' },
        'ru': { home: 'ГЛАВНАЯ', read: 'ЧИТАТЬ', choose: '-- Выберите язык --' },
        'ur': { home: 'ہوم', read: 'پڑھیں', choose: '-- زبان منتخب کریں --' },
        'id': { home: 'BERANDA', read: 'BACA', choose: '-- Pilih bahasa --' },
        'de': { home: 'STARTSEITE', read: 'LESEN', choose: '-- Sprache wählen --' },
        'ja': { home: 'ホーム', read: '読む', choose: '-- 言語を選択 --' },
        'sw': { home: 'NYUMBA', read: 'SOMA', choose: '-- Chagua lugha --' },
        'tl': { home: 'HOME', read: 'BASAHIN', choose: '-- Pumili ng wika --' },
        'tr': { home: 'ANA SAYFA', read: 'OKU', choose: '-- Dil seçin --' },
        'vi': { home: 'TRANG CHỦ', read: 'ĐỌC', choose: '-- Chọn ngôn ngữ --' },
        'ko': { home: '홈', read: '읽기', choose: '-- 언어 선택 --' },
        'fa': { home: 'خانه', read: 'خواندن', choose: '-- انتخاب زبان --' },
        'it': { home: 'HOME', read: 'LEGGI', choose: '-- Scegli la lingua --' },
        'th': { home: 'หน้าแรก', read: 'อ่าน', choose: '-- เลือกภาษา --' },
        'pl': { home: 'STRONA GŁÓWNA', read: 'CZYTAJ', choose: '-- Wybierz język --' },
        'uk': { home: 'ГОЛОВНА', read: 'ЧИТАТИ', choose: '-- Виберіть мову --' },
        'nl': { home: 'HOME', read: 'LEES', choose: '-- Kies taal --' },
        'ro': { home: 'ACASĂ', read: 'CITEȘTE', choose: '-- Alegeți limba --' },
        'el': { home: 'ΑΡΧΙΚΗ', read: 'ΔΙΑΒΑΣΤΕ', choose: '-- Επιλέξτε γλώσσα --' },
        'hu': { home: 'FŐOLDAL', read: 'OLVASS', choose: '-- Válasszon nyelvet --' },
        'cs': { home: 'DOMŮ', read: 'ČTĚTE', choose: '-- Vyberte jazyk --' },
        'sv': { home: 'HEM', read: 'LÄS', choose: '-- Välj språk --' },
        'bg': { home: 'НАЧАЛО', read: 'ЧЕТЕТЕ', choose: '-- Изберете език --' },
        'no': { home: 'HJEM', read: 'LES', choose: '-- Velg språk --' },
        'da': { home: 'HJEM', read: 'LÆS', choose: '-- Vælg sprog --' },
        'fi': { home: 'ETUSIVU', read: 'LUE', choose: '-- Valitse kieli --' },
        'he': { home: 'בית', read: 'קרא', choose: '-- בחר שפה --' },
        'af': { home: 'TUIS', read: 'LEES', choose: '-- Kies taal --' },

        // Mindre/regionala språk
        'zu': { home: 'IKHAYA', read: 'FUNDA', choose: '-- Khetha ulimi --' },
        'xh': { home: 'IKHAYA', read: 'FUNDA', choose: '-- Khetha ulimi --' },
        'is': { home: 'HEIM', read: 'LESA', choose: '-- Veldu tungumál --' },
        'fo': { home: 'HEIM', read: 'LES', choose: '-- Vel mál --' },
        'crs': { home: 'LAKAZ', read: 'LIR', choose: '-- Sazir langaz --' },
        'se': { home: 'RUOKTU', read: 'LOHKKA', choose: '-- Vállje giella --' },
        'fit': { home: 'KOTI', read: 'LUVE', choose: '-- Välj kieli --' }
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

    // --- SKAPA MENYN MED BILDER ISTÄLLET FÖR UNICODE ---
    function buildMenu() {
        // MENY-knappen: bild + text (istället för 📋)
        const menuIcon = `<img src="${base}menu_icons/menu.png" alt="Menu" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;">`;
        const btnText = isMobile() ? menuIcon + t.home : menuIcon + t.home;

        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <button class="dropbtn" id="menuBtn">${btnText}</button>
                    <div class="dropdown-content">
                        <a href="${base}index.html">
                            <img src="${base}menu_icons/home.png" alt="Home" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> ${t.home}
                        </a>
                        <a href="${base}lang/lang.html">
                            <img src="${base}menu_icons/languages.svg" alt="Languages" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> More Languages
                        </a>
                        <a href="${base}freedom-staircase/freedom-staircase.html">
                            <img src="${base}menu_icons/freedom.png" alt="Freedom" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> Freedom Staircase
                        </a>
                        <a href="${base}tropics/tropics.html">
                            <img src="${base}menu_icons/tropics.png" alt="Tropics" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> The Tropics
                        </a>
                        <a href="${base}robotel/robotel.html">
                            <img src="${base}menu_icons/robotel.png" alt="Robotel" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> Robotel
                        </a>
                        <a href="${base}share/share.html">
                            <img src="${base}menu_icons/share.svg" alt="Share" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> Share
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Sätt in menyn
    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = buildMenu();
    }

    // --- Uppdatera knapptext vid fönsterändring ---
    function updateButtonText() {
        const btn = document.getElementById('menuBtn');
        if (btn) {
            const menuIcon = `<img src="${base}menu_icons/menu.png" alt="Menu" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;">`;
            btn.innerHTML = menuIcon + t.home;
        }
    }

    // Lyssna på fönsterändringar
    window.addEventListener('resize', updateButtonText);

    // --- MOBIL: KLICK VÄXLAR MENYN ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('menuBtn');

    if (btn && dropdown) {
        // Klona för att undvika dubbla eventlisteners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        const newDropdown = dropdown.cloneNode(true);
        dropdown.parentNode.replaceChild(newDropdown, dropdown);

        const freshBtn = document.getElementById('menuBtn');
        const freshDropdown = document.getElementById('homeDropdown');

        if (freshBtn && freshDropdown) {
            freshBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                freshDropdown.classList.toggle('active');
            });

            document.addEventListener('click', function(e) {
                if (!freshDropdown.contains(e.target)) {
                    freshDropdown.classList.remove('active');
                }
            });
        }
    }
});
