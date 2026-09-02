// ============================================================
// MENU.JS - Global meny för The World Manifesto (42 språk)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SPRÅK FRÅN WEBBlÄSAREN (navigator.language) ---
    const currentLang = (navigator.language || 'sv').split('-')[0].toLowerCase();

    // --- MAPPING FÖR FLAGGBILDER (från ../lang/flags/) ---
    const flagMapping = {
        'sv': 'se.svg', 'en': 'gb.svg', 'fi': 'fi.svg', 'zh': 'cn.svg',
        'hi': 'in.svg', 'es': 'es.svg', 'fr': 'fr.svg', 'de': 'de.svg',
        'ar': 'sa.svg', 'id': 'id.svg', 'bn': 'bd.svg', 'pt': 'pt.svg',
        'ru': 'ru.svg', 'uk': 'ua.svg', 'bg': 'bg.svg', 'ur': 'pk.svg',
        'ja': 'jp.svg', 'fil': 'ph.svg', 'ko': 'kr.svg', 'th': 'th.svg',
        'vi': 'vn.svg', 'tr': 'tr.svg', 'fa': 'ir.svg', 'sw': 'tz.svg',
        'it': 'it.svg', 'pl': 'pl.svg', 'nl': 'nl.svg', 'ro': 'ro.svg',
        'el': 'gr.svg', 'af': 'za.svg', 'zu': 'za.svg', 'xh': 'za.svg',
        'cs': 'cz.svg', 'hu': 'hu.svg', 'he': 'il.svg', 'crs': 'sc.svg',
        'no': 'no.svg', 'se': 'dsg.svg', 'fit': 'fit.svg', 'da': 'dk.svg',
        'is': 'is.svg', 'fo': 'fo.svg'
    };

    // --- ORDBOK FÖR ALLA 42 SPRÅK ---
    const translations = {
        'sv': { menu: 'MENY', home: 'HEM', manifesto: 'Läs Världsmanifestet', staircase: 'Frihetstrappan', tropics: 'Tropikerna', robotel: 'Robotel', share: 'Dela', read: 'LÄS', chooseLang: 'Välj språk' },
        'en': { menu: 'MENU', home: 'HOME', manifesto: 'Read The World Manifesto', staircase: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share', read: 'READ', chooseLang: 'Choose language' },
        'fi': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lue Maailmanmanifesti', staircase: 'Vapauden portaat', tropics: 'Trooppiset alueet', robotel: 'Robotel', share: 'Jaa', read: 'LUE', chooseLang: 'Valitse kieli' },
        'zh': { menu: '菜单', home: '首页', manifesto: '阅读世界宣言', staircase: '自由阶梯', tropics: '热带地区', robotel: '机器人', share: '分享', read: '阅读', chooseLang: '选择语言' },
        'hi': { menu: 'मेनू', home: 'होम', manifesto: 'विश्व घोषणापत्र पढ़ें', staircase: 'स्वतंत्रता सीढ़ी', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', share: 'साझा करें', read: 'पढ़ें', chooseLang: 'भाषा चुनें' },
        'es': { menu: 'MENÚ', home: 'INICIO', manifesto: 'Leer El Manifiesto Mundial', staircase: 'Escalera de la Libertad', tropics: 'Los Trópicos', robotel: 'Robotel', share: 'Compartir', read: 'LEER', chooseLang: 'Elige un idioma' },
        'fr': { menu: 'MENU', home: 'ACCUEIL', manifesto: 'Lire Le Manifeste Mondial', staircase: 'Escalier de la Liberté', tropics: 'Les Tropiques', robotel: 'Robotel', share: 'Partager', read: 'LIRE', chooseLang: 'Choisir la langue' },
        'de': { menu: 'MENÜ', home: 'STARTSEITE', manifesto: 'Das Weltmanifest lesen', staircase: 'Freiheitstreppe', tropics: 'Die Tropen', robotel: 'Robotel', share: 'Teilen', read: 'LESEN', chooseLang: 'Sprache wählen' },
        'ar': { menu: 'القائمة', home: 'الرئيسية', manifesto: 'اقرأ البيان العالمي', staircase: 'سلم الحرية', tropics: 'المناطق الاستوائية', robotel: 'روbotel', share: 'مشاركة', read: 'قراءة', chooseLang: 'اختر اللغة' },
        'id': { menu: 'MENU', home: 'BERANDA', manifesto: 'Baca Manifest Dunia', staircase: 'Tangga Kebebasan', tropics: 'Daerah Tropis', robotel: 'Robotel', share: 'Bagikan', read: 'BACA', chooseLang: 'Pilih bahasa' },
        'bn': { menu: 'মেনু', home: 'হোম', manifesto: 'বিশ্ব ইশতেহার পড়ুন', staircase: 'স্বাধীনতার সিঁড়ি', tropics: 'ক্রান্তীয় অঞ্চল', robotel: 'রোবোটেল', share: 'শেয়ার করুন', read: 'পড়ুন', chooseLang: 'ভাষা নির্বাচন করুন' },
        'pt': { menu: 'MENU', home: 'INÍCIO', manifesto: 'Ler O Manifesto Mundial', staircase: 'Escada da Liberdade', tropics: 'Os Trópicos', robotel: 'Robotel', share: 'Compartilhar', read: 'LER', chooseLang: 'Escolher idioma' },
        'ru': { menu: 'МЕНЮ', home: 'ГЛАВНАЯ', manifesto: 'Читать Всемирный манифест', staircase: 'Лестница Свободы', tropics: 'Тропики', robotel: 'Роботель', share: 'Поделиться', read: 'ЧИТАТЬ', chooseLang: 'Выберите язык' },
        'uk': { menu: 'МЕНЮ', home: 'ГОЛОВНА', manifesto: 'Читати Всесвітній маніфест', staircase: 'Сходи Свободи', tropics: 'Тропіки', robotel: 'Роботель', share: 'Поділитися', read: 'ЧИТАТИ', chooseLang: 'Виберіть мову' },
        'bg': { menu: 'МЕНЮ', home: 'НАЧАЛО', manifesto: 'Прочетете Световния манифест', staircase: 'Стълбата на свободата', tropics: 'Тропиците', robotel: 'Роботель', share: 'Сподели', read: 'ЧЕТЕТЕ', chooseLang: 'Изберете език' },
        'ur': { menu: 'مینو', home: 'ہوم', manifesto: 'عالمی منشور پڑھیں', staircase: 'آزادی کی سیڑھی', tropics: 'اشنکٹبندیی', robotel: 'روبوٹیل', share: 'شیئر کریں', read: 'پڑھیں', chooseLang: 'زبان منتخب کریں' },
        'ja': { menu: 'メニュー', home: 'ホーム', manifesto: '世界宣言を読む', staircase: '自由の階段', tropics: '熱帯地域', robotel: 'ロボテル', share: '共有', read: '読む', chooseLang: '言語を選択' },
        'fil': { menu: 'MENU', home: 'HOME', manifesto: 'Basahin ang Manipesto ng Mundo', staircase: 'Hagdan ng Kalayaan', tropics: 'Ang Tropiko', robotel: 'Robotel', share: 'Ibahagi', read: 'BASAHIN', chooseLang: 'Pumili ng wika' },
        'ko': { menu: '메뉴', home: '홈', manifesto: '세계 선언문 읽기', staircase: '자유의 계단', tropics: '열대 지방', robotel: '로보텔', share: '공유', read: '읽기', chooseLang: '언어 선택' },
        'th': { menu: 'เมนู', home: 'หน้าแรก', manifesto: 'อ่านแถลงการณ์โลก', staircase: 'บันไดเสรีภาพ', tropics: 'เขตร้อน', robotel: 'โรโบเทล', share: 'แชร์', read: 'อ่าน', chooseLang: 'เลือกภาษา' },
        'vi': { menu: 'MENU', home: 'TRANG CHỦ', manifesto: 'Đọc Tuyên ngôn Thế giới', staircase: 'Cầu thang Tự do', tropics: 'Vùng nhiệt đới', robotel: 'Robotel', share: 'Chia sẻ', read: 'ĐỌC', chooseLang: 'Chọn ngôn ngữ' },
        'tr': { menu: 'MENÜ', home: 'ANA SAYFA', manifesto: 'Dünya Manifestosu\'nu Oku', staircase: 'Özgürlük Merdiveni', tropics: 'Tropikler', robotel: 'Robotel', share: 'Paylaş', read: 'OKU', chooseLang: 'Dil seçin' },
        'fa': { menu: 'منو', home: 'خانه', manifesto: 'مانیفست جهانی را بخوانید', staircase: 'پلکان آزادی', tropics: 'مناطق استوایی', robotel: 'روbotel', share: 'اشتراک‌گذاری', read: 'خواندن', chooseLang: 'انتخاب زبان' },
        'sw': { menu: 'MENU', home: 'NYUMBANI', manifesto: 'Soma Ilani ya Dunia', staircase: 'Ngazi ya Uhuru', tropics: 'Maeneo ya Tropiki', robotel: 'Robotel', share: 'Shiriki', read: 'SOMA', chooseLang: 'Chagua lugha' },
        'it': { menu: 'MENU', home: 'HOME', manifesto: 'Leggi il Manifesto Mondiale', staircase: 'Scala della Libertà', tropics: 'I Tropici', robotel: 'Robotel', share: 'Condividi', read: 'LEGGI', chooseLang: 'Scegli la lingua' },
        'pl': { menu: 'MENU', home: 'STRONA GŁÓWNA', manifesto: 'Przeczytaj Manifest Światowy', staircase: 'Schody Wolności', tropics: 'Tropiki', robotel: 'Robotel', share: 'Udostępnij', read: 'CZYTAJ', chooseLang: 'Wybierz język' },
        'nl': { menu: 'MENU', home: 'HOME', manifesto: 'Lees het Wereldmanifest', staircase: 'Vrijheidstrap', tropics: 'De Tropen', robotel: 'Robotel', share: 'Delen', read: 'LEES', chooseLang: 'Kies taal' },
        'ro': { menu: 'MENU', home: 'ACASĂ', manifesto: 'Citiți Manifestul Mondial', staircase: 'Scara Libertății', tropics: 'Tropicele', robotel: 'Robotel', share: 'Distribuie', read: 'CITEȘTE', chooseLang: 'Alegeți limba' },
        'el': { menu: 'ΜΕΝΟΥ', home: 'ΑΡΧΙΚΗ', manifesto: 'Διαβάστε το Παγκόσμιο Μανιφέστο', staircase: 'Σκάλα της Ελευθερίας', tropics: 'Οι Τροπικοί', robotel: 'Ρομποτέλ', share: 'Μοιραστείτε', read: 'ΔΙΑΒΑΣΤΕ', chooseLang: 'Επιλέξτε γλώσσα' },
        'af': { menu: 'MENU', home: 'TUIS', manifesto: 'Lees die Wêreldmanifest', staircase: 'Vryheidstrap', tropics: 'Die Trope', robotel: 'Robotel', share: 'Deel', read: 'LEES', chooseLang: 'Kies taal' },
        'zu': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yomhlaba', staircase: 'Izitebhisi Zenkululeko', tropics: 'Izindawo Ezishisayo', robotel: 'Robotel', share: 'Yabelana', read: 'FUNDA', chooseLang: 'Khetha ulimi' },
        'xh': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yehlabathi', staircase: 'Izinyuko Zenkululeko', tropics: 'Iindawo Ezishushu', robotel: 'Robotel', share: 'Yabelana', read: 'FUNDA', chooseLang: 'Khetha ulwimi' },
        'cs': { menu: 'MENU', home: 'DOMŮ', manifesto: 'Přečtěte si Světový manifest', staircase: 'Schody svobody', tropics: 'Tropy', robotel: 'Robotel', share: 'Sdílet', read: 'ČTĚTE', chooseLang: 'Vyberte jazyk' },
        'hu': { menu: 'MENÜ', home: 'KEZDŐLAP', manifesto: 'Olvassa el a Világkiáltványt', staircase: 'A Szabadság Lépcsői', tropics: 'A Trópusok', robotel: 'Robotel', share: 'Megosztás', read: 'OLVASSA', chooseLang: 'Válasszon nyelvet' },
        'he': { menu: 'תפריט', home: 'בית', manifesto: 'קראו את מניפסט העולם', staircase: 'מדרגות החירות', tropics: 'האזורים הטרופיים', robotel: 'רובוטל', share: 'שתף', read: 'קראו', chooseLang: 'בחר שפה' },
        'crs': { menu: 'MENU', home: 'LAK', manifesto: 'Lir Manifest lemonn', staircase: 'Leskal Libète', tropics: 'Latropik', robotel: 'Robotel', share: 'Partaz', read: 'LIR', chooseLang: 'Swar lanng' },
        'no': { menu: 'MENY', home: 'HJEM', manifesto: 'Les Verdensmanifestet', staircase: 'Frihetstrappen', tropics: 'Tropene', robotel: 'Robotel', share: 'Del', read: 'LES', chooseLang: 'Velg språk' },
        'se': { menu: 'MENY', home: 'RUVŦOT', manifesto: 'Loga Máilmmi Manifesta', staircase: 'Frihetstrappa', tropics: 'Tropiija', robotel: 'Robotel', share: 'Juoge', read: 'LOGA', chooseLang: 'Vállje giella' },
        'fit': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lukea Mailmanmanifesti', staircase: 'Vapauden portaat', tropics: 'Trooppiset', robotel: 'Robotel', share: 'Jaa', read: 'LUKEA', chooseLang: 'Valitse kieli' },
        'da': { menu: 'MENU', home: 'HJEM', manifesto: 'Læs Verdensmanifestet', staircase: 'Frihedstrappen', tropics: 'Troperne', robotel: 'Robotel', share: 'Del', read: 'LÆS', chooseLang: 'Vælg sprog' },
        'is': { menu: 'VALMYND', home: 'HEIM', manifesto: 'Lesa Heimsmanifestið', staircase: 'Frelsisstiginn', tropics: 'Hitabeltið', robotel: 'Robotel', share: 'Deila', read: 'LESA', chooseLang: 'Veldu tungumál' },
        'fo': { menu: 'MENY', home: 'HEIM', manifesto: 'Les Heimsskráina', staircase: 'Frælsistrappan', tropics: 'Tropiskir', robotel: 'Robotel', share: 'Deil', read: 'LES', chooseLang: 'Vel mál' }
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

    // Hämta flaggfilen (denna rad måste ligga EFTER base är definierad!)
    const flagFile = flagMapping[currentLang] || 'gb.svg';
    const flagSrc = `${base}lang/flags/${flagFile}`;

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
                        <a href="${base}lang/lang.html?lang=${currentLang}"><img src="${flagSrc}" alt="Flag" style="width:20px;height:15px;vertical-align:middle;margin-right:8px;border-radius:2px;"> ${t.manifesto}</a>
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

    // --- UPPDATERA SPRÅKMENYN (LÄS och Välj språk) ---
    const readLabel = document.querySelector('.read-menu label');
    const readSelect = document.querySelector('.read-menu select option');
    
    if (readLabel) {
        readLabel.textContent = t.read + ':';
    }
    if (readSelect) {
        readSelect.textContent = t.chooseLang;
    }

    // --- KLICK-HANTERING FÖR HUVUDMENYN ---
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
