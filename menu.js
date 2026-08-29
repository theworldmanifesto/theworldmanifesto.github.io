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
                        <!-- ENGLISH, 简体中文, SVENSKA BORTTAGNA -->
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

    // Sätt in menyn
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
