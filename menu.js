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
        'sv': { menu: 'MENY', home: 'HEM', manifesto: 'Läs Världsmanifestet', staircase: 'Frihetstrappan (english)', tropics: 'Tropikerna', robotel: 'Robotel', qr: 'QR', share: 'Dela', about: 'Varför?', aboutAuthor: 'Om...', aboutAuthorText: 'Författaren Sven Yngerstedt är hemmahörande i Sverige och tillbringade tre decennier i Sveriges arktiska område. Han är född i Stockholm 1968.', linkNotice: 'Det är tillåtet att länka till denna sajt.' },
        'en': { menu: 'MENU', home: 'HOME', manifesto: 'Read The World Manifesto', staircase: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', qr: 'QR', share: 'Share', about: 'Why?', aboutAuthor: 'About...', aboutAuthorText: 'The author Sven Yngerstedt resides in Sweden and spent three decades in Sweden\'s Arctic region. He was born in Stockholm in 1968.', linkNotice: 'You are welcome to link to this site.' },
        'fi': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lue Maailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset alueet', robotel: 'Robotel', qr: 'QR', share: 'Jaa', about: 'Miksi?', aboutAuthor: 'Tietoja...', aboutAuthorText: 'Kirjailija Sven Yngerstedt asuu Ruotsissa ja vietti kolme vuosikymmentä Ruotsin arktisella alueella. Hän on syntynyt Tukholmassa vuonna 1968.', linkNotice: 'Tälle sivustolle saa linkittää.' },
        'zh': { menu: '菜单', home: '首页', manifesto: '阅读世界宣言', staircase: '自由阶梯 (english)', tropics: '热带地区', robotel: '机器人', qr: 'QR', share: '分享', about: '为什么？', aboutAuthor: '关于...', aboutAuthorText: '作者 Sven Yngerstedt 居住在瑞典，并在瑞典北极地区度过了三十年。他于1968年出生在斯德哥尔摩。', linkNotice: '欢迎链接到本网站。' },
        'yue': { menu: '選單', home: '主頁', manifesto: '閱讀世界宣言', staircase: '自由樓梯 (english)', tropics: '熱帶地區', robotel: 'Robotel', qr: 'QR', share: '分享', about: '點解？', aboutAuthor: '關於...', aboutAuthorText: '作者 Sven Yngerstedt 住喺瑞典，喺瑞典北極地區度過咗三十年。佢喺1968年出世喺斯德哥爾摩。', linkNotice: '歡迎連結到呢個網站。' },
        'jv': { menu: 'MENU', home: 'NGAREP', manifesto: 'Waca Manifesto Jagad', staircase: 'Tangga Kamardikan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', about: 'Kenaapa?', aboutAuthor: 'Babagan...', aboutAuthorText: 'Penulis Sven Yngerstedt manggon ing Swedia lan nglampahi telung dasawarsa ing wilayah Arktik Swedia. Dheweke lair ing Stockholm taun 1968.', linkNotice: 'Sampeyan dipunakeni nyambung dhateng situs menika.' },
        'pa': { menu: 'ਮੀਨੂ', home: 'ਘਰ', manifesto: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਪੜ੍ਹੋ', staircase: 'ਆਜ਼ਾਦੀ ਦੀ ਪੌੜੀ (english)', tropics: 'ਗਰਮ ਖੰਡੀ ਖੇਤਰ', robotel: 'ਰੋਬੋਟਲ', qr: 'QR', share: 'ਸਾਂਝਾ ਕਰੋ', about: 'ਕਿਉਂ?', aboutAuthor: 'ਬਾਰੇ...', aboutAuthorText: 'ਲੇਖਕ ਸਵੈਨ ਯਿੰਗਰਸਟੈਡਟ ਸਵੀਡਨ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਸਵੀਡਨ ਦੇ ਆਰਕਟਿਕ ਖੇਤਰ ਵਿੱਚ ਤਿੰਨ ਦਹਾਕੇ ਬਿਤਾਏ। ਉਹ 1968 ਵਿੱਚ ਸਟਾਕਹੋਮ ਵਿੱਚ ਪੈਦਾ ਹੋਇਆ ਸੀ।', linkNotice: 'ਇਸ ਸਾਈਟ ਨੂੰ ਲਿੰਕ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਹੈ।' },
        'hi': { menu: 'मेनू', home: 'होम', manifesto: 'विश्व घोषणापत्र पढ़ें', staircase: 'स्वतंत्रता सीढ़ी (english)', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', qr: 'QR', share: 'साझा करें', about: 'क्यों?', aboutAuthor: 'परिचय...', aboutAuthorText: 'लेखक स्वेन यिंगरस्टेड्ट स्वीडन में रहते हैं और स्वीडन के आर्कटिक क्षेत्र में तीन दशक बिताए। उनका जन्म 1968 में स्टॉकहोम में हुआ था।', linkNotice: 'इस साइट को लिंक करने की अनुमति है।' },
        'es': { menu: 'MENÚ', home: 'INICIO', manifesto: 'Leer El Manifiesto Mundial', staircase: 'Escalera de la Libertad (english)', tropics: 'Los Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartir', about: '¿Por qué?', aboutAuthor: 'Acerca de...', aboutAuthorText: 'El autor Sven Yngerstedt reside en Suecia y pasó tres décadas en la región ártica de Suecia. Nació en Estocolmo en 1968.', linkNotice: 'Se permite enlazar a este sitio.' },
        'fr': { menu: 'MENU', home: 'ACCUEIL', manifesto: 'Lire Le Manifeste Mondial', staircase: 'Escalier de la Liberté (english)', tropics: 'Les Tropiques', robotel: 'Robotel', qr: 'QR', share: 'Partager', about: 'Pourquoi ?', aboutAuthor: 'À propos...', aboutAuthorText: 'L\'auteur Sven Yngerstedt réside en Suède et a passé trois décennies dans la région arctique suédoise. Il est né à Stockholm en 1968.', linkNotice: 'Il est permis de créer un lien vers ce site.' },
        'de': { menu: 'MENÜ', home: 'STARTSEITE', manifesto: 'Das Weltmanifest lesen', staircase: 'Freiheitstreppe (english)', tropics: 'Die Tropen', robotel: 'Robotel', qr: 'QR', share: 'Teilen', about: 'Warum?', aboutAuthor: 'Über...', aboutAuthorText: 'Der Autor Sven Yngerstedt lebt in Schweden und verbrachte drei Jahrzehnte in der arktischen Region Schwedens. Er wurde 1968 in Stockholm geboren.', linkNotice: 'Es ist erlaubt, auf diese Website zu verlinken.' },
        'ar': { menu: 'القائمة', home: 'الرئيسية', manifesto: 'اقرأ البيان العالمي', staircase: 'سلم الحرية (english)', tropics: 'المناطق الاستوائية', robotel: 'روbotel', qr: 'QR', share: 'مشاركة', about: 'لماذا؟', aboutAuthor: 'حول...', aboutAuthorText: 'المؤلف سفين ينغيرستيدت يقيم في السويد وأمضى ثلاثة عقود في المنطقة القطبية الشمالية السويدية. وُلد في ستوكهولم عام 1968.', linkNotice: 'يُسمح بالربط بهذا الموقع.' },
        'id': { menu: 'MENU', home: 'BERANDA', manifesto: 'Baca Manifest Dunia', staircase: 'Tangga Kebebasan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', about: 'Mengapa?', aboutAuthor: 'Tentang...', aboutAuthorText: 'Penulis Sven Yngerstedt tinggal di Swedia dan menghabiskan tiga dekade di wilayah Arktik Swedia. Ia lahir di Stockholm pada tahun 1968.', linkNotice: 'Diperbolehkan untuk menautkan ke situs ini.' },
        'bn': { menu: 'মেনু', home: 'হোম', manifesto: 'বিশ্ব ইশতেহার পড়ুন', staircase: 'স্বাধীনতার সিঁড়ি (english)', tropics: 'ক্রান্তীয় অঞ্চল', robotel: 'রোবোটেল', qr: 'QR', share: 'শেয়ার করুন', about: 'কেন?', aboutAuthor: 'সম্পর্কে...', aboutAuthorText: 'লেখক স্ভেন ইংরস্টেডট সুইডেনে বসবাস করেন এবং সুইডেনের আর্কটিক অঞ্চলে তিন দশক অতিবাহিত করেছেন। তিনি ১৯৬৮ সালে স্টকহোমে জন্মগ্রহণ করেন।', linkNotice: 'এই সাইটে লিঙ্ক করা অনুমোদিত।' },
        'pt': { menu: 'MENU', home: 'INÍCIO', manifesto: 'Ler O Manifesto Mundial', staircase: 'Escada da Liberdade (english)', tropics: 'Os Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartilhar', about: 'Porquê?', aboutAuthor: 'Sobre...', aboutAuthorText: 'O autor Sven Yngerstedt reside na Suécia e passou três décadas na região ártica sueca. Ele nasceu em Estocolmo em 1968.', linkNotice: 'É permitido criar links para este site.' },
        'ru': { menu: 'МЕНЮ', home: 'ГЛАВНАЯ', manifesto: 'Читать Всемирный манифест', staircase: 'Лестница Свободы (english)', tropics: 'Тропики', robotel: 'Роботель', qr: 'QR', share: 'Поделиться', about: 'Почему?', aboutAuthor: 'О нас...', aboutAuthorText: 'Автор Свен Ингерстедт проживает в Швеции и провёл три десятилетия в арктическом регионе Швеции. Он родился в Стокгольме в 1968 году.', linkNotice: 'Разрешается ссылаться на этот сайт.' },
        'uk': { menu: 'МЕНЮ', home: 'ГОЛОВНА', manifesto: 'Читати Всесвітній маніфест', staircase: 'Сходи Свободи (english)', tropics: 'Тропіки', robotel: 'Роботель', qr: 'QR', share: 'Поділитися', about: 'Чому?', aboutAuthor: 'Про нас...', aboutAuthorText: 'Автор Свен Інгерстедт проживає у Швеції та провів три десятиліття в арктичному регіоні Швеції. Він народився у Стокгольмі в 1968 році.', linkNotice: 'Дозволяється посилатися на цей сайт.' },
        'bg': { menu: 'МЕНЮ', home: 'НАЧАЛО', manifesto: 'Прочетете Световния манифест', staircase: 'Стълбата на свободата (english)', tropics: 'Тропиците', robotel: 'Роботель', qr: 'QR', share: 'Сподели', about: 'Защо?', aboutAuthor: 'Относно...', aboutAuthorText: 'Авторът Свен Ингерстедт живее в Швеция и прекара три десетилетия в арктическия регион на Швеция. Той е роден в Стокхолм през 1968 г.', linkNotice: 'Разрешава се свързване към този сайт.' },
        'ur': { menu: 'مینو', home: 'ہوم', manifesto: 'عالمی منشور پڑھیں', staircase: 'آزادی کی سیڑھی (english)', tropics: 'اشنکٹبندیی', robotel: 'روبوٹیل', qr: 'QR', share: 'شیئر کریں', about: 'کیوں؟', aboutAuthor: 'کے بارے میں...', aboutAuthorText: 'مصنف سوین ینگیرسٹڈٹ سویڈن میں مقیم ہیں اور سویڈن کے آرکٹک علاقے میں تین دہائیاں گزارے۔ وہ 1968 میں اسٹاک ہوم میں پیدا ہوئے۔', linkNotice: 'اس سائٹ سے لنک کرنے کی اجازت ہے۔' },
        'ja': { menu: 'メニュー', home: 'ホーム', manifesto: '世界宣言を読む', staircase: '自由の階段 (english)', tropics: '熱帯地域', robotel: 'ロボテル', qr: 'QR', share: '共有', about: 'なぜ？', aboutAuthor: '概要...', aboutAuthorText: '著者スヴェン・インゲルステットはスウェーデンに居住し、スウェーデンの北極地域で30年を過ごしました。彼は1968年にストックホルムで生まれました。', linkNotice: 'このサイトへのリンクは自由です。' },
        'fil': { menu: 'MENU', home: 'HOME', manifesto: 'Basahin ang Manipesto ng Mundo', staircase: 'Hagdan ng Kalayaan (english)', tropics: 'Ang Tropiko', robotel: 'Robotel', qr: 'QR', share: 'Ibahagi', about: 'Bakit?', aboutAuthor: 'Tungkol...', aboutAuthorText: 'Ang may-akda na si Sven Yngerstedt ay naninirahan sa Sweden at gumugol ng tatlong dekada sa Arctic region ng Sweden. Siya ay ipinanganak sa Stockholm noong 1968.', linkNotice: 'Pinapayagan na mag-link sa site na ito.' },
        'ko': { menu: '메뉴', home: '홈', manifesto: '세계 선언문 읽기', staircase: '자유의 계단 (english)', tropics: '열대 지방', robotel: '로보텔', qr: 'QR', share: '공유', about: '왜?', aboutAuthor: '소개...', aboutAuthorText: '저자 스벤 잉에르스테트는 스웨덴에 거주하며 스웨덴의 북극 지역에서 30년을 보냈습니다. 그는 1968년 스톡홀름에서 태어났습니다.', linkNotice: '이 사이트에 링크하는 것이 허용됩니다.' },
        'th': { menu: 'เมนู', home: 'หน้าแรก', manifesto: 'อ่านแถลงการณ์โลก', staircase: 'บันไดเสรีภาพ (english)', tropics: 'เขตร้อน', robotel: 'โรโบเทล', qr: 'QR', share: 'แชร์', about: 'ทำไม?', aboutAuthor: 'เกี่ยวกับ...', aboutAuthorText: 'ผู้เขียน Sven Yngerstedt อาศัยอยู่ในสวีเดนและใช้เวลาสามทศวรรษในเขตอาร์กติกของสวีเดน เขาเกิดที่สตอกโฮล์มในปี 1968', linkNotice: 'อนุญาตให้ลิงก์ไปยังไซต์นี้' },
        'vi': { menu: 'MENU', home: 'TRANG CHỦ', manifesto: 'Đọc Tuyên ngôn Thế giới', staircase: 'Cầu thang Tự do (english)', tropics: 'Vùng nhiệt đới', robotel: 'Robotel', qr: 'QR', share: 'Chia sẻ', about: 'Tại sao?', aboutAuthor: 'Giới thiệu...', aboutAuthorText: 'Tác giả Sven Yngerstedt cư trú tại Thụy Điển và đã dành ba thập kỷ ở vùng Bắc Cực của Thụy Điển. Ông sinh ra ở Stockholm năm 1968.', linkNotice: 'Được phép liên kết đến trang web này.' },
        'tr': { menu: 'MENÜ', home: 'ANA SAYFA', manifesto: 'Dünya Manifestosu\'nu Oku', staircase: 'Özgürlük Merdiveni (english)', tropics: 'Tropikler', robotel: 'Robotel', qr: 'QR', share: 'Paylaş', about: 'Neden?', aboutAuthor: 'Hakkında...', aboutAuthorText: 'Yazar Sven Yngerstedt İsveç\'te yaşıyor ve İsveç\'in Arktik bölgesinde otuz yıl geçirdi. 1968\'de Stockholm\'de doğdu.', linkNotice: 'Bu siteye bağlantı vermek serbesttir.' },
        'fa': { menu: 'منو', home: 'خانه', manifesto: 'مانیفست جهانی را بخوانید', staircase: 'پلکان آزادی (english)', tropics: 'مناطق استوایی', robotel: 'روbotel', qr: 'QR', share: 'اشتراک‌گذاری', about: 'چرا؟', aboutAuthor: 'درباره...', aboutAuthorText: 'نویسنده اسون ینگرستد در سوئد زندگی می‌کند و سه دهه را در منطقه قطبی سوئد گذراند. او در سال 1968 در استکهلم متولد شد.', linkNotice: 'پیوند دادن به این سایت مجاز است.' },
        'sw': { menu: 'MENU', home: 'NYUMBANI', manifesto: 'Soma Ilani ya Dunia', staircase: 'Ngazi ya Uhuru (english)', tropics: 'Maeneo ya Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Shiriki', about: 'Kwa nini?', aboutAuthor: 'Kuhusu...', aboutAuthorText: 'Mwandishi Sven Yngerstedt anaishi Uswidi na alitumia miongo mitatu katika eneo la Aktiki la Uswidi. Alizaliwa Stockholm mwaka 1968.', linkNotice: 'Inaruhusiwa kuunganisha kwenye tovuti hii.' },
        'it': { menu: 'MENU', home: 'HOME', manifesto: 'Leggi il Manifesto Mondiale', staircase: 'Scala della Libertà (english)', tropics: 'I Tropici', robotel: 'Robotel', qr: 'QR', share: 'Condividi', about: 'Perché?', aboutAuthor: 'Informazioni...', aboutAuthorText: 'L\'autore Sven Yngerstedt risiede in Svezia e ha trascorso tre decenni nella regione artica svedese. È nato a Stoccolma nel 1968.', linkNotice: 'È consentito collegarsi a questo sito.' },
        'pl': { menu: 'MENU', home: 'STRONA GŁÓWNA', manifesto: 'Przeczytaj Manifest Światowy', staircase: 'Schody Wolności (english)', tropics: 'Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Udostępnij', about: 'Dlaczego?', aboutAuthor: 'O nas...', aboutAuthorText: 'Autor Sven Yngerstedt mieszka w Szwecji i spędził trzy dekady w regionie arktycznym Szwecji. Urodził się w Sztokholmie w 1968 roku.', linkNotice: 'Dozwolone jest linkowanie do tej strony.' },
        'nl': { menu: 'MENU', home: 'HOME', manifesto: 'Lees het Wereldmanifest', staircase: 'Vrijheidstrap (english)', tropics: 'De Tropen', robotel: 'Robotel', qr: 'QR', share: 'Delen', about: 'Waarom?', aboutAuthor: 'Over...', aboutAuthorText: 'De auteur Sven Yngerstedt woont in Zweden en bracht drie decennia door in de Arctische regio van Zweden. Hij is geboren in Stockholm in 1968.', linkNotice: 'Het is toegestaan om naar deze site te linken.' },
        'ro': { menu: 'MENU', home: 'ACASĂ', manifesto: 'Citiți Manifestul Mondial', staircase: 'Scara Libertății (english)', tropics: 'Tropicele', robotel: 'Robotel', qr: 'QR', share: 'Distribuie', about: 'De ce?', aboutAuthor: 'Despre...', aboutAuthorText: 'Autorul Sven Yngerstedt locuiește în Suedia și a petrecut trei decenii în regiunea arctică a Suediei. S-a născut la Stockholm în 1968.', linkNotice: 'Este permis să faceți un link către acest site.' },
        'el': { menu: 'ΜΕΝΟΥ', home: 'ΑΡΙΚΗ', manifesto: 'Διαβάστε το Παγκόσμιο Μανιφέστο', staircase: 'Σκάλα της Ελευθερίας (english)', tropics: 'Οι Τροπικοί', robotel: 'Ρομποτέλ', qr: 'QR', share: 'Μοιραστείτε', about: 'Γιατί;', aboutAuthor: 'Σχετικά...', aboutAuthorText: 'Ο συγγραφέας Sven Yngerstedt κατοικεί στη Σουηδία και πέρασε τρεις δεκαετίες στην αρκτική περιοχή της Σουηδίας. Γεννήθηκε στη Στοκχόλμη το 1968.', linkNotice: 'Επιτρέπεται η σύνδεση προς αυτόν τον ιστότοπο.' },
        'af': { menu: 'MENU', home: 'TUIS', manifesto: 'Lees die Wêreldmanifest', staircase: 'Vryheidstrap (english)', tropics: 'Die Trope', robotel: 'Robotel', qr: 'QR', share: 'Deel', about: 'Waarom?', aboutAuthor: 'Oor...', aboutAuthorText: 'Die skrywer Sven Yngerstedt woon in Swede en het drie dekades in Swede se Arktiese streek deurgebring. Hy is in 1968 in Stockholm gebore.', linkNotice: 'Dit is toegestaan om na hierdie webwerf te skakel.' },
        'zu': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yomhlaba', staircase: 'Izitebhisi Zenkululeko (english)', tropics: 'Izindawo Ezishisayo', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', about: 'Kungani?', aboutAuthor: 'Mayelana...', aboutAuthorText: 'Umbhali uSven Yngerstedt uhlala eSweden futhi wachitha amashumi amathathu eminyaka esifundeni sase-Arctic saseSweden. Wazalwa eStockholm ngo-1968.', linkNotice: 'Kuvunyelwe ukuxhumanisa kule sayithi.' },
        'xh': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yehlabathi', staircase: 'Izinyuko Zenkululeko (english)', tropics: 'Iindawo Ezishushu', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', about: 'Kutheni?', aboutAuthor: 'Malunga...', aboutAuthorText: 'Umbhali uSven Yngerstedt uhlala eSweden kwaye wachitha amashumi amathathu eminyaka kwingingqi ye-Arctic yaseSweden. Wazalwa eStockholm ngo-1968.', linkNotice: 'Kuvumelekile ukunxibelelanisa kule sayithi.' },
        'cs': { menu: 'MENU', home: 'DOMŮ', manifesto: 'Přečtěte si Světový manifest', staircase: 'Schody svobody (english)', tropics: 'Tropy', robotel: 'Robotel', qr: 'QR', share: 'Sdílet', about: 'Proč?', aboutAuthor: 'O nás...', aboutAuthorText: 'Autor Sven Yngerstedt žije ve Švédsku a strávil tři desetiletí v arktické oblasti Švédska. Narodil se ve Stockholmu v roce 1968.', linkNotice: 'Je povoleno odkazovat na tento web.' },
        'hu': { menu: 'MENÜ', home: 'KEZDŐLAP', manifesto: 'Olvassa el a Világkiáltványt', staircase: 'A Szabadság Lépcsői (english)', tropics: 'A Trópusok', robotel: 'Robotel', qr: 'QR', share: 'Megosztás', about: 'Miért?', aboutAuthor: 'Névjegy...', aboutAuthorText: 'A szerző, Sven Yngerstedt Svédországban él, és három évtizedet töltött Svédország sarkvidéki régiójában. 1968-ban született Stockholmban.', linkNotice: 'Engedélyezett erre az oldalra mutató hivatkozás.' },
        'he': { menu: 'תפריט', home: 'בית', manifesto: 'קראו את מניפסט העולם', staircase: 'מדרגות החירות (english)', tropics: 'האזורים הטרופיים', robotel: 'רובוטל', qr: 'QR', share: 'שתף', about: 'למה?', aboutAuthor: 'אודות...', aboutAuthorText: 'המחבר סוון ינגרסטדט מתגורר בשוודיה ובילה שלושה עשורים באזור הארקטי של שוודיה. הוא נולד בשטוקהולם בשנת 1968.', linkNotice: 'מותר לקשר לאתר זה.' },
        'crs': { menu: 'MENU', home: 'LAK', manifesto: 'Lir Manifest lemonn', staircase: 'Leskal Libète (english)', tropics: 'Latropik', robotel: 'Robotel', qr: 'QR', share: 'Partaz', about: 'Akoz?', aboutAuthor: 'Konsernan...', aboutAuthorText: 'Loten Sven Yngerstedt i reste Sesel e i pas trwa dekad dan rezwon arktik Sesel. I ne Stokholm an 1968.', linkNotice: 'I permèt pour fer enn lyen kot sa sit.' },
        'no': { menu: 'MENY', home: 'HJEM', manifesto: 'Les Verdensmanifestet', staircase: 'Frihetstrappen (english)', tropics: 'Tropene', robotel: 'Robotel', qr: 'QR', share: 'Del', about: 'Hvorfor?', aboutAuthor: 'Om...', aboutAuthorText: 'Forfatteren Sven Yngerstedt bor i Sverige og tilbrakte tre tiår i Sveriges arktiske område. Han er født i Stockholm i 1968.', linkNotice: 'Det er tillatt å lenke til dette nettstedet.' },
        'se': { menu: 'MENY', home: 'RUVŦOT', manifesto: 'Loga Máilmmi Manifesta', staircase: 'Frihetstrappa (english)', tropics: 'Tropiija', robotel: 'Robotel', qr: 'QR', share: 'Juoge', about: 'Manne?', aboutAuthor: 'Birra...', aboutAuthorText: 'Čálli Sven Yngerstedt ássá Ruoŧas ja orui golbma logi jagi Ruoŧa árktalaš guovllus. Son lea riegádan Stockholmas jagi 1968.', linkNotice: 'Leavga ovtta liŋkka dán neahttabáikái.' },
        'fit': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lukea Mailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset', robotel: 'Robotel', qr: 'QR', share: 'Jaa', about: 'Miksi?', aboutAuthor: 'Tietoja...', aboutAuthorText: 'Kirjailija Sven Yngerstedt asuu Ruotsissa ja vietti kolme vuosikymmentä Ruotsin arktisella alueella. Hän on syntyny Tukholmassa vuonna 1968.', linkNotice: 'Tälle sivustolle saa linkittää.' },
        'da': { menu: 'MENU', home: 'HJEM', manifesto: 'Læs Verdensmanifestet', staircase: 'Frihedstrappen (english)', tropics: 'Troperne', robotel: 'Robotel', qr: 'QR', share: 'Del', about: 'Hvorfor?', aboutAuthor: 'Om...', aboutAuthorText: 'Forfatteren Sven Yngerstedt bor i Sverige og tilbragte tre årtier i Sveriges arktiske område. Han er født i Stockholm i 1968.', linkNotice: 'Det er tilladt at linke til dette websted.' },
        'is': { menu: 'VALMYND', home: 'HEIM', manifesto: 'Lesa Heimsmanifestið', staircase: 'Frelsisstiginn (english)', tropics: 'Hitabeltið', robotel: 'Robotel', qr: 'QR', share: 'Deila', about: 'Af hverju?', aboutAuthor: 'Um...', aboutAuthorText: 'Höfundurinn Sven Yngerstedt býr í Svíþjóð og eyddi þremur áratugum á norðurslóðum Svíþjóðar. Hann er fæddur í Stokkhólmi árið 1968.', linkNotice: 'Leyfilegt er að tengja á þessa vefsíðu.' },
        'fo': { menu: 'MENY', home: 'HEIM', manifesto: 'Les Heimsskráina', staircase: 'Frælsistrappan (english)', tropics: 'Tropiskir', robotel: 'Robotel', qr: 'QR', share: 'Deil', about: 'Hví?', aboutAuthor: 'Um...', aboutAuthorText: 'Rithøvundurin Sven Yngerstedt býr í Svøríki og brúkti trý tíáríð í arktiska økinum í Svøríki. Hann er føddur í Stokkhólmi í 1968.', linkNotice: 'Tað er loyvt at leinkja til hesa heimasíðuna.' }
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
                        <a href="${base}why.html?lang=${currentLang}"><img src="${base}menu_icons/banner.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.about}</a>
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

        const linkText = document.createElement('p');
        linkText.textContent = t.linkNotice;
        linkText.style.marginTop = '12px';
        linkText.style.fontSize = '0.9rem';
        linkText.style.color = '#666';
        linkText.style.fontStyle = 'italic';

        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(text);
        modal.appendChild(linkText);
        document.body.appendChild(modal);

        return modal;
    }

    const aboutModal = createAboutModal();

    // === EN ENDA CLICK-HÄNDELSE – både öppna och stäng ===
    document.addEventListener('click', function(e) {

        // 1. ÖPPNA: Om man klickar på "Om..."-länken
        const link = e.target.closest('#aboutAuthorLink');
        if (link) {
            e.preventDefault();
            e.stopPropagation();
            aboutModal.classList.add('visible');
            return;
        }

        // 2. STÄNG MED ×: Om man klickar på stäng-knappen
        if (e.target.closest('#aboutAuthorModal .close-btn')) {
            e.stopPropagation();
            aboutModal.classList.remove('visible');
            return;
        }

        // 3. STÄNG UTANFÖR: Om man klickar utanför rutan
        if (aboutModal && aboutModal.classList.contains('visible')) {
            if (!aboutModal.contains(e.target)) {
                aboutModal.classList.remove('visible');
            }
        }
    });

    // === STÄNG MED ESCAPE ===
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && aboutModal && aboutModal.classList.contains('visible')) {
            aboutModal.classList.remove('visible');
        }
    });
});
