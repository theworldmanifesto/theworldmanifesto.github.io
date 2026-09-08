// ============================================================
// MENU.JS - Global meny för The World Manifesto (42 språk)
// FIXAD: Baskiska eu -> es, galiciska gl -> es, katalanska ca -> es osv.
// Ingen localStorage - varje besök går på webbläsarens språk
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

const RELATED_FALLBACK = {
  "af-za": "af", "af-na": "af",
  "an": "es", "an-es": "es",
  "ar-eg": "ar", "ar-sa": "ar", "ar-dz": "ar", "ar-ma": "ar", "ar-iq": "ar", "ar-sy": "ar", "ar-lb": "ar", "ar-jo": "ar", "ar-ps": "ar", "ar-ye": "ar", "ar-om": "ar", "ar-ae": "ar", "ar-qa": "ar", "ar-bh": "ar", "ar-kw": "ar", "ar-ly": "ar", "ar-tn": "ar", "ar-sd": "ar", "ar-so": "ar", "ary": "ar", "arz": "ar", "apc": "ar", "aeb": "ar", "acm": "ar",
  "ast": "es", "ast-es": "es",
  "az": "tr", "az-az": "tr", "az-ir": "tr",
  "be": "uk", "be-by": "uk",
  "bg-bg": "bg",
  "bn-bd": "bn", "bn-in": "bn", "rkt": "bn",
  "ca": "es", "ca-ad": "es", "ca-es": "es", "ca-fr": "es", "ca-it": "es", "ca-valencia": "es",
  "ceb": "fil",
  "co": "it",
  "crh": "tr",
  "crs": "crs", "crs-sc": "crs",
  "cs-cz": "cs",
  "da-dk": "da", "da-gl": "da",
  "de-at": "de", "de-be": "de", "de-ch": "de", "de-de": "de", "de-li": "de", "bar": "de", "gsw": "de", "ksh": "de", "nds": "de",
  "el-gr": "el", "el-cy": "el", "grc": "el",
  "en-au": "en", "en-bz": "en", "en-ca": "en", "en-gb": "en", "en-gh": "en", "en-gy": "en", "en-hk": "en", "en-ie": "en", "en-in": "en", "en-jm": "en", "en-ke": "en", "en-mt": "en", "en-mw": "en", "en-my": "en", "en-ng": "en", "en-nz": "en", "en-ph": "en", "en-pk": "en", "en-sg": "en", "en-tt": "en", "en-tz": "en", "en-ug": "en", "en-us": "en", "en-za": "en", "ang": "en", "enm": "en", "sco": "en",
  "es-419": "es", "es-ar": "es", "es-bo": "es", "es-bz": "es", "es-cl": "es", "es-co": "es", "es-cr": "es", "es-cu": "es", "es-do": "es", "es-ec": "es", "es-es": "es", "es-gq": "es", "es-gt": "es", "es-hn": "es", "es-mx": "es", "es-ni": "es", "es-pa": "es", "es-pe": "es", "es-ph": "es", "es-pr": "es", "es-py": "es", "es-sv": "es", "es-us": "es", "es-uy": "es", "es-ve": "es", "eu": "es", "eu-es": "es", "eu-fr": "es", "ext": "es", "lad": "es", "gl-es": "es", "oc": "es", "oc-ar": "es", "oc-es": "es",
  "fa-af": "fa", "fa-ir": "fa", "ckb": "fa", "prs": "fa", "tg": "fa", "tg-tj": "fa",
  "fi-fi": "fi",
  "fil-ph": "fil", "tl": "fil", "tl-ph": "fil", "ilo": "fil",
  "fit": "fit", "fit-fi": "fit", "fit-no": "fit", "fit-se": "fit", "fi-se-tornio": "fit", "fi-tornio": "fit", "fkv": "fit", "fkv-fi": "fit", "fkv-no": "fit", "kvk": "fit",
  "fo": "fo", "fo-dk": "fo", "fo-fa": "fo", "fo-fare": "fo", "fo-fo": "fo", "fo-gl": "fo", "fo-no": "fo", "fo-se": "fo", "fao": "fo",
  "fr-be": "fr", "fr-bf": "fr", "fr-ca": "fr", "fr-cd": "fr", "fr-cg": "fr", "fr-ch": "fr", "fr-ci": "fr", "fr-cm": "fr", "fr-fr": "fr", "fr-gn": "fr", "fr-ht": "fr", "fr-lu": "fr", "fr-mc": "fr", "fr-ml": "fr", "fr-ne": "fr", "fr-pf": "fr", "fr-rw": "fr", "fr-sn": "fr", "fr-td": "fr",
  "fy": "nl",
  "gl": "es",
  "gag": "tr",
  "gn": "es", "gn-py": "es", "gug": "es",
  "he-il": "he", "yi": "he",
  "hi-in": "hi", "bho": "hi", "hif": "hi",
  "ht": "crs",
  "hu-hu": "hu",
  "id-id": "id", "ms": "id", "ms-bn": "id", "ms-id": "id", "ms-my": "id", "ms-sg": "id", "ind": "id", "zsm": "id",
  "is-is": "is",
  "it-ch": "it", "it-it": "it", "it-sm": "it", "it-va": "it", "lmo": "it", "scn": "it", "vec": "it",
  "ja-jp": "ja",
  "ko-kp": "ko", "ko-kr": "ko",
  "lmo": "it",
  "mfe": "crs",
  "ms": "id",
  "mwl": "pt",
  "nb": "no", "nb-no": "no", "nn": "no", "nn-no": "no", "no-no": "no", "nob": "no", "nno": "no",
  "nl-be": "nl", "nl-nl": "nl", "zea": "nl",
  "pl-pl": "pl", "szl": "pl",
  "pt-ao": "pt", "pt-br": "pt", "pt-ch": "pt", "pt-cv": "pt", "pt-gw": "pt", "pt-lu": "pt", "pt-mo": "pt", "pt-mz": "pt", "pt-pt": "pt", "pt-st": "pt", "pt-tl": "pt",
  "qu": "es", "qu-bo": "es", "qu-ec": "es", "qu-pe": "es", "quz": "es", "qve": "es", "qwh": "es",
  "ro-md": "ro", "ro-ro": "ro", "mo": "ro", "rup": "ro",
  "ru-by": "ru", "ru-kg": "ru", "ru-kz": "ru", "ru-md": "ru", "ru-ru": "ru", "ru-ua": "ru",
  "scn": "it",
  "se": "se", "se-fi": "se", "se-no": "se", "se-se": "se", "sia": "se", "sjd": "se", "sjd-ru": "se", "sje": "se", "sje-no": "se", "sje-se": "se", "sjk": "se", "sjt": "se", "sju": "se", "sju-no": "se", "sju-se": "se", "sma": "se", "sma-no": "se", "sma-se": "se", "sme": "se", "smi": "se", "smi-fi": "se", "smi-no": "se", "smi-ru": "se", "smi-se": "se", "smj": "se", "smj-no": "se", "smj-se": "se", "smn": "se", "smn-fi": "se", "sms": "se", "sms-fi": "se", "sms-no": "se", "sms-ru": "se",
  "sk": "cs", "sk-sk": "cs",
  "sv-ax": "sv", "sv-fi": "sv", "sv-se": "sv",
  "sw-cd": "sw", "sw-ke": "sw", "sw-tz": "sw", "sw-ug": "sw",
  "th-th": "th",
  "tr-cy": "tr", "tr-tr": "tr",
  "uk-ua": "uk", "rue": "uk",
  "ur-in": "ur", "ur-pk": "ur",
  "vi-vn": "vi",
  "wuu": "zh", "yue": "zh", "yue-hk": "zh",
  "zh-cn": "zh", "zh-hans": "zh", "zh-hant": "zh", "zh-hk": "zh", "zh-mo": "zh", "zh-sg": "zh", "zh-tw": "zh",
  "wa": "fr", "wa-be": "fr", "wln": "fr",
  "li": "nl", "li-be": "nl", "li-nl": "nl", "lim": "nl",
  "lb": "de", "lb-lu": "de",
  "br": "fr", "br-fr": "fr",
  "sc": "it", "sc-it": "it",
  "rm": "it", "rm-ch": "it",
  "zu-za": "zu",
  "xh-za": "xh"
};

const AVAILABLE = ['sv','en','zh','hi','es','fr','ar','id','bn','pt','ru','uk','bg','ur','ja','fil','de','ko','th','vi','tr','fa','sw','it','pl','nl','ro','el','af','zu','xh','cs','hu','he','crs','se','fit','no','fi','da','is','fo'];


function pickBestLanguage(available = AVAILABLE, preferred = []) {
  const prefs = (preferred.length ? preferred : (typeof navigator !== 'undefined' ? (navigator.languages || [navigator.language]) : [])).map(s => String(s).toLowerCase());
  for (const raw of prefs) {
    const tag = raw.toLowerCase().trim();
    if (!tag) continue;
    if (available.includes(tag)) return tag;
    const base = tag.split('-')[0];
    if (available.includes(base)) return base;
    if (RELATED_FALLBACK[tag] && available.includes(RELATED_FALLBACK[tag])) return RELATED_FALLBACK[tag];
    if (RELATED_FALLBACK[base] && available.includes(RELATED_FALLBACK[base])) return RELATED_FALLBACK[base];
    try {
      const max = new Intl.Locale(tag).maximize();
      if (available.includes(max.language)) return max.language;
    } catch(e) {}
  }
  return available.includes('en') ? 'en' : available[0];
}


    // --- HÄMTA SPRÅK FRÅN WEBBLÄSAREN MED FALLBACK ---
    const currentLang = pickBestLanguage();

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

    // --- ORDBOK FÖR ALLA 42 SPRÅK (utan "LÄS" och "Välj språk") ---
    const translations = {
        'sv': { menu: 'MENY', home: 'HEM', manifesto: 'Läs Världsmanifestet', staircase: 'Frihetstrappan (english)', tropics: 'Tropikerna', robotel: 'Robotel', share: 'Dela' },
        'en': { menu: 'MENU', home: 'HOME', manifesto: 'Read The World Manifesto', staircase: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' },
        'fi': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lue Maailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset alueet', robotel: 'Robotel', share: 'Jaa' },
        'zh': { menu: '菜单', home: '首页', manifesto: '阅读世界宣言', staircase: '自由阶梯 (english)', tropics: '热带地区', robotel: '机器人', share: '分享' },
        'hi': { menu: 'मेनू', home: 'होम', manifesto: 'विश्व घोषणापत्र पढ़ें', staircase: 'स्वतंत्रता सीढ़ी (english)', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', share: 'साझा करें' },
        'es': { menu: 'MENÚ', home: 'INICIO', manifesto: 'Leer El Manifiesto Mundial', staircase: 'Escalera de la Libertad (english)', tropics: 'Los Trópicos', robotel: 'Robotel', share: 'Compartir' },
        'fr': { menu: 'MENU', home: 'ACCUEIL', manifesto: 'Lire Le Manifeste Mondial', staircase: 'Escalier de la Liberté (english)', tropics: 'Les Tropiques', robotel: 'Robotel', share: 'Partager' },
        'de': { menu: 'MENÜ', home: 'STARTSEITE', manifesto: 'Das Weltmanifest lesen', staircase: 'Freiheitstreppe (english)', tropics: 'Die Tropen', robotel: 'Robotel', share: 'Teilen' },
        'ar': { menu: 'القائمة', home: 'الرئيسية', manifesto: 'اقرأ البيان العالمي', staircase: 'سلم الحرية (english)', tropics: 'المناطق الاستوائية', robotel: 'روbotel', share: 'مشاركة' },
        'id': { menu: 'MENU', home: 'BERANDA', manifesto: 'Baca Manifest Dunia', staircase: 'Tangga Kebebasan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', share: 'Bagikan' },
        'bn': { menu: 'মেনু', home: 'হোম', manifesto: 'বিশ্ব ইশতেহার পড়ুন', staircase: 'স্বাধীনতার সিঁড়ি (english)', tropics: 'ক্রান্তীয় অঞ্চল', robotel: 'রোবোটেল', share: 'শেয়ার করুন' },
        'pt': { menu: 'MENU', home: 'INÍCIO', manifesto: 'Ler O Manifesto Mundial', staircase: 'Escada da Liberdade (english)', tropics: 'Os Trópicos', robotel: 'Robotel', share: 'Compartilhar' },
        'ru': { menu: 'МЕНЮ', home: 'ГЛАВНАЯ', manifesto: 'Читать Всемирный манифест', staircase: 'Лестница Свободы (english)', tropics: 'Тропики', robotel: 'Роботель', share: 'Поделиться' },
        'uk': { menu: 'МЕНЮ', home: 'ГОЛОВНА', manifesto: 'Читати Всесвітній маніфест', staircase: 'Сходи Свободи (english)', tropics: 'Тропіки', robotel: 'Роботель', share: 'Поділитися' },
        'bg': { menu: 'МЕНЮ', home: 'НАЧАЛО', manifesto: 'Прочетете Световния манифест', staircase: 'Стълбата на свободата (english)', tropics: 'Тропиците', robotel: 'Роботель', share: 'Сподели' },
        'ur': { menu: 'مینو', home: 'ہوم', manifesto: 'عالمی منشور پڑھیں', staircase: 'آزادی کی سیڑھی (english)', tropics: 'اشنکٹبندیی', robotel: 'روبوٹیل', share: 'شیئر کریں' },
        'ja': { menu: 'メニュー', home: 'ホーム', manifesto: '世界宣言を読む', staircase: '自由の階段 (english)', tropics: '熱帯地域', robotel: 'ロボテル', share: '共有' },
        'fil': { menu: 'MENU', home: 'HOME', manifesto: 'Basahin ang Manipesto ng Mundo', staircase: 'Hagdan ng Kalayaan (english)', tropics: 'Ang Tropiko', robotel: 'Robotel', share: 'Ibahagi' },
        'ko': { menu: '메뉴', home: '홈', manifesto: '세계 선언문 읽기', staircase: '자유의 계단 (english)', tropics: '열대 지방', robotel: '로보텔', share: '공유' },
        'th': { menu: 'เมนู', home: 'หน้าแรก', manifesto: 'อ่านแถลงการณ์โลก', staircase: 'บันไดเสรีภาพ (english)', tropics: 'เขตร้อน', robotel: 'โรโบเทล', share: 'แชร์' },
        'vi': { menu: 'MENU', home: 'TRANG CHỦ', manifesto: 'Đọc Tuyên ngôn Thế giới', staircase: 'Cầu thang Tự do (english)', tropics: 'Vùng nhiệt đới', robotel: 'Robotel', share: 'Chia sẻ' },
        'tr': { menu: 'MENÜ', home: 'ANA SAYFA', manifesto: 'Dünya Manifestosu\'nu Oku', staircase: 'Özgürlük Merdiveni (english)', tropics: 'Tropikler', robotel: 'Robotel', share: 'Paylaş' },
        'fa': { menu: 'منو', home: 'خانه', manifesto: 'مانیفست جهانی را بخوانید', staircase: 'پلکان آزادی (english)', tropics: 'مناطق استوایی', robotel: 'روbotel', share: 'اشتراک‌گذاری' },
        'sw': { menu: 'MENU', home: 'NYUMBANI', manifesto: 'Soma Ilani ya Dunia', staircase: 'Ngazi ya Uhuru (english)', tropics: 'Maeneo ya Tropiki', robotel: 'Robotel', share: 'Shiriki' },
        'it': { menu: 'MENU', home: 'HOME', manifesto: 'Leggi il Manifesto Mondiale', staircase: 'Scala della Libertà (english)', tropics: 'I Tropici', robotel: 'Robotel', share: 'Condividi' },
        'pl': { menu: 'MENU', home: 'STRONA GŁÓWNA', manifesto: 'Przeczytaj Manifest Światowy', staircase: 'Schody Wolności (english)', tropics: 'Tropiki', robotel: 'Robotel', share: 'Udostępnij' },
        'nl': { menu: 'MENU', home: 'HOME', manifesto: 'Lees het Wereldmanifest', staircase: 'Vrijheidstrap (english)', tropics: 'De Tropen', robotel: 'Robotel', share: 'Delen' },
        'ro': { menu: 'MENU', home: 'ACASĂ', manifesto: 'Citiți Manifestul Mondial', staircase: 'Scara Libertății (english)', tropics: 'Tropicele', robotel: 'Robotel', share: 'Distribuie' },
        'el': { menu: 'ΜΕΝΟΥ', home: 'ΑΡΙΚΗ', manifesto: 'Διαβάστε το Παγκόσμιο Μανιφέστο', staircase: 'Σκάλα της Ελευθερίας (english)', tropics: 'Οι Τροπικοί', robotel: 'Ρομποτέλ', share: 'Μοιραστείτε' },
        'af': { menu: 'MENU', home: 'TUIS', manifesto: 'Lees die Wêreldmanifest', staircase: 'Vryheidstrap (english)', tropics: 'Die Trope', robotel: 'Robotel', share: 'Deel' },
        'zu': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yomhlaba', staircase: 'Izitebhisi Zenkululeko (english)', tropics: 'Izindawo Ezishisayo', robotel: 'Robotel', share: 'Yabelana' },
        'xh': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yehlabathi', staircase: 'Izinyuko Zenkululeko (english)', tropics: 'Iindawo Ezishushu', robotel: 'Robotel', share: 'Yabelana' },
        'cs': { menu: 'MENU', home: 'DOMŮ', manifesto: 'Přečtěte si Světový manifest', staircase: 'Schody svobody (english)', tropics: 'Tropy', robotel: 'Robotel', share: 'Sdílet' },
        'hu': { menu: 'MENÜ', home: 'KEZDŐLAP', manifesto: 'Olvassa el a Világkiáltványt', staircase: 'A Szabadság Lépcsői (english)', tropics: 'A Trópusok', robotel: 'Robotel', share: 'Megosztás' },
        'he': { menu: 'תפריט', home: 'בית', manifesto: 'קראו את מניפסט העולם', staircase: 'מדרגות החירות (english)', tropics: 'האזורים הטרופיים', robotel: 'רובוטל', share: 'שתף' },
        'crs': { menu: 'MENU', home: 'LAK', manifesto: 'Lir Manifest lemonn', staircase: 'Leskal Libète (english)', tropics: 'Latropik', robotel: 'Robotel', share: 'Partaz' },
        'no': { menu: 'MENY', home: 'HJEM', manifesto: 'Les Verdensmanifestet', staircase: 'Frihetstrappen (english)', tropics: 'Tropene', robotel: 'Robotel', share: 'Del' },
        'se': { menu: 'MENY', home: 'RUVŦOT', manifesto: 'Loga Máilmmi Manifesta', staircase: 'Frihetstrappa (english)', tropics: 'Tropiija', robotel: 'Robotel', share: 'Juoge' },
        'fit': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lukea Mailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset', robotel: 'Robotel', share: 'Jaa' },
        'da': { menu: 'MENU', home: 'HJEM', manifesto: 'Læs Verdensmanifestet', staircase: 'Frihedstrappen (english)', tropics: 'Troperne', robotel: 'Robotel', share: 'Del' },
        'is': { menu: 'VALMYND', home: 'HEIM', manifesto: 'Lesa Heimsmanifestið', staircase: 'Frelsisstiginn (english)', tropics: 'Hitabeltið', robotel: 'Robotel', share: 'Deila' },
        'fo': { menu: 'MENY', home: 'HEIM', manifesto: 'Les Heimsskráina', staircase: 'Frælsistrappan (english)', tropics: 'Tropiskir', robotel: 'Robotel', share: 'Deil' }
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
                        <a href="${base}robotel/robotel.html?lang=${currentLang}"><img src="${base}menu_icons/robotel.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.robotel}</a>
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
});
