import { AVAILABLE, RELATED_FALLBACK, pickBestLanguage } from './lang/js/lang.js';

// ============================================================
// MENU.JS - Global meny för The World Manifesto (45 språk)
// UPPDATERAD: "About" / "Om" heter nu "Why?" / "Varför?"
// NY: "Om..." som öppnar en inforuta med författarinformation
// CSS i menu.css
// Stängs med: klick på ×, klick på rutan, klick utanför, Escape
// SENASTE: linkNotice ändrad till "Links to this site are welcome."
//          "Om..."-rutan har gul bakgrund (#FFFDE7)
//          Rullgardinsmenyn stängs när "Om..." öppnas
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
        'sv': { menu: 'MENY', home: 'HEM', manifesto: 'Läs Världsmanifestet', staircase: 'Frihetstrappan (english)', tropics: 'Tropikerna', robotel: 'Robotel', qr: 'QR', share: 'Dela', about: 'Varför?', aboutAuthor: 'Om...', aboutAuthorText: 'Världsmanifestet utarbetades av Sven Yngerstedt, Sverige. Han är initiativtagare till Världsmanifestet och en förespråkare för totalrobotisering – en framtid där autonoma robotar befriar mänskligheten från arbetsoket. Detta är ett ramverk för systemisk politisk förändring.', aboutLaunch: 'Webbsidan Världsmanifestet lanserades 2026.', linkNotice: 'Länkar till denna sajt är välkomna.' },
        'en': { menu: 'MENU', home: 'HOME', manifesto: 'Read The World Manifesto', staircase: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', qr: 'QR', share: 'Share', about: 'Why?', aboutAuthor: 'About...', aboutAuthorText: 'The World Manifesto was drafted by Sven Yngerstedt, Sweden. He is the initiator of the World Manifesto and advocates total robotization – a future where autonomous robots free humanity from the yoke of labor. This is a framework intended for systemic political transformation.', aboutLaunch: 'The World Manifesto website was launched in 2026.', linkNotice: 'Links to this site are welcome.' },
        'fi': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lue Maailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset alueet', robotel: 'Robotel', qr: 'QR', share: 'Jaa', about: 'Miksi?', aboutAuthor: 'Tietoja...', aboutAuthorText: 'Maailmanmanifestin laati Sven Yngerstedt, Ruotsi. Hän on Maailmanmanifestin aloitteentekijä ja täydellisen robotisaation puolestapuhuja – tulevaisuus, jossa autonomiset robotit vapauttavat ihmiskunnan työn ikeestä. Tämä on kehys systeemiselle poliittiselle muutokselle.', aboutLaunch: 'Maailmanmanifestin verkkosivusto avattiin vuonna 2026.', linkNotice: 'Linkit tälle sivustolle ovat tervetulleita.' },
        'zh': { menu: '菜单', home: '首页', manifesto: '阅读世界宣言', staircase: '自由阶梯 (english)', tropics: '热带地区', robotel: '机器人', qr: 'QR', share: '分享', about: '为什么？', aboutAuthor: '关于...', aboutAuthorText: '《世界宣言》由瑞典的 Sven Yngerstedt 起草。他是《世界宣言》的发起人，也是全面机器人化的倡导者——一个自主机器人将人类从劳动枷锁中解放出来的未来。这是系统性政治变革的框架。', aboutLaunch: '《世界宣言》网站于2026年上线。', linkNotice: '欢迎链接到本网站。' },
        'yue': { menu: '選單', home: '主頁', manifesto: '閱讀世界宣言', staircase: '自由樓梯 (english)', tropics: '熱帶地區', robotel: 'Robotel', qr: 'QR', share: '分享', about: '點解？', aboutAuthor: '關於...', aboutAuthorText: '《世界宣言》由瑞典嘅 Sven Yngerstedt 起草。佢係《世界宣言》嘅發起人，亦係全面機械人化嘅倡導者——一個自主機械人將人類從勞動枷鎖中解放出嚟嘅未來。呢個係系統性政治變革嘅框架。', aboutLaunch: '《世界宣言》網站喺2026年上線。', linkNotice: '歡迎連結到呢個網站。' },
        'jv': { menu: 'MENU', home: 'NGAREP', manifesto: 'Waca Manifesto Jagad', staircase: 'Tangga Kamardikan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', about: 'Kenaapa?', aboutAuthor: 'Babagan...', aboutAuthorText: 'Manifesto Jagad disusun dening Sven Yngerstedt, Swedia. Dheweke minangka inisiator Manifesto Jagad lan panyengkuyung robotisasi total – masa depan ing ngendi robot otonom mbebasake manungsa saka kuk kerja. Iki minangka kerangka kanggo owah-owahan politik sistemik.', aboutLaunch: 'Situs web Manifesto Jagad diluncurake ing taun 2026.', linkNotice: 'Tautan menyang situs iki ditampani.' },
        'pa': { menu: 'ਮੀਨੂ', home: 'ਘਰ', manifesto: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਪੜ੍ਹੋ', staircase: 'ਆਜ਼ਾਦੀ ਦੀ ਪੌੜੀ (english)', tropics: 'ਗਰਮ ਖੰਡੀ ਖੇਤਰ', robotel: 'ਰੋਬੋਟਲ', qr: 'QR', share: 'ਸਾਂਝਾ ਕਰੋ', about: 'ਕਿਉਂ?', aboutAuthor: 'ਬਾਰੇ...', aboutAuthorText: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਸਵੀਡਨ ਦੇ ਸਵੈਨ ਯਿੰਗਰਸਟੈਡਟ ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਸੀ। ਉਹ ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਦਾ ਪਹਿਲਕਦਮੀ ਕਰਨ ਵਾਲਾ ਅਤੇ ਪੂਰਨ ਰੋਬੋਟੀਕਰਨ ਦਾ ਵਕੀਲ ਹੈ – ਇੱਕ ਭਵਿੱਖ ਜਿੱਥੇ ਖੁਦਮੁਖਤਿਆਰ ਰੋਬੋਟ ਮਨੁੱਖਤਾ ਨੂੰ ਕਿਰਤ ਦੇ ਜੂਲੇ ਤੋਂ ਮੁਕਤ ਕਰਦੇ ਹਨ। ਇਹ ਪ੍ਰਣਾਲੀਗਤ ਰਾਜਨੀਤਿਕ ਤਬਦੀਲੀ ਲਈ ਇੱਕ ਢਾਂਚਾ ਹੈ।', aboutLaunch: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਦੀ ਵੈੱਬਸਾਈਟ 2026 ਵਿੱਚ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ ਸੀ।', linkNotice: 'ਇਸ ਸਾਈਟ ਦੇ ਲਿੰਕ ਸਵਾਗਤ ਹਨ।' },
        'hi': { menu: 'मेनू', home: 'होम', manifesto: 'विश्व घोषणापत्र पढ़ें', staircase: 'स्वतंत्रता सीढ़ी (english)', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', qr: 'QR', share: 'साझा करें', about: 'क्यों?', aboutAuthor: 'परिचय...', aboutAuthorText: 'विश्व घोषणापत्र स्वीडन के स्वेन यिंगरस्टेड्ट द्वारा तैयार किया गया था। वह विश्व घोषणापत्र के प्रवर्तक और पूर्ण रोबोटीकरण के समर्थक हैं – एक ऐसा भविष्य जहां स्वायत्त रोबोट मानवता को श्रम के जुए से मुक्त करते हैं। यह प्रणालीगत राजनीतिक परिवर्तन के लिए एक ढांचा है।', aboutLaunch: 'विश्व घोषणापत्र की वेबसाइट 2026 में शुरू की गई थी।', linkNotice: 'इस साइट के लिंक स्वागत हैं।' },
        'es': { menu: 'MENÚ', home: 'INICIO', manifesto: 'Leer El Manifiesto Mundial', staircase: 'Escalera de la Libertad (english)', tropics: 'Los Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartir', about: '¿Por qué?', aboutAuthor: 'Acerca de...', aboutAuthorText: 'El Manifiesto Mundial fue redactado por Sven Yngerstedt, Suecia. Es el iniciador del Manifiesto Mundial y defensor de la robotización total: un futuro en el que los robots autónomos liberen a la humanidad del yugo del trabajo. Este es un marco para la transformación política sistémica.', aboutLaunch: 'El sitio web del Manifiesto Mundial se lanzó en 2026.', linkNotice: 'Los enlaces a este sitio son bienvenidos.' },
        'fr': { menu: 'MENU', home: 'ACCUEIL', manifesto: 'Lire Le Manifeste Mondial', staircase: 'Escalier de la Liberté (english)', tropics: 'Les Tropiques', robotel: 'Robotel', qr: 'QR', share: 'Partager', about: 'Pourquoi ?', aboutAuthor: 'À propos...', aboutAuthorText: 'Le Manifeste Mondial a été rédigé par Sven Yngerstedt, Suède. Il est l\'initiateur du Manifeste Mondial et un défenseur de la robotisation totale – un avenir où les robots autonomes libèrent l\'humanité du joug du travail. C\'est un cadre pour une transformation politique systémique.', aboutLaunch: 'Le site web du Manifeste Mondial a été lancé en 2026.', linkNotice: 'Les liens vers ce site sont les bienvenus.' },
        'de': { menu: 'MENÜ', home: 'STARTSEITE', manifesto: 'Das Weltmanifest lesen', staircase: 'Freiheitstreppe (english)', tropics: 'Die Tropen', robotel: 'Robotel', qr: 'QR', share: 'Teilen', about: 'Warum?', aboutAuthor: 'Über...', aboutAuthorText: 'Das Weltmanifest wurde von Sven Yngerstedt, Schweden, verfasst. Er ist der Initiator des Weltmanifests und ein Befürworter der totalen Robotisierung – eine Zukunft, in der autonome Roboter die Menschheit vom Joch der Arbeit befreien. Dies ist ein Rahmen für systemischen politischen Wandel.', aboutLaunch: 'Die Website des Weltmanifests wurde 2026 gestartet.', linkNotice: 'Links zu dieser Website sind willkommen.' },
        'ar': { menu: 'القائمة', home: 'الرئيسية', manifesto: 'اقرأ البيان العالمي', staircase: 'سلم الحرية (english)', tropics: 'المناطق الاستوائية', robotel: 'روbotel', qr: 'QR', share: 'مشاركة', about: 'لماذا؟', aboutAuthor: 'حول...', aboutAuthorText: 'صاغ البيان العالمي سفين ينغيرستيدت، السويد. وهو المبادر للبيان العالمي والمدافع عن الروبوتية الكاملة – مستقبل تُحرر فيه الروبوتات المستقلة البشرية من نير العمل. هذا إطار للتحول السياسي الشامل.', aboutLaunch: 'أُطلق موقع البيان العالمي في عام 2026.', linkNotice: 'الروابط إلى هذا الموقع مرحب بها.' },
        'id': { menu: 'MENU', home: 'BERANDA', manifesto: 'Baca Manifest Dunia', staircase: 'Tangga Kebebasan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', about: 'Mengapa?', aboutAuthor: 'Tentang...', aboutAuthorText: 'Manifesto Dunia disusun oleh Sven Yngerstedt, Swedia. Ia adalah penggagas Manifesto Dunia dan pendukung robotisasi total – masa depan di mana robot otonom membebaskan umat manusia dari kuk kerja. Ini adalah kerangka untuk transformasi politik sistemik.', aboutLaunch: 'Situs web Manifesto Dunia diluncurkan pada tahun 2026.', linkNotice: 'Tautan ke situs ini dipersilakan.' },
        'bn': { menu: 'মেনু', home: 'হোম', manifesto: 'বিশ্ব ইশতেহার পড়ুন', staircase: 'স্বাধীনতার সিঁড়ি (english)', tropics: 'ক্রান্তীয় অঞ্চল', robotel: 'রোবোটেল', qr: 'QR', share: 'শেয়ার করুন', about: 'কেন?', aboutAuthor: 'সম্পর্কে...', aboutAuthorText: 'বিশ্ব ইশতেহার সুইডেনের স্ভেন ইংরস্টেডট দ্বারা প্রণীত হয়েছিল। তিনি বিশ্ব ইশতেহারের প্রবর্তক এবং সম্পূর্ণ রোবোটাইজেশনের প্রবক্তা – এমন একটি ভবিষ্যৎ যেখানে স্বায়ত্তশাসিত রোবট মানবতাকে শ্রমের জোয়াল থেকে মুক্ত করে। এটি পদ্ধতিগত রাজনৈতিক রূপান্তরের জন্য একটি কাঠামো।', aboutLaunch: 'বিশ্ব ইশতেহারের ওয়েবসাইট ২০২৬ সালে চালু করা হয়েছিল।', linkNotice: 'এই সাইটে লিঙ্ক স্বাগত।' },
        'pt': { menu: 'MENU', home: 'INÍCIO', manifesto: 'Ler O Manifesto Mundial', staircase: 'Escada da Liberdade (english)', tropics: 'Os Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartilhar', about: 'Porquê?', aboutAuthor: 'Sobre...', aboutAuthorText: 'O Manifesto Mundial foi redigido por Sven Yngerstedt, Suécia. Ele é o iniciador do Manifesto Mundial e defensor da robotização total – um futuro em que robôs autônomos libertam a humanidade do jugo do trabalho. Este é um quadro para a transformação política sistêmica.', aboutLaunch: 'O site do Manifesto Mundial foi lançado em 2026.', linkNotice: 'Links para este site são bem-vindos.' },
        'ru': { menu: 'МЕНЮ', home: 'ГЛАВНАЯ', manifesto: 'Читать Всемирный манифест', staircase: 'Лестница Свободы (english)', tropics: 'Тропики', robotel: 'Роботель', qr: 'QR', share: 'Поделиться', about: 'Почему?', aboutAuthor: 'О нас...', aboutAuthorText: 'Всемирный манифест был разработан Свеном Ингерстедтом, Швеция. Он является инициатором Всемирного манифеста и сторонником тотальной роботизации – будущего, в котором автономные роботы освободят человечество от ига труда. Это основа для системных политических преобразований.', aboutLaunch: 'Сайт Всемирного манифеста был запущен в 2026 году.', linkNotice: 'Ссылки на этот сайт приветствуются.' },
        'uk': { menu: 'МЕНЮ', home: 'ГОЛОВНА', manifesto: 'Читати Всесвітній маніфест', staircase: 'Сходи Свободи (english)', tropics: 'Тропіки', robotel: 'Роботель', qr: 'QR', share: 'Поділитися', about: 'Чому?', aboutAuthor: 'Про нас...', aboutAuthorText: 'Всесвітній маніфест розробив Свен Інгерстедт, Швеція. Він є ініціатором Всесвітнього маніфесту та прихильником тотальної роботизації – майбутнього, в якому автономні роботи звільнять людство від ярма праці. Це основа для системних політичних змін.', aboutLaunch: 'Веб-сайт Всесвітнього маніфесту було запущено у 2026 році.', linkNotice: 'Посилання на цей сайт вітаються.' },
        'bg': { menu: 'МЕНЮ', home: 'НАЧАЛО', manifesto: 'Прочетете Световния манифест', staircase: 'Стълбата на свободата (english)', tropics: 'Тропиците', robotel: 'Роботель', qr: 'QR', share: 'Сподели', about: 'Защо?', aboutAuthor: 'Относно...', aboutAuthorText: 'Световният манифест беше изготвен от Свен Ингерстедт, Швеция. Той е инициатор на Световния манифест и привърженик на пълната роботизация – бъдеще, в което автономните роботи освобождават човечеството от игото на труда. Това е рамка за системна политическа трансформация.', aboutLaunch: 'Уебсайтът на Световния манифест беше стартиран през 2026 г.', linkNotice: 'Връзки към този сайт са добре дошли.' },
        'ur': { menu: 'مینو', home: 'ہوم', manifesto: 'عالمی منشور پڑھیں', staircase: 'آزادی کی سیڑھی (english)', tropics: 'اشنکٹبندیی', robotel: 'روبوٹیل', qr: 'QR', share: 'شیئر کریں', about: 'کیوں؟', aboutAuthor: 'کے بارے میں...', aboutAuthorText: 'عالمی منشور سویڈن کے سوین ینگیرسٹڈٹ نے تیار کیا تھا۔ وہ عالمی منشور کا آغاز کرنے والا اور مکمل روبوٹائزیشن کا حامی ہے – ایسا مستقبل جہاں خودمختار روبوٹ انسانیت کو محنت کے جوئے سے آزاد کرتے ہیں۔ یہ نظامی سیاسی تبدیلی کے لیے ایک فریم ورک ہے۔', aboutLaunch: 'عالمی منشور کی ویب سائٹ 2026 میں شروع کی گئی تھی۔', linkNotice: 'اس سائٹ کے لنکس خوش آمدید ہیں۔' },
        'ja': { menu: 'メニュー', home: 'ホーム', manifesto: '世界宣言を読む', staircase: '自由の階段 (english)', tropics: '熱帯地域', robotel: 'ロボテル', qr: 'QR', share: '共有', about: 'なぜ？', aboutAuthor: '概要...', aboutAuthorText: '世界宣言はスウェーデンのスヴェン・インゲルステットによって起草されました。彼は世界宣言の発起人であり、完全なロボット化の提唱者です – 自律型ロボットが人類を労働のくびきから解放する未来。これは体系的な政治変革のための枠組みです。', aboutLaunch: '世界宣言のウェブサイトは2026年に開設されました。', linkNotice: 'このサイトへのリンクを歓迎します。' },
        'fil': { menu: 'MENU', home: 'HOME', manifesto: 'Basahin ang Manipesto ng Mundo', staircase: 'Hagdan ng Kalayaan (english)', tropics: 'Ang Tropiko', robotel: 'Robotel', qr: 'QR', share: 'Ibahagi', about: 'Bakit?', aboutAuthor: 'Tungkol...', aboutAuthorText: 'Ang Manipesto ng Mundo ay isinulat ni Sven Yngerstedt, Sweden. Siya ang nagpasimula ng Manipesto ng Mundo at tagapagtaguyod ng total na robotisasyon – isang hinaharap kung saan ang mga autonomous na robot ay nagpapalaya sa sangkatauhan mula sa pamatok ng paggawa. Ito ay isang balangkas para sa systemic na pagbabagong pampulitika.', aboutLaunch: 'Ang website ng Manipesto ng Mundo ay inilunsad noong 2026.', linkNotice: 'Malugod na tinatanggap ang mga link sa site na ito.' },
        'ko': { menu: '메뉴', home: '홈', manifesto: '세계 선언문 읽기', staircase: '자유의 계단 (english)', tropics: '열대 지방', robotel: '로보텔', qr: 'QR', share: '공유', about: '왜?', aboutAuthor: '소개...', aboutAuthorText: '세계 선언문은 스웨덴의 스벤 잉에르스테트가 작성했습니다. 그는 세계 선언문의 발기인이자 완전한 로봇화의 옹호자입니다 – 자율 로봇이 인류를 노동의 멍에에서 해방시키는 미래. 이것은 체계적인 정치적 변화를 위한 프레임워크입니다.', aboutLaunch: '세계 선언문 웹사이트는 2026년에 시작되었습니다.', linkNotice: '이 사이트로의 링크를 환영합니다.' },
        'th': { menu: 'เมนู', home: 'หน้าแรก', manifesto: 'อ่านแถลงการณ์โลก', staircase: 'บันไดเสรีภาพ (english)', tropics: 'เขตร้อน', robotel: 'โรโบเทล', qr: 'QR', share: 'แชร์', about: 'ทำไม?', aboutAuthor: 'เกี่ยวกับ...', aboutAuthorText: 'แถลงการณ์โลกร่างโดย Sven Yngerstedt ประเทศสวีเดน เขาเป็นผู้ริเริ่มแถลงการณ์โลกและผู้สนับสนุนการเปลี่ยนเป็นหุ่นยนต์อย่างสมบูรณ์ – อนาคตที่หุ่นยนต์อิสระปลดปล่อยมนุษยชาติจากแอกของแรงงาน นี่คือกรอบสำหรับการเปลี่ยนแปลงทางการเมืองเชิงระบบ', aboutLaunch: 'เว็บไซต์แถลงการณ์โลกเปิดตัวในปี 2026', linkNotice: 'ยินดีต้อนรับลิงก์ไปยังไซต์นี้' },
        'vi': { menu: 'MENU', home: 'TRANG CHỦ', manifesto: 'Đọc Tuyên ngôn Thế giới', staircase: 'Cầu thang Tự do (english)', tropics: 'Vùng nhiệt đới', robotel: 'Robotel', qr: 'QR', share: 'Chia sẻ', about: 'Tại sao?', aboutAuthor: 'Giới thiệu...', aboutAuthorText: 'Tuyên ngôn Thế giới được soạn thảo bởi Sven Yngerstedt, Thụy Điển. Ông là người khởi xướng Tuyên ngôn Thế giới và là người ủng hộ robot hóa hoàn toàn – một tương lai nơi robot tự trị giải phóng nhân loại khỏi ách lao động. Đây là khuôn khổ cho sự chuyển đổi chính trị mang tính hệ thống.', aboutLaunch: 'Trang web Tuyên ngôn Thế giới được ra mắt vào năm 2026.', linkNotice: 'Các liên kết đến trang web này được hoan nghênh.' },
        'tr': { menu: 'MENÜ', home: 'ANA SAYFA', manifesto: 'Dünya Manifestosu\'nu Oku', staircase: 'Özgürlük Merdiveni (english)', tropics: 'Tropikler', robotel: 'Robotel', qr: 'QR', share: 'Paylaş', about: 'Neden?', aboutAuthor: 'Hakkında...', aboutAuthorText: 'Dünya Manifestosu İsveç\'ten Sven Yngerstedt tarafından kaleme alındı. Kendisi Dünya Manifestosu\'nun başlatıcısı ve tam robotizasyonun savunucusudur – otonom robotların insanlığı emek boyunduruğundan kurtardığı bir gelecek. Bu, sistemik siyasi dönüşüm için bir çerçevedir.', aboutLaunch: 'Dünya Manifestosu web sitesi 2026\'da başlatıldı.', linkNotice: 'Bu siteye verilen bağlantılar memnuniyetle karşılanır.' },
        'fa': { menu: 'منو', home: 'خانه', manifesto: 'مانیفست جهانی را بخوانید', staircase: 'پلکان آزادی (english)', tropics: 'مناطق استوایی', robotel: 'روbotel', qr: 'QR', share: 'اشتراک‌گذاری', about: 'چرا؟', aboutAuthor: 'درباره...', aboutAuthorText: 'مانیفست جهانی توسط اسون ینگرستد، سوئد، تدوین شد. او آغازگر مانیفست جهانی و مدافع رباتیزاسیون کامل است – آینده‌ای که در آن ربات‌های خودمختار بشریت را از یوغ کار آزاد می‌کنند. این چارچوبی برای تحول سیاسی سیستمیک است.', aboutLaunch: 'وب‌سایت مانیفست جهانی در سال 2026 راه‌اندازی شد.', linkNotice: 'پیوندها به این سایت خوش‌آمد هستند.' },
        'sw': { menu: 'MENU', home: 'NYUMBANI', manifesto: 'Soma Ilani ya Dunia', staircase: 'Ngazi ya Uhuru (english)', tropics: 'Maeneo ya Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Shiriki', about: 'Kwa nini?', aboutAuthor: 'Kuhusu...', aboutAuthorText: 'Ilani ya Dunia iliandaliwa na Sven Yngerstedt, Uswidi. Yeye ndiye mwanzilishi wa Ilani ya Dunia na mtetezi wa roboti kamili – mustakabali ambapo roboti zinazojitegemea zinawaachilia wanadamu kutoka kwenye nira ya kazi. Hii ni mfumo wa mabadiliko ya kisiasa ya kimfumo.', aboutLaunch: 'Tovuti ya Ilani ya Dunia ilizinduliwa mwaka 2026.', linkNotice: 'Viungo vya tovuti hii vinakaribishwa.' },
        'it': { menu: 'MENU', home: 'HOME', manifesto: 'Leggi il Manifesto Mondiale', staircase: 'Scala della Libertà (english)', tropics: 'I Tropici', robotel: 'Robotel', qr: 'QR', share: 'Condividi', about: 'Perché?', aboutAuthor: 'Informazioni...', aboutAuthorText: 'Il Manifesto Mondiale è stato redatto da Sven Yngerstedt, Svezia. È l\'iniziatore del Manifesto Mondiale e sostenitore della robotizzazione totale – un futuro in cui i robot autonomi liberano l\'umanità dal giogo del lavoro. Questo è un quadro per la trasformazione politica sistemica.', aboutLaunch: 'Il sito web del Manifesto Mondiale è stato lanciato nel 2026.', linkNotice: 'I link a questo sito sono benvenuti.' },
        'pl': { menu: 'MENU', home: 'STRONA GŁÓWNA', manifesto: 'Przeczytaj Manifest Światowy', staircase: 'Schody Wolności (english)', tropics: 'Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Udostępnij', about: 'Dlaczego?', aboutAuthor: 'O nas...', aboutAuthorText: 'Manifest Światowy został opracowany przez Svena Yngerstedta, Szwecja. Jest inicjatorem Manifestu Światowego i zwolennikiem całkowitej robotyzacji – przyszłości, w której autonomiczne roboty uwalniają ludzkość od jarzma pracy. To ramy dla systemowej transformacji politycznej.', aboutLaunch: 'Strona internetowa Manifestu Światowego została uruchomiona w 2026 roku.', linkNotice: 'Linki do tej strony są mile widziane.' },
        'nl': { menu: 'MENU', home: 'HOME', manifesto: 'Lees het Wereldmanifest', staircase: 'Vrijheidstrap (english)', tropics: 'De Tropen', robotel: 'Robotel', qr: 'QR', share: 'Delen', about: 'Waarom?', aboutAuthor: 'Over...', aboutAuthorText: 'Het Wereldmanifest is opgesteld door Sven Yngerstedt, Zweden. Hij is de initiatiefnemer van het Wereldmanifest en een voorstander van totale robotisering – een toekomst waarin autonome robots de mensheid bevrijden van het juk van de arbeid. Dit is een kader voor systemische politieke transformatie.', aboutLaunch: 'De website van het Wereldmanifest werd gelanceerd in 2026.', linkNotice: 'Links naar deze site zijn welkom.' },
        'ro': { menu: 'MENU', home: 'ACASĂ', manifesto: 'Citiți Manifestul Mondial', staircase: 'Scara Libertății (english)', tropics: 'Tropicele', robotel: 'Robotel', qr: 'QR', share: 'Distribuie', about: 'De ce?', aboutAuthor: 'Despre...', aboutAuthorText: 'Manifestul Mondial a fost elaborat de Sven Yngerstedt, Suedia. El este inițiatorul Manifestului Mondial și un susținător al robotizării totale – un viitor în care roboții autonomi eliberează umanitatea de jugul muncii. Acesta este un cadru pentru transformarea politică sistemică.', aboutLaunch: 'Site-ul web al Manifestului Mondial a fost lansat în 2026.', linkNotice: 'Linkurile către acest site sunt binevenite.' },
        'el': { menu: 'ΜΕΝΟΥ', home: 'ΑΡΙΚΗ', manifesto: 'Διαβάστε το Παγκόσμιο Μανιφέστο', staircase: 'Σκάλα της Ελευθερίας (english)', tropics: 'Οι Τροπικοί', robotel: 'Ρομποτέλ', qr: 'QR', share: 'Μοιραστείτε', about: 'Γιατί;', aboutAuthor: 'Σχετικά...', aboutAuthorText: 'Το Παγκόσμιο Μανιφέστο συντάχθηκε από τον Sven Yngerstedt, Σουηδία. Είναι ο εμπνευστής του Παγκόσμιου Μανιφέστου και υποστηρικτής της πλήρους ρομποτοποίησης – ένα μέλλον όπου τα αυτόνομα ρομπότ απελευθερώνουν την ανθρωπότητα από τον ζυγό της εργασίας. Αυτό είναι ένα πλαίσιο για συστημικό πολιτικό μετασχηματισμό.', aboutLaunch: 'Ο ιστότοπος του Παγκόσμιου Μανιφέστου ξεκίνησε το 2026.', linkNotice: 'Οι σύνδεσμοι προς αυτόν τον ιστότοπο είναι ευπρόσδεκτοι.' },
        'af': { menu: 'MENU', home: 'TUIS', manifesto: 'Lees die Wêreldmanifest', staircase: 'Vryheidstrap (english)', tropics: 'Die Trope', robotel: 'Robotel', qr: 'QR', share: 'Deel', about: 'Waarom?', aboutAuthor: 'Oor...', aboutAuthorText: 'Die Wêreldmanifest is opgestel deur Sven Yngerstedt, Swede. Hy is die inisieerder van die Wêreldmanifest en \'n voorstander van totale robotisering – \'n toekoms waar outonome robotte die mensdom van die juk van arbeid bevry. Dit is \'n raamwerk vir sistemiese politieke transformasie.', aboutLaunch: 'Die Wêreldmanifest se webwerf is in 2026 van stapel gestuur.', linkNotice: 'Skakels na hierdie webwerf is welkom.' },
        'zu': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yomhlaba', staircase: 'Izitebhisi Zenkululeko (english)', tropics: 'Izindawo Ezishisayo', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', about: 'Kungani?', aboutAuthor: 'Mayelana...', aboutAuthorText: 'I-Manifesto Yomhlaba yabhalwa nguSven Yngerstedt, eSweden. Ungumsunguli we-Manifesto Yomhlaba futhi ungumsekeli wokwenziwa kwezinto ngamarobhothi ngokuphelele – ikusasa lapho amarobhothi azimele ekhulula khona isintu ejougini yomsebenzi. Lolu wuhlaka lwenguquko yezepolitiki ehlelekile.', aboutLaunch: 'Iwebhusayithi ye-Manifesto Yomhlaba yethulwa ngo-2026.', linkNotice: 'Izixhumanisi kule sayithi ziyamukeleka.' },
        'xh': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yehlabathi', staircase: 'Izinyuko Zenkululeko (english)', tropics: 'Iindawo Ezishushu', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', about: 'Kutheni?', aboutAuthor: 'Malunga...', aboutAuthorText: 'I-Manifesto Yehlabathi yabhalwa nguSven Yngerstedt, eSweden. Ungumsunguli we-Manifesto Yehlabathi kwaye ungumxhasi wokwenziwa kwezinto ngeerobhothi ngokupheleleyo – ikamva apho iirobhothi ezizimeleyo zikhulula khona uluntu kwidyokhwe yomsebenzi. Esi sisakhelo senguqu yezopolitiko esisixeko.', aboutLaunch: 'Iwebhusayithi ye-Manifesto Yehlabathi yasungulwa ngo-2026.', linkNotice: 'Iziphonelo kule sayithi zamkelekile.' },
        'cs': { menu: 'MENU', home: 'DOMŮ', manifesto: 'Přečtěte si Světový manifest', staircase: 'Schody svobody (english)', tropics: 'Tropy', robotel: 'Robotel', qr: 'QR', share: 'Sdílet', about: 'Proč?', aboutAuthor: 'O nás...', aboutAuthorText: 'Světový manifest byl vypracován Svenem Yngerstedtem, Švédsko. Je iniciátorem Světového manifestu a zastáncem úplné robotizace – budoucnosti, ve které autonomní roboti osvobodí lidstvo od jha práce. Toto je rámec pro systémovou politickou transformaci.', aboutLaunch: 'Webové stránky Světového manifestu byly spuštěny v roce 2026.', linkNotice: 'Odkazy na tento web jsou vítány.' },
        'hu': { menu: 'MENÜ', home: 'KEZDŐLAP', manifesto: 'Olvassa el a Világkiáltványt', staircase: 'A Szabadság Lépcsői (english)', tropics: 'A Trópusok', robotel: 'Robotel', qr: 'QR', share: 'Megosztás', about: 'Miért?', aboutAuthor: 'Névjegy...', aboutAuthorText: 'A Világkiáltványt Sven Yngerstedt, Svédország készítette. Ő a Világkiáltvány kezdeményezője és a teljes robotizáció támogatója – egy jövő, ahol az autonóm robotok megszabadítják az emberiséget a munka igájától. Ez egy keretrendszer a rendszerszintű politikai átalakuláshoz.', aboutLaunch: 'A Világkiáltvány weboldala 2026-ban indult.', linkNotice: 'A webhelyre mutató hivatkozások szívesen fogadottak.' },
        'he': { menu: 'תפריט', home: 'בית', manifesto: 'קראו את מניפסט העולם', staircase: 'מדרגות החירות (english)', tropics: 'האזורים הטרופיים', robotel: 'רובוטל', qr: 'QR', share: 'שתף', about: 'למה?', aboutAuthor: 'אודות...', aboutAuthorText: 'המניפסט העולמי נוסח על ידי סוון ינגרסטדט, שוודיה. הוא היוזם של המניפסט העולמי ותומך ברובוטיזציה מוחלטת – עתיד שבו רובוטים אוטונומיים משחררים את האנושות מעול העבודה. זהו מסגרת לשינוי פוליטי מערכתי.', aboutLaunch: 'אתר המניפסט העולמי הושק בשנת 2026.', linkNotice: 'קישורים לאתר זה יתקבלו בברכה.' },
        'crs': { menu: 'MENU', home: 'LAK', manifesto: 'Lir Manifest lemonn', staircase: 'Leskal Libète (english)', tropics: 'Latropik', robotel: 'Robotel', qr: 'QR', share: 'Partaz', about: 'Akoz?', aboutAuthor: 'Konsernan...', aboutAuthorText: 'Manifès Mondyal ti ganny redakte par Sven Yngerstedt, Sesel. I initiator Manifès Mondyal e i defansè robotizasyon total – enn lavenir kot robo otonom libéré limanite de joug travay. Sa i enn kadr pour transformasyon politik sistemik.', aboutLaunch: 'Sit web Manifès Mondyal ti ganny lanse an 2026.', linkNotice: 'Bann lyen kot sa sit i byenveni.' },
        'no': { menu: 'MENY', home: 'HJEM', manifesto: 'Les Verdensmanifestet', staircase: 'Frihetstrappen (english)', tropics: 'Tropene', robotel: 'Robotel', qr: 'QR', share: 'Del', about: 'Hvorfor?', aboutAuthor: 'Om...', aboutAuthorText: 'Verdensmanifestet ble utarbeidet av Sven Yngerstedt, Sverige. Han er initiativtakeren til Verdensmanifestet og en talsmann for total robotisering – en fremtid der autonome roboter frigjør menneskeheten fra arbeidets åk. Dette er et rammeverk for systemisk politisk transformasjon.', aboutLaunch: 'Verdensmanifestets nettsted ble lansert i 2026.', linkNotice: 'Lenker til dette nettstedet er velkomne.' },
        'se': { menu: 'MENY', home: 'RUVŦOT', manifesto: 'Loga Máilmmi Manifesta', staircase: 'Frihetstrappa (english)', tropics: 'Tropiija', robotel: 'Robotel', qr: 'QR', share: 'Juoge', about: 'Manne?', aboutAuthor: 'Birra...', aboutAuthorText: 'Máilmmi Manifesta ráhkadii Sven Yngerstedt, Ruoŧŧa. Son lea Máilmmi Manifesta álggaheaddji ja olles robotiserema doarjja – boahtteáigi gos iehčanas robotat beastet olmmošvuođa barggu juvllas. Dát lea rámmi systemáhtalaš politihkalaš rievdadussii.', aboutLaunch: 'Máilmmi Manifesta neahttabáiki rahppojuvvui jagi 2026.', linkNotice: 'Liŋkkat dán neahttabáikái leat bures boahtin.' },
        'fit': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lukea Mailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset', robotel: 'Robotel', qr: 'QR', share: 'Jaa', about: 'Miksi?', aboutAuthor: 'Tietoja...', aboutAuthorText: 'Mailmanmanifesti laati Sven Yngerstedt, Ruotsi. Hän on Mailmanmanifestin aloitteentekijä ja täydellisen robotisoinnin kannattaja – tulevaisuus, jossa autonomiset robotit vapauttavat ihmiskunnan työn ikeestä. Tämä on kehys systeemiselle poliittiselle muutokselle.', aboutLaunch: 'Mailmanmanifestin verkkosivusto avattiin vuonna 2026.', linkNotice: 'Linkit tälle sivustolle ovat tervetulleita.' },
        'da': { menu: 'MENU', home: 'HJEM', manifesto: 'Læs Verdensmanifestet', staircase: 'Frihedstrappen (english)', tropics: 'Troperne', robotel: 'Robotel', qr: 'QR', share: 'Del', about: 'Hvorfor?', aboutAuthor: 'Om...', aboutAuthorText: 'Verdensmanifestet blev udarbejdet af Sven Yngerstedt, Sverige. Han er initiativtager til Verdensmanifestet og fortaler for total robotisering – en fremtid, hvor autonome robotter befrier menneskeheden fra arbejdets åg. Dette er en ramme for systemisk politisk forandring.', aboutLaunch: 'Verdensmanifestets hjemmeside blev lanceret i 2026.', linkNotice: 'Links til dette websted er velkomne.' },
        'is': { menu: 'VALMYND', home: 'HEIM', manifesto: 'Lesa Heimsmanifestið', staircase: 'Frelsisstiginn (english)', tropics: 'Hitabeltið', robotel: 'Robotel', qr: 'QR', share: 'Deila', about: 'Af hverju?', aboutAuthor: 'Um...', aboutAuthorText: 'Heimsmanifestið var samið af Sven Yngerstedt, Svíþjóð. Hann er frumkvöðull Heimsmanifest sins og talsmaður algjörrar vélmennavæðingar – framtíð þar sem sjálfstæð vélmenni frelsa mannkynið undan oki vinnunnar. Þetta er rammi fyrir kerfislægum pólitískum umbreytingum.', aboutLaunch: 'Vefsíða Heimsmanifest sins var opnuð árið 2026.', linkNotice: 'Tenglar á þessa vefsíðu eru velkomnir.' },
        'fo': { menu: 'MENY', home: 'HEIM', manifesto: 'Les Heimsskráina', staircase: 'Frælsistrappan (english)', tropics: 'Tropiskir', robotel: 'Robotel', qr: 'QR', share: 'Deil', about: 'Hví?', aboutAuthor: 'Um...', aboutAuthorText: 'Heimsskráin varð samin av Sven Yngerstedt, Svøríki. Hann er stigtakarin av Heimsskráini og talsmaður fyri fullari robotisering – ein framtíð har sjálvstøðug robotar fría mannaættina frá oksinum av arbeiði. Hetta er ein ramma fyri systemiskari politiskari broyting.', aboutLaunch: 'Heimasíðan hjá Heimsskráini varð sett í gongd í 2026.', linkNotice: 'Leinkir til hesa heimasíðuna eru vælkomin.' }
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
        // Stäng "Om..."-rutan om den är öppen
        const modal = document.getElementById('aboutAuthorModal');
        if (modal) {
            modal.classList.remove('visible');
        }
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

        const launchText = document.createElement('p');
        launchText.textContent = t.aboutLaunch;
        launchText.style.marginTop = '12px';
        launchText.style.fontSize = '0.9rem';
        launchText.style.color = '#666';

        const linkText = document.createElement('p');
        linkText.textContent = t.linkNotice;
        linkText.style.marginTop = '12px';
        linkText.style.fontSize = '0.9rem';
        linkText.style.color = '#666';
        linkText.style.fontStyle = 'italic';

        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(text);
        modal.appendChild(launchText);
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
            // Stäng rullgardinsmenyn samtidigt
            if (dropdown) {
                dropdown.classList.remove('active');
            }
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

    // === STÄNG VID SKROLLNING ===        ← NYTT: lägg till här
    window.addEventListener('scroll', function() {
        if (aboutModal && aboutModal.classList.contains('visible')) {
            aboutModal.classList.remove('visible');
        }
    }, { passive: true });

});
