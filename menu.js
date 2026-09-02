// ============================================================
// MENU.JS - Global meny för The World Manifesto (42 språk)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SPRÅK FRÅN WEBBlÄSAREN (navigator.language) ---
    const currentLang = (navigator.language || 'sv').split('-')[0].toLowerCase();

    // --- ORDBOK FÖR ALLA 42 SPRÅK ---
    const translations = {
        'sv': { menu: 'MENY', home: 'HEM', manifesto: 'Världsmanifestet', staircase: 'Frihetstrappan', tropics: 'Tropikerna', robotel: 'Robotel', share: 'Dela' },
        'en': { menu: 'MENU', home: 'HOME', manifesto: 'The World Manifesto', staircase: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' },
        'fi': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Maailmanmanifesti', staircase: 'Vapauden portaat', tropics: 'Trooppiset alueet', robotel: 'Robotel', share: 'Jaa' },
        'zh': { menu: '菜单', home: '首页', manifesto: '世界宣言', staircase: '自由阶梯', tropics: '热带地区', robotel: '机器人', share: '分享' },
        'hi': { menu: 'मेनू', home: 'होम', manifesto: 'विश्व घोषणापत्र', staircase: 'स्वतंत्रता सीढ़ी', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', share: 'साझा करें' },
        'es': { menu: 'MENÚ', home: 'INICIO', manifesto: 'El Manifiesto Mundial', staircase: 'Escalera de la Libertad', tropics: 'Los Trópicos', robotel: 'Robotel', share: 'Compartir' },
        'fr': { menu: 'MENU', home: 'ACCUEIL', manifesto: 'Le Manifeste Mondial', staircase: 'Escalier de la Liberté', tropics: 'Les Tropiques', robotel: 'Robotel', share: 'Partager' },
        'de': { menu: 'MENÜ', home: 'STARTSEITE', manifesto: 'Weltmanifest', staircase: 'Freiheitstreppe', tropics: 'Die Tropen', robotel: 'Robotel', share: 'Teilen' },
        'ar': { menu: 'القائمة', home: 'الرئيسية', manifesto: 'البيان العالمي', staircase: 'سلم الحرية', tropics: 'المناطق الاستوائية', robotel: 'روbotel', share: 'مشاركة' },
        'id': { menu: 'MENU', home: 'BERANDA', manifesto: 'Manifest Dunia', staircase: 'Tangga Kebebasan', tropics: 'Daerah Tropis', robotel: 'Robotel', share: 'Bagikan' },
        'bn': { menu: 'মেনু', home: 'হোম', manifesto: 'বিশ্ব ইশতেহার', staircase: 'স্বাধীনতার সিঁড়ি', tropics: 'ক্রান্তীয় অঞ্চল', robotel: 'রোবোটেল', share: 'শেয়ার করুন' },
        'pt': { menu: 'MENU', home: 'INÍCIO', manifesto: 'O Manifesto Mundial', staircase: 'Escada da Liberdade', tropics: 'Os Trópicos', robotel: 'Robotel', share: 'Compartilhar' },
        'ru': { menu: 'МЕНЮ', home: 'ГЛАВНАЯ', manifesto: 'Всемирный манифест', staircase: 'Лестница Свободы', tropics: 'Тропики', robotel: 'Роботель', share: 'Поделиться' },
        'uk': { menu: 'МЕНЮ', home: 'ГОЛОВНА', manifesto: 'Всесвітній маніфест', staircase: 'Сходи Свободи', tropics: 'Тропіки', robotel: 'Роботель', share: 'Поділитися' },
        'bg': { menu: 'МЕНЮ', home: 'НАЧАЛО', manifesto: 'Световен манифест', staircase: 'Стълбата на свободата', tropics: 'Тропиците', robotel: 'Роботель', share: 'Сподели' },
        'ur': { menu: 'مینو', home: 'ہوم', manifesto: 'عالمی منشور', staircase: 'آزادی کی سیڑھی', tropics: 'اشنکٹبندیی', robotel: 'روبوٹیل', share: 'شیئر کریں' },
        'ja': { menu: 'メニュー', home: 'ホーム', manifesto: '世界宣言', staircase: '自由の階段', tropics: '熱帯地域', robotel: 'ロボテル', share: '共有' },
        'fil': { menu: 'MENU', home: 'HOME', manifesto: 'Manipesto ng Mundo', staircase: 'Hagdan ng Kalayaan', tropics: 'Ang Tropiko', robotel: 'Robotel', share: 'Ibahagi' },
        'ko': { menu: '메뉴', home: '홈', manifesto: '세계 선언문', staircase: '자유의 계단', tropics: '열대 지방', robotel: '로보텔', share: '공유' },
        'th': { menu: 'เมนู', home: 'หน้าแรก', manifesto: 'แถลงการณ์โลก', staircase: 'บันไดเสรีภาพ', tropics: 'เขตร้อน', robotel: 'โรโบเทล', share: 'แชร์' },
        'vi': { menu: 'MENU', home: 'TRANG CHỦ', manifesto: 'Tuyên ngôn Thế giới', staircase: 'Cầu thang Tự do', tropics: 'Vùng nhiệt đới', robotel: 'Robotel', share: 'Chia sẻ' },
        'tr': { menu: 'MENÜ', home: 'ANA SAYFA', manifesto: 'Dünya Manifestosu', staircase: 'Özgürlük Merdiveni', tropics: 'Tropikler', robotel: 'Robotel', share: 'Paylaş' },
        'fa': { menu: 'منو', home: 'خانه', manifesto: 'مانیفست جهانی', staircase: 'پلکان آزادی', tropics: 'مناطق استوایی', robotel: 'روbotel', share: 'اشتراک‌گذاری' },
        'sw': { menu: 'MENU', home: 'NYUMBANI', manifesto: 'Ilani ya Dunia', staircase: 'Ngazi ya Uhuru', tropics: 'Maeneo ya Tropiki', robotel: 'Robotel', share: 'Shiriki' },
        'it': { menu: 'MENU', home: 'HOME', manifesto: 'Manifesto Mondiale', staircase: 'Scala della Libertà', tropics: 'I Tropici', robotel: 'Robotel', share: 'Condividi' },
        'pl': { menu: 'MENU', home: 'STRONA GŁÓWNA', manifesto: 'Manifest Światowy', staircase: 'Schody Wolności', tropics: 'Tropiki', robotel: 'Robotel', share: 'Udostępnij' },
        'nl': { menu: 'MENU', home: 'HOME', manifesto: 'Wereldmanifest', staircase: 'Vrijheidstrap', tropics: 'De Tropen', robotel: 'Robotel', share: 'Delen' },
        'ro': { menu: 'MENU', home: 'ACASĂ', manifesto: 'Manifestul Mondial', staircase: 'Scara Libertății', tropics: 'Tropicele', robotel: 'Robotel', share: 'Distribuie' },
        'el': { menu: 'ΜΕΝΟΥ', home: 'ΑΡΧΙΚΗ', manifesto: 'Παγκόσμιο Μανιφέστο', staircase: 'Σκάλα της Ελευθερίας', tropics: 'Οι Τροπικοί', robotel: 'Ρομποτέλ', share: 'Μοιραστείτε' },
        'af': { menu: 'MENU', home: 'TUIS', manifesto: 'Wêreldmanifest', staircase: 'Vryheidstrap', tropics: 'Die Trope', robotel: 'Robotel', share: 'Deel' },
        'zu': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'IManifesto Yomhlaba', staircase: 'Izitebhisi Zenkululeko', tropics: 'Izindawo Ezishisayo', robotel: 'Robotel', share: 'Yabelana' },
        'xh': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'IManifesto Yehlabathi', staircase: 'Izinyuko Zenkululeko', tropics: 'Iindawo Ezishushu', robotel: 'Robotel', share: 'Yabelana' },
        'cs': { menu: 'MENU', home: 'DOMŮ', manifesto: 'Světový manifest', staircase: 'Schody svobody', tropics: 'Tropy', robotel: 'Robotel', share: 'Sdílet' },
        'hu': { menu: 'MENÜ', home: 'KEZDŐLAP', manifesto: 'Világkiáltvány', staircase: 'A Szabadság Lépcsői', tropics: 'A Trópusok', robotel: 'Robotel', share: 'Megosztás' },
        'he': { menu: 'תפריט', home: 'בית', manifesto: 'מניפסט העולם', staircase: 'מדרגות החירות', tropics: 'האזורים הטרופיים', robotel: 'רובוטל', share: 'שתף' },
        'crs': { menu: 'MENU', home: 'LAK', manifesto: 'Manifest lemonn', staircase: 'Leskal Libète', tropics: 'Latropik', robotel: 'Robotel', share: 'Partaz' },
        'no': { menu: 'MENY', home: 'HJEM', manifesto: 'Verdensmanifestet', staircase: 'Frihetstrappen', tropics: 'Tropene', robotel: 'Robotel', share: 'Del' },
        'se': { menu: 'MENY', home: 'RUVŦOT', manifesto: 'Máilmmi Manifesta', staircase: 'Frihetstrappa', tropics: 'Tropiija', robotel: 'Robotel', share: 'Juoge' },
        'fit': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Mailmanmanifesti', staircase: 'Vapauden portaat', tropics: 'Trooppiset', robotel: 'Robotel', share: 'Jaa' },
        'da': { menu: 'MENU', home: 'HJEM', manifesto: 'Verdensmanifestet', staircase: 'Frihedstrappen', tropics: 'Troperne', robotel: 'Robotel', share: 'Del' },
        'is': { menu: 'VALMYND', home: 'HEIM', manifesto: 'Heimsmanifestið', staircase: 'Frelsisstiginn', tropics: 'Hitabeltið', robotel: 'Robotel', share: 'Deila' },
        'fo': { menu: 'MENY', home: 'HEIM', manifesto: 'Heimsskráin', staircase: 'Frælsistrappan', tropics: 'Tropiskir', robotel: 'Robotel', share: 'Deil' }
    };

    // Välj rätt språk (fallback till engelska)
    const t = translations[currentLang] || translations['en'];

    // --- RÄKNA UT BAS-SÖKVÄG ---
    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }
    const base = getBasePath();

    // --- SKAPA MENYN ---
    function buildMenu() {
        const menuIcon = `<img src="${base}menu_icons/menu.png" alt="Menu" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;">`;
        const btnText = menuIcon + t.menu;

        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <button class="dropbtn" id="menuBtn">${btnText}</button>
                    <div class="dropdown-content">
                        <a href="${base}index.html"><img src="${base}menu_icons/home.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.home}</a>
                        <a href="${base}lang/lang.html?lang=${currentLang}"><img src="${base}menu_icons/languages.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.manifesto}</a>
                        <a href="${base}freedom-staircase/freedom-staircase.html?lang=${currentLang}"><img src="${base}menu_icons/freedom.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.staircase}</a>
                        <a href="${base}tropics/tropics.html?lang=${currentLang}"><img src="${base}menu_icons/tropics.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.tropics}</a>
                        <a href="${base}robotel/robotel.html?lang=${currentLang}"><img src="${base}menu_icons/robotel.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.robotel}</a>
                        <a href="${base}share/share.html?lang=${currentLang}"><img src="${base}menu_icons/share.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.share}</a>
                    </div>
                </div>
            </div>
        `;
    }

    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) { menuContainer.innerHTML = buildMenu(); }

    // --- KLICK-HANTERING ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('menuBtn');
    if (btn && dropdown) {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        const newDropdown = dropdown.cloneNode(true);
        dropdown.parentNode.replaceChild(newDropdown, dropdown);
        const freshBtn = document.getElementById('menuBtn');
        const freshDropdown = document.getElementById('homeDropdown');
        if (freshBtn && freshDropdown) {
            freshBtn.addEventListener('click', function(e) {
                e.preventDefault(); e.stopPropagation();
                freshDropdown.classList.toggle('active');
            });
            document.addEventListener('click', function(e) {
                if (!freshDropdown.contains(e.target)) freshDropdown.classList.remove('active');
            });
        }
    }
});
