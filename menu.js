import { AVAILABLE, RELATED_FALLBACK, pickBestLanguage } from './lang/js/lang.js';

// ============================================================
// MENU.JS - Global meny för The World Manifesto (45 språk)
// UPPDATERAD: "About" / "Om" heter nu "Why?" / "Varför?"
// NY: "Om..." som öppnar en inforuta med författarinformation
// CSS i menu.css
// Stängs med: klick på ×, klick på rutan, klick utanför, Escape
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // Tropics undantag - om vi är på tropics.html ska menyn vara längst vänster
    if (window.location.pathname.toLowerCase().includes('tropics')) {
        document.body.classList.add('tropics-left');
    }

    // --- HÄMTA SPRÅK FRÅN WEBBLÄSAREN MED FALLBACK ---
    const urlParams = new URLSearchParams(window.location.search);
    const urlLangParam = urlParams.get('lang');
    const currentLang = urlLangParam
        ? pickBestLanguage(AVAILABLE, [urlLangParam])
        : pickBestLanguage();

    // --- MAPPING FÖR FLAGGBILDER (från ../lang/flags/) ---
    const flagMapping = {
        'sv': 'se.svg', 'en': 'gb.svg', 'fi': 'fi.svg', 'zh': 'cn.svg',
        'yue': 'hk.svg', 'jv': 'id.svg', 'pa': 'pk.svg',
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

    // --- ORDBOK FÖR ALLA 45 SPRÅK ---
    const translations = {
        'sv': { menu: 'MENY', home: 'HEM', manifesto: 'Läs Världsmanifestet', staircase: 'Frihetstrappan (english)', tropics: 'Tropikerna', robotel: 'Robotel', qr: 'QR', share: 'Dela', about: 'Varför?', aboutAuthor: 'Om...', aboutAuthorText: 'Författaren, Sven Yngerstedt, är född 1968 och kommer från Sverige.' },
        'en': { menu: 'MENU', home: 'HOME', manifesto: 'Read The World Manifesto', staircase: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', qr: 'QR', share: 'Share', why: 'Why?', whyAuthor: 'About...', aboutAuthorText: 'The author, Sven Yngerstedt, was born in 1968 and comes from Sweden.' },
        'fi': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lue Maailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset alueet', robotel: 'Robotel', qr: 'QR', share: 'Jaa', why: 'Miksi?', whyAuthor: 'Tietoja...', aboutAuthorText: 'Tekijä, Sven Yngerstedt, on syntynyt vuonna 1968 ja tulee Ruotsista.' },
        'zh': { menu: '菜单', home: '首页', manifesto: '阅读世界宣言', staircase: '自由阶梯 (english)', tropics: '热带地区', robotel: '机器人', qr: 'QR', share: '分享', why: '为什么？', whyAuthor: '关于...', aboutAuthorText: '作者 Sven Yngerstedt 生于1968年，来自瑞典。' },
        'yue': { menu: '選單', home: '主頁', manifesto: '閱讀世界宣言', staircase: '自由樓梯 (english)', tropics: '熱帶地區', robotel: 'Robotel', qr: 'QR', share: '分享', why: '點解？', whyAuthor: '關於...', aboutAuthorText: '作者 Sven Yngerstedt 喺1968年出世，嚟自瑞典。' },
        'jv': { menu: 'MENU', home: 'NGAREP', manifesto: 'Waca Manifesto Jagad', staircase: 'Tangga Kamardikan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', why: 'Kenaapa?', whyAuthor: 'Babagan...', aboutAuthorText: 'Penulis, Sven Yngerstedt, lair taun 1968 lan asalé saka Swedia.' },
        'pa': { menu: 'ਮੀਨੂ', home: 'ਘਰ', manifesto: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਪੜ੍ਹੋ', staircase: 'ਆਜ਼ਾਦੀ ਦੀ ਪੌੜੀ (english)', tropics: 'ਗਰਮ ਖੰਡੀ ਖੇਤਰ', robotel: 'ਰੋਬੋਟਲ', qr: 'QR', share: 'ਸਾਂਝਾ ਕਰੋ', why: 'ਕਿਉਂ?', whyAuthor: 'ਬਾਰੇ...', aboutAuthorText: 'ਲੇਖਕ, ਸਵੈਨ ਯਿੰਗਰਸਟੈਡਟ, 1968 ਵਿੱਚ ਪੈਦਾ ਹੋਇਆ ਅਤੇ ਸਵੀਡਨ ਤੋਂ ਹੈ।' },
        'hi': { menu: 'मेनू', home: 'होम', manifesto: 'विश्व घोषणापत्र पढ़ें', staircase: 'स्वतंत्रता सीढ़ी (english)', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', qr: 'QR', share: 'साझा करें', why: 'क्यों?', whyAuthor: 'परिचय...', aboutAuthorText: 'लेखक, स्वेन यिंगरस्टेड्ट, 1968 में पैदा हुए और स्वीडन से हैं।' },
        'es': { menu: 'MENÚ', home: 'INICIO', manifesto: 'Leer El Manifiesto Mundial', staircase: 'Escalera de la Libertad (english)', tropics: 'Los Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartir', why: '¿Por qué?', whyAuthor: 'Acerca de...', aboutAuthorText: 'El autor, Sven Yngerstedt, nació en 1968 y viene de Suecia.' },
        'fr': { menu: 'MENU', home: 'ACCUEIL', manifesto: 'Lire Le Manifeste Mondial', staircase: 'Escalier de la Liberté (english)', tropics: 'Les Tropiques', robotel: 'Robotel', qr: 'QR', share: 'Partager', why: 'Pourquoi ?', whyAuthor: 'À propos...', aboutAuthorText: 'L\'auteur, Sven Yngerstedt, est né en 1968 et vient de Suède.' },
        'de': { menu: 'MENÜ', home: 'STARTSEITE', manifesto: 'Das Weltmanifest lesen', staircase: 'Freiheitstreppe (english)', tropics: 'Die Tropen', robotel: 'Robotel', qr: 'QR', share: 'Teilen', why: 'Warum?', whyAuthor: 'Über...', aboutAuthorText: 'Der Autor, Sven Yngerstedt, wurde 1968 geboren und kommt aus Schweden.' },
        'ar': { menu: 'القائمة', home: 'الرئيسية', manifesto: 'اقرأ البيان العالمي', staircase: 'سلم الحرية (english)', tropics: 'المناطق الاستوائية', robotel: 'روbotel', qr: 'QR', share: 'مشاركة', why: 'لماذا؟', whyAuthor: 'حول...', aboutAuthorText: 'المؤلف، سفين ينغيرستيدت، ولد عام 1968 وهو من السويد.' },
        'id': { menu: 'MENU', home: 'BERANDA', manifesto: 'Baca Manifest Dunia', staircase: 'Tangga Kebebasan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', why: 'Mengapa?', whyAuthor: 'Tentang...', aboutAuthorText: 'Penulis, Sven Yngerstedt, lahir pada tahun 1968 dan berasal dari Swedia.' },
        'bn': { menu: 'মেনু', home: 'হোম', manifesto: 'বিশ্ব ইশতেহার পড়ুন', staircase: 'স্বাধীনতার সিঁড়ি (english)', tropics: 'ক্রান্তীয় অঞ্চল', robotel: 'রোবোটেল', qr: 'QR', share: 'শেয়ার করুন', why: 'কেন?', whyAuthor: 'সম্পর্কে...', aboutAuthorText: 'লেখক, স্ভেন ইংরস্টেডট, ১৯৬৮ সালে জন্মগ্রহণ করেন এবং সুইডেন থেকে এসেছেন।' },
        'pt': { menu: 'MENU', home: 'INÍCIO', manifesto: 'Ler O Manifesto Mundial', staircase: 'Escada da Liberdade (english)', tropics: 'Os Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartilhar', why: 'Porquê?', whyAuthor: 'Sobre...', aboutAuthorText: 'O autor, Sven Yngerstedt, nasceu em 1968 e vem da Suécia.' },
        'ru': { menu: 'МЕНЮ', home: 'ГЛАВНАЯ', manifesto: 'Читать Всемирный манифест', staircase: 'Лестница Свободы (english)', tropics: 'Тропики', robotel: 'Роботель', qr: 'QR', share: 'Поделиться', why: 'Почему?', whyAuthor: 'О нас...', aboutAuthorText: 'Автор, Свен Ингерстедт, родился в 1968 году и родом из Швеции.' },
        'uk': { menu: 'МЕНЮ', home: 'ГОЛОВНА', manifesto: 'Читати Всесвітній маніфест', staircase: 'Сходи Свободи (english)', tropics: 'Тропіки', robotel: 'Роботель', qr: 'QR', share: 'Поділитися', why: 'Чому?', whyAuthor: 'Про нас...', aboutAuthorText: 'Автор, Свен Інгерстедт, народився у 1968 році і походить зі Швеції.' },
        'bg': { menu: 'МЕНЮ', home: 'НАЧАЛО', manifesto: 'Прочетете Световния манифест', staircase: 'Стълбата на свободата (english)', tropics: 'Тропиците', robotel: 'Роботель', qr: 'QR', share: 'Сподели', why: 'Защо?', whyAuthor: 'Относно...', aboutAuthorText: 'Авторът, Свен Ингерстедт, е роден през 1968 г. и идва от Швеция.' },
        'ur': { menu: 'مینو', home: 'ہوم', manifesto: 'عالمی منشور پڑھیں', staircase: 'آزادی کی سیڑھی (english)', tropics: 'اشنکٹبندیی', robotel: 'روبوٹیل', qr: 'QR', share: 'شیئر کریں', why: 'کیوں؟', whyAuthor: 'کے بارے میں...', aboutAuthorText: 'مصنف، سوین ینگیرسٹڈٹ، 1968 میں پیدا ہوئے اور سویڈن سے ہیں۔' },
        'ja': { menu: 'メニュー', home: 'ホーム', manifesto: '世界宣言を読む', staircase: '自由の階段 (english)', tropics: '熱帯地域', robotel: 'ロボテル', qr: 'QR', share: '共有', why: 'なぜ？', whyAuthor: '概要...', aboutAuthorText: '著者、スヴェン・インゲルステットは1968年生まれで、スウェーデン出身です。' },
        'fil': { menu: 'MENU', home: 'HOME', manifesto: 'Basahin ang Manipesto ng Mundo', staircase: 'Hagdan ng Kalayaan (english)', tropics: 'Ang Tropiko', robotel: 'Robotel', qr: 'QR', share: 'Ibahagi', why: 'Bakit?', whyAuthor: 'Tungkol...', aboutAuthorText: 'Ang may-akda, Sven Yngerstedt, ay ipinanganak noong 1968 at nagmula sa Sweden.' },
        'ko': { menu: '메뉴', home: '홈', manifesto: '세계 선언문 읽기', staircase: '자유의 계단 (english)', tropics: '열대 지방', robotel: '로보텔', qr: 'QR', share: '공유', why: '왜?', whyAuthor: '소개...', aboutAuthorText: '저자 스벤 잉에르스테트는 1968년에 태어났으며 스웨덴 출신입니다.' },
        'th': { menu: 'เมนู', home: 'หน้าแรก', manifesto: 'อ่านแถลงการณ์โลก', staircase: 'บันไดเสรีภาพ (english)', tropics: 'เขตร้อน', robotel: 'โรโบเทล', qr: 'QR', share: 'แชร์', why: 'ทำไม?', whyAuthor: 'เกี่ยวกับ...', aboutAuthorText: 'ผู้เขียน Sven Yngerstedt เกิดในปี 1968 และมาจากสวีเดน' },
        'vi': { menu: 'MENU', home: 'TRANG CHỦ', manifesto: 'Đọc Tuyên ngôn Thế giới', staircase: 'Cầu thang Tự do (english)', tropics: 'Vùng nhiệt đới', robotel: 'Robotel', qr: 'QR', share: 'Chia sẻ', why: 'Tại sao?', whyAuthor: 'Giới thiệu...', aboutAuthorText: 'Tác giả, Sven Yngerstedt, sinh năm 1968 và đến từ Thụy Điển.' },
        'tr': { menu: 'MENÜ', home: 'ANA SAYFA', manifesto: 'Dünya Manifestosu\'nu Oku', staircase: 'Özgürlük Merdiveni (english)', tropics: 'Tropikler', robotel: 'Robotel', qr: 'QR', share: 'Paylaş', why: 'Neden?', whyAuthor: 'Hakkında...', aboutAuthorText: 'Yazar Sven Yngerstedt, 1968\'de doğdu ve İsveç\'ten geliyor.' },
        'fa': { menu: 'منو', home: 'خانه', manifesto: 'مانیفست جهانی را بخوانید', staircase: 'پلکان آزادی (english)', tropics: 'مناطق استوایی', robotel: 'روbotel', qr: 'QR', share: 'اشتراک‌گذاری', why: 'چرا؟', whyAuthor: 'درباره...', aboutAuthorText: 'نویسنده، اسون ینگرستد، در سال 1968 متولد شد و از سوئد است.' },
        'sw': { menu: 'MENU', home: 'NYUMBANI', manifesto: 'Soma Ilani ya Dunia', staircase: 'Ngazi ya Uhuru (english)', tropics: 'Maeneo ya Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Shiriki', why: 'Kwa nini?', whyAuthor: 'Kuhusu...', aboutAuthorText: 'Mwandishi, Sven Yngerstedt, alizaliwa mwaka 1968 na anatoka Uswidi.' },
        'it': { menu: 'MENU', home: 'HOME', manifesto: 'Leggi il Manifesto Mondiale', staircase: 'Scala della Libertà (english)', tropics: 'I Tropici', robotel: 'Robotel', qr: 'QR', share: 'Condividi', why: 'Perché?', whyAuthor: 'Informazioni...', aboutAuthorText: 'L\'autore, Sven Yngerstedt, è nato nel 1968 e viene dalla Svezia.' },
        'pl': { menu: 'MENU', home: 'STRONA GŁÓWNA', manifesto: 'Przeczytaj Manifest Światowy', staircase: 'Schody Wolności (english)', tropics: 'Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Udostępnij', why: 'Dlaczego?', whyAuthor: 'O nas...', aboutAuthorText: 'Autor, Sven Yngerstedt, urodził się w 1968 roku i pochodzi ze Szwecji.' },
        'nl': { menu: 'MENU', home: 'HOME', manifesto: 'Lees het Wereldmanifest', staircase: 'Vrijheidstrap (english)', tropics: 'De Tropen', robotel: 'Robotel', qr: 'QR', share: 'Delen', why: 'Waarom?', whyAuthor: 'Over...', aboutAuthorText: 'De auteur, Sven Yngerstedt, is geboren in 1968 en komt uit Zweden.' },
        'ro': { menu: 'MENU', home: 'ACASĂ', manifesto: 'Citiți Manifestul Mondial', staircase: 'Scara Libertății (english)', tropics: 'Tropicele', robotel: 'Robotel', qr: 'QR', share: 'Distribuie', why: 'De ce?', whyAuthor: 'Despre...', aboutAuthorText: 'Autorul, Sven Yngerstedt, s-a născut în 1968 și vine din Suedia.' },
        'el': { menu: 'ΜΕΝΟΥ', home: 'ΑΡΙΚΗ', manifesto: 'Διαβάστε το Παγκόσμιο Μανιφέστο', staircase: 'Σκάλα της Ελευθερίας (english)', tropics: 'Οι Τροπικοί', robotel: 'Ρομποτέλ', qr: 'QR', share: 'Μοιραστείτε', why: 'Γιατί;', whyAuthor: 'Σχετικά...', aboutAuthorText: 'Ο συγγραφέας, Sven Yngerstedt, γεννήθηκε το 1968 και κατάγεται από τη Σουηδία.' },
        'af': { menu: 'MENU', home: 'TUIS', manifesto: 'Lees die Wêreldmanifest', staircase: 'Vryheidstrap (english)', tropics: 'Die Trope', robotel: 'Robotel', qr: 'QR', share: 'Deel', why: 'Waarom?', whyAuthor: 'Oor...', aboutAuthorText: 'Die skrywer, Sven Yngerstedt, is in 1968 gebore en kom uit Swede.' },
        'zu': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yomhlaba', staircase: 'Izitebhisi Zenkululeko (english)', tropics: 'Izindawo Ezishisayo', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', why: 'Kungani?', whyAuthor: 'Mayelana...', aboutAuthorText: 'Umbhali, uSven Yngerstedt, wazalwa ngo-1968 futhi uvela eSweden.' },
        'xh': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yehlabathi', staircase: 'Izinyuko Zenkululeko (english)', tropics: 'Iindawo Ezishushu', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', why: 'Kutheni?', whyAuthor: 'Malunga...', aboutAuthorText: 'Umbhali, uSven Yngerstedt, wazalwa ngo-1968 kwaye uvela eSweden.' },
        'cs': { menu: 'MENU', home: 'DOMŮ', manifesto: 'Přečtěte si Světový manifest', staircase: 'Schody svobody (english)', tropics: 'Tropy', robotel: 'Robotel', qr: 'QR', share: 'Sdílet', why: 'Proč?', whyAuthor: 'O nás...', aboutAuthorText: 'Autor, Sven Yngerstedt, se narodil v roce 1968 a pochází ze Švédska.' },
        'hu': { menu: 'MENÜ', home: 'KEZDŐLAP', manifesto: 'Olvassa el a Világkiáltványt', staircase: 'A Szabadság Lépcsői (english)', tropics: 'A Trópusok', robotel: 'Robotel', qr: 'QR', share: 'Megosztás', why: 'Miért?', whyAuthor: 'Névjegy...', aboutAuthorText: 'A szerző, Sven Yngerstedt, 1968-ban született és Svédországból származik.' },
        'he': { menu: 'תפריט', home: 'בית', manifesto: 'קראו את מניפסט העולם', staircase: 'מדרגות החירות (english)', tropics: 'האזורים הטרופיים', robotel: 'רובוטל', qr: 'QR', share: 'שתף', why: 'למה?', whyAuthor: 'אודות...', aboutAuthorText: 'המחבר, סוון ינגרסטדט, נולד ב-1968 ומגיע משוודיה.' },
        'crs': { menu: 'MENU', home: 'LAK', manifesto: 'Lir Manifest lemonn', staircase: 'Leskal Libète (english)', tropics: 'Latropik', robotel: 'Robotel', qr: 'QR', share: 'Partaz', why: 'Akoz?', whyAuthor: 'Konsernan...', aboutAuthorText: 'Loten, Sven Yngerstedt, ti ne an 1968 e i sorti Sesel.' },
        'no': { menu: 'MENY', home: 'HJEM', manifesto: 'Les Verdensmanifestet', staircase: 'Frihetstrappen (english)', tropics: 'Tropene', robotel: 'Robotel', qr: 'QR', share: 'Del', why: 'Hvorfor?', whyAuthor: 'Om...', aboutAuthorText: 'Forfatteren, Sven Yngerstedt, er født i 1968 og kommer fra Sverige.' },
        'se': { menu: 'MENY', home: 'RUVŦOT', manifesto: 'Loga Máilmmi Manifesta', staircase: 'Frihetstrappa (english)', tropics: 'Tropiija', robotel: 'Robotel', qr: 'QR', share: 'Juoge', why: 'Manne?', whyAuthor: 'Birra...', aboutAuthorText: 'Čálli, Sven Yngerstedt, lea riegádan 1968:s ja boahtá Ruoŧas.' },
        'fit': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lukea Mailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset', robotel: 'Robotel', qr: 'QR', share: 'Jaa', why: 'Miksi?', whyAuthor: 'Tietoja...', aboutAuthorText: 'Kirjailija, Sven Yngerstedt, on syntyny vuonna 1968 ja tullee Ruotsista.' },
        'da': { menu: 'MENU', home: 'HJEM', manifesto: 'Læs Verdensmanifestet', staircase: 'Frihedstrappen (english)', tropics: 'Troperne', robotel: 'Robotel', qr: 'QR', share: 'Del', why: 'Hvorfor?', whyAuthor: 'Om...', aboutAuthorText: 'Forfatteren, Sven Yngerstedt, er født i 1968 og kommer fra Sverige.' },
        'is': { menu: 'VALMYND', home: 'HEIM', manifesto: 'Lesa Heimsmanifestið', staircase: 'Frelsisstiginn (english)', tropics: 'Hitabeltið', robotel: 'Robotel', qr: 'QR', share: 'Deila', why: 'Af hverju?', whyAuthor: 'Um...', aboutAuthorText: 'Höfundurinn, Sven Yngerstedt, er fæddur árið 1968 og kemur frá Svíþjóð.' },
        'fo': { menu: 'MENY', home: 'HEIM', manifesto: 'Les Heimsskráina', staircase: 'Frælsistrappan (english)', tropics: 'Tropiskir', robotel: 'Robotel', qr: 'QR', share: 'Deil', why: 'Hví?', whyAuthor: 'Um...', aboutAuthorText: 'Rithøvundurin, Sven Yngerstedt, er føddur í 1968 og kemur úr Svøríki.' }
    };

    const t = translations[currentLang] || translations['en'];

    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }
    const base = getBasePath();

    const flagFile = flagMapping[currentLang] || 'gb.svg';
    const flagSrc = `${base}lang/flags/${flagFile}`;

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
                        <a href="${base}freedom-staircase/freedom-staircase.html?lang=en"><img src="${base}menu_icons/freedom.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.staircase}</a>
                        <a href="${base}tropics/tropics.html?lang=${currentLang}"><img src="${base}menu_icons/tropics.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.tropics}</a>
                        <a href="${base}share/share.html?lang=${currentLang}"><img src="${base}menu_icons/share.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.share}</a>
                        <a href="${base}qr/qr.html?lang=${currentLang}"><img src="${base}menu_icons/qr.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.qr}</a>
                        <a href="${base}robotel/robotel.html?lang=${currentLang}"><img src="${base}menu_icons/robotel.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.robotel}</a>
                        <a href="${base}why.html?lang=${currentLang}"><img src="${base}menu_icons/banner.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.why}</a>
                        <a href="#" id="aboutAuthorLink">${t.aboutAuthor}</a>
                    </div>
                </div>
            </div>
        `;
    }

    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = buildMenu();
    }

    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('menuBtn');
    if (btn && dropdown) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    }

    document.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // === INFORUTA FÖR "OM..." ===
    function createAboutModal() {
        const modal = document.createElement('div');
        modal.id = 'aboutAuthorModal';

        // Stäng-knapp (×)
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.setAttribute('aria-label', 'Close');
        closeBtn.textContent = '×';

        const title = document.createElement('h3');
        title.textContent = t.aboutAuthor;

        const text = document.createElement('p');
        text.textContent = t.aboutAuthorText;

        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(text);
        document.body.appendChild(modal);

        // Stäng när man klickar på ×
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            modal.classList.remove('visible');
        });

        return modal;
    }

    const aboutModal = createAboutModal();

    // Öppna rutan när man klickar på "Om..."
    document.addEventListener('click', function(e) {
        const link = e.target.closest('#aboutAuthorLink');
        if (link) {
            e.preventDefault();
            e.stopPropagation();
            aboutModal.classList.add('visible');
        }
    });

    // Stäng rutan när man klickar UTANFÖR den
    document.addEventListener('click', function(e) {
        if (aboutModal && aboutModal.classList.contains('visible')) {
            if (!aboutModal.contains(e.target)) {
                aboutModal.classList.remove('visible');
            }
        }
    });

    // Stäng rutan när man trycker på Escape-tangenten
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && aboutModal && aboutModal.classList.contains('visible')) {
            aboutModal.classList.remove('visible');
        }
    });
});
