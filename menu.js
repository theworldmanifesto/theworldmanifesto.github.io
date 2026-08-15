// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- SPRÅKÖVERSÄTTNINGAR FÖR MENY (för länktexterna) ---
    const menuTranslations = {
        'sv': { home: 'Hem', freedom: 'Frihetstrappan', tropics: 'Tropikerna', robotel: 'Robotel', share: 'Dela' },
        'en': { home: 'Home', freedom: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' },
        'es': { home: 'Inicio', freedom: 'Escalera de la Libertad', tropics: 'Los Trópicos', robotel: 'Robotel', share: 'Compartir' },
        'zh': { home: '首页', freedom: '自由阶梯', tropics: '热带地区', robotel: '机器人', share: '分享' },
        'fr': { home: 'Accueil', freedom: 'Escalier de la Liberté', tropics: 'Les Tropiques', robotel: 'Robotel', share: 'Partager' },
        'de': { home: 'Startseite', freedom: 'Freiheitstreppe', tropics: 'Die Tropen', robotel: 'Robotel', share: 'Teilen' },
        'it': { home: 'Home', freedom: 'Scala della Libertà', tropics: 'I Tropici', robotel: 'Robotel', share: 'Condividi' },
        'pt': { home: 'Início', freedom: 'Escada da Liberdade', tropics: 'Os Trópicos', robotel: 'Robotel', share: 'Compartilhar' },
        'ru': { home: 'Главная', freedom: 'Лестница Свободы', tropics: 'Тропики', robotel: 'Роботель', share: 'Поделиться' },
        'ja': { home: 'ホーム', freedom: '自由の階段', tropics: '熱帯地域', robotel: 'ロボテル', share: 'シェア' },
        'ko': { home: '홈', freedom: '자유의 계단', tropics: '열대 지역', robotel: '로보텔', share: '공유' },
        'ar': { home: 'الرئيسية', freedom: 'درج الحرية', tropics: 'المناطق الاستوائية', robotel: 'روبوتيل', share: 'مشاركة' },
        'hi': { home: 'होम', freedom: 'स्वतंत्रता की सीढ़ी', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', share: 'साझा करें' },
        'bn': { home: 'হোম', freedom: 'স্বাধীনতার সিঁড়ি', tropics: 'গ্রীষ্মমন্ডলীয়', robotel: 'রোবোটেল', share: 'শেয়ার করুন' },
        'id': { home: 'Beranda', freedom: 'Tangga Kebebasan', tropics: 'Daerah Tropis', robotel: 'Robot', share: 'Bagikan' },
        'tl': { home: 'Bahay', freedom: 'Hagdan ng Kalayaan', tropics: 'Tropiko', robotel: 'Robot', share: 'Ibahagi' },
        'vi': { home: 'Trang chủ', freedom: 'Cầu thang Tự do', tropics: 'Vùng Nhiệt đới', robotel: 'Người máy', share: 'Chia sẻ' },
        'th': { home: 'หน้าแรก', freedom: 'บันไดแห่งอิสรภาพ', tropics: 'เขตร้อน', robotel: 'หุ่นยนต์', share: 'แชร์' },
        'tr': { home: 'Ana Sayfa', freedom: 'Özgürlük Merdiveni', tropics: 'Tropikler', robotel: 'Robot', share: 'Paylaş' },
        'fa': { home: 'خانه', freedom: 'پله‌های آزادی', tropics: 'مناطق گرمسیری', robotel: 'ربات', share: 'اشتراک‌گذاری' },
        'he': { home: 'בית', freedom: 'גרם המדרגות של החופש', tropics: 'האזורים הטרופיים', robotel: 'רובוט', share: 'שתף' },
        'sw': { home: 'Nyumbani', freedom: 'Ngazi ya Uhuru', tropics: 'Nchi za Tropiki', robotel: 'Roboti', share: 'Shiriki' },
        'zu': { home: 'Ikhaya', freedom: 'Izitebhisi Zenkululeko', tropics: 'Izindawo Ezishisayo', robotel: 'Irobhothi', share: 'Yabelana' },
        'xh': { home: 'Ikhaya', freedom: 'Izitepsi Zenkululeko', tropics: 'Iindawo Ezishushu', robotel: 'Irobhothi', share: 'Yabelana' },
        'nl': { home: 'Home', freedom: 'Vrijheidstrap', tropics: 'De Tropen', robotel: 'Robot', share: 'Delen' },
        'pl': { home: 'Strona główna', freedom: 'Schody Wolności', tropics: 'Tropiki', robotel: 'Robot', share: 'Udostępnij' },
        'uk': { home: 'Головна', freedom: 'Сходи Свободи', tropics: 'Тропіки', robotel: 'Робот', share: 'Поділитися' },
        'ro': { home: 'Acasă', freedom: 'Scara Libertății', tropics: 'Tropice', robotel: 'Robot', share: 'Distribuie' },
        'el': { home: 'Αρχική', freedom: 'Σκάλα της Ελευθερίας', tropics: 'Τροπικές Περιοχές', robotel: 'Ρομπότ', share: 'Κοινοποίηση' },
        'cs': { home: 'Domů', freedom: 'Schodiště Svobody', tropics: 'Tropy', robotel: 'Robot', share: 'Sdílet' },
        'hu': { home: 'Főoldal', freedom: 'Szabadság Lépcső', tropics: 'Trópusok', robotel: 'Robot', share: 'Megosztás' },
        'sk': { home: 'Domov', freedom: 'Schodisko Slobody', tropics: 'Tropy', robotel: 'Robot', share: 'Zdieľať' },
        'bg': { home: 'Начало', freedom: 'Стълба на Свободата', tropics: 'Тропици', robotel: 'Робот', share: 'Сподели' },
        'hr': { home: 'Početna', freedom: 'Stube Slobode', tropics: 'Tropi', robotel: 'Robot', share: 'Podijeli' },
        'no': { home: 'Hjem', freedom: 'Frihetstrappen', tropics: 'Tropene', robotel: 'Robot', share: 'Del' },
        'da': { home: 'Hjem', freedom: 'Frihedstrappen', tropics: 'Troperne', robotel: 'Robot', share: 'Del' },
        'fi': { home: 'Koti', freedom: 'Vapauden Portaat', tropics: 'Trooppiset Alueet', robotel: 'Robotti', share: 'Jaa' },
        'is': { home: 'Heim', freedom: 'Frelsisstiginn', tropics: 'Hitabeltið', robotel: 'Vélmenni', share: 'Deila' },
        'fo': { home: 'Heim', freedom: 'Frelsisstigin', tropics: 'Hitabeltið', robotel: 'Robot', share: 'Deila' },
        'crs': { home: 'Lakaz', freedom: 'Leskalye Liberte', tropics: 'Tropik', robotel: 'Robo', share: 'Partaz' },
        'se': { home: 'Ruohta', freedom: 'Friddjavuođa Rámpa', tropics: 'Davvisámegiella', robotel: 'Robot', share: 'Juogat' },
        'fit': { home: 'Koti', freedom: 'Vapauten Portaat', tropics: 'Tropiikit', robotel: 'Robotti', share: 'Jaa' },
        'default': { home: 'Home', freedom: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' }
    };

    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && menuTranslations[langParam]) return langParam;
        const browserLang = navigator.language || navigator.languages?.[0] || 'en';
        const langCode = browserLang.split('-')[0].toLowerCase();
        if (menuTranslations[langCode]) return langCode;
        return 'en';
    }

    const currentLang = getCurrentLanguage();
    const t = menuTranslations[currentLang] || menuTranslations['default'];

    // --- SKAPA MENYN MED ABSOLUTA SÖKVÄGAR ---
    const menuHTML = `
        <div class="site-nav">
            <div class="nav-container">
                <div class="dropdown" id="homeDropdown">
                    <a href="/index.html" class="dropbtn" id="homeBtn">☰ MENU</a>
                    <div class="dropdown-content">
                        <a href="/lang/read.html?lang=en">🇬🇧 ${t.home}</a>
                        <a href="/lang/read.html?lang=zh">🇨🇳 中文</a>
                        <a href="/lang/read.html?lang=sv">🇸🇪 ${t.home}</a>
                        <a href="/lang/lang.html">🌐 More Languages</a>
                        <a href="/freedom-staircase/freedom-staircase.html">🪜 ${t.freedom}</a>
                        <a href="/tropics/tropics.html">🌎 ${t.tropics}</a>
                        <a href="/robotel/robotel.html">🤖 ${t.robotel}</a>
                        <a href="/share/share.html">💬 ${t.share}</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Hitta containern och sätt in menyn
    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    }

    // --- MOBIL: KLICK ÖPPNAR MENYN ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('homeBtn');
    let isOpen = false;

    if (btn && dropdown) {
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 600) {
                if (!isOpen) {
                    e.preventDefault();
                    dropdown.classList.add('active');
                    isOpen = true;
                }
                // Andra klicket – låt länken gå
            }
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                isOpen = false;
            }
        });
    }
});
