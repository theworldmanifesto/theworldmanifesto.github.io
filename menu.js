// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // 1. Känn av sidans språk från <html lang="...">
    const currentLang = document.documentElement.lang || 'en';

    // 2. Ordbok för alla menytexter på alla 42 språk
    const translations = {
        'en': { home: '🏠HOME', menu: '📋 MENU', more: '🌐 More Languages', freedom: '🪜 Freedom Staircase', tropics: '🌎 The Tropics', robotel: '🤖 Robotel', share: '💬 Share' },
        'zh': { home: '🏠首页', menu: '📋 菜单', more: '🌐 更多语言', freedom: '🪜 自由阶梯', tropics: '🌎 热带地区', robotel: '🤖 机器人', share: '💬 分享' },
        'hi': { home: '🏠होम', menu: '📋 मेनू', more: '🌐 और भाषाएँ', freedom: '🪜 स्वतंत्रता सीढ़ी', tropics: '🌎 उष्णकटिबंधीय', robotel: '🤖 रोबोटेल', share: '💬 साझा करें' },
        'es': { home: '🏠INICIO', menu: '📋 MENÚ', more: '🌐 Más idiomas', freedom: '🪜 Escalera de la Libertad', tropics: '🌎 Los Trópicos', robotel: '🤖 Robotel', share: '💬 Compartir' },
        'fr': { home: '🏠ACCUEIL', menu: '📋 MENU', more: '🌐 Plus de langues', freedom: '🪜 Escalier de la Liberté', tropics: '🌎 Les Tropiques', robotel: '🤖 Robotel', share: '💬 Partager' },
        'ar': { home: '🏠الرئيسية', menu: '📋 القائمة', more: '🌐 المزيد من اللغات', freedom: '🪜 سلم الحرية', tropics: '🌎 المناطق المدارية', robotel: '🤖 روبوتيل', share: '💬 مشاركة' },
        'bn': { home: '🏠হোম', menu: '📋 মেনু', more: '🌐 আরও ভাষা', freedom: '🪜 স্বাধীনতার সিঁড়ি', tropics: '🌎 গ্রীষ্মমণ্ডল', robotel: '🤖 রোবোটেল', share: '💬 শেয়ার করুন' },
        'pt': { home: '🏠INÍCIO', menu: '📋 MENU', more: '🌐 Mais idiomas', freedom: '🪜 Escada da Liberdade', tropics: '🌎 Os Trópicos', robotel: '🤖 Robotel', share: '💬 Compartilhar' },
        'ru': { home: '🏠ГЛАВНАЯ', menu: '📋 МЕНЮ', more: '🌐 Больше языков', freedom: '🪜 Лестница Свободы', tropics: '🌎 Тропики', robotel: '🤖 Роботель', share: '💬 Поделиться' },
        'ur': { home: '🏠ہوم', menu: '📋 مینو', more: '🌐 مزید زبانیں', freedom: '🪜 آزادی کی سیڑھی', tropics: '🌎 اشنکٹبندیی', robotel: '🤖 روبوٹیل', share: '💬 اشتراک کریں' },
        'id': { home: '🏠BERANDA', menu: '📋 MENU', more: '🌐 Bahasa Lain', freedom: '🪜 Tangga Kebebasan', tropics: '🌎 Daerah Tropis', robotel: '🤖 Robotel', share: '💬 Bagikan' },
        'de': { home: '🏠STARTSEITE', menu: '📋 MENÜ', more: '🌐 Weitere Sprachen', freedom: '🪜 Freiheitstreppe', tropics: '🌎 Die Tropen', robotel: '🤖 Robotel', share: '💬 Teilen' },
        'ja': { home: '🏠ホーム', menu: '📋 メニュー', more: '🌐 その他の言語', freedom: '🪜 自由の階段', tropics: '🌎 熱帯地域', robotel: '🤖 ロボテル', share: '💬 シェア' },
        'sw': { home: '🏠NYUMBA', menu: '📋 MENU', more: '🌐 Lugha Zingine', freedom: '🪜 Ngazi ya Uhuru', tropics: '🌎 Tropiki', robotel: '🤖 Robotel', share: '💬 Shiriki' },
        'tl': { home: '🏠HOME', menu: '📋 MENU', more: '🌐 Higit pang Wika', freedom: '🪜 Hagdan ng Kalayaan', tropics: '🌎 Ang Tropiko', robotel: '🤖 Robotel', share: '💬 Ibahagi' },
        'tr': { home: '🏠ANA SAYFA', menu: '📋 MENÜ', more: '🌐 Daha Fazla Dil', freedom: '🪜 Özgürlük Merdiveni', tropics: '🌎 Tropikler', robotel: '🤖 Robotel', share: '💬 Paylaş' },
        'vi': { home: '🏠TRANG CHỦ', menu: '📋 MENU', more: '🌐 Thêm Ngôn Ngữ', freedom: '🪜 Cầu Thang Tự Do', tropics: '🌎 Vùng Nhiệt Đới', robotel: '🤖 Robotel', share: '💬 Chia sẻ' },
        'ko': { home: '🏠홈', menu: '📋 메뉴', more: '🌐 더 많은 언어', freedom: '🪜 자유의 계단', tropics: '🌎 열대 지방', robotel: '🤖 로보텔', share: '💬 공유' },
        'fa': { home: '🏠خانه', menu: '📋 منو', more: '🌐 زبان‌های بیشتر', freedom: '🪜 پله‌های آزادی', tropics: '🌎 مناطق گرمسیری', robotel: '🤖 روبوتل', share: '💬 به اشتراک بگذارید' },
        'it': { home: '🏠HOME', menu: '📋 MENU', more: '🌐 Altre lingue', freedom: '🪜 Scala della Libertà', tropics: '🌎 I Tropici', robotel: '🤖 Robotel', share: '💬 Condividi' },
        'th': { home: '🏠หน้าแรก', menu: '📋 เมนู', more: '🌐 ภาษาอื่น ๆ', freedom: '🪜 บันไดแห่งเสรีภาพ', tropics: '🌎 เขตร้อน', robotel: '🤖 โรโบเทล', share: '💬 แชร์' },
        'pl': { home: '🏠STRONA GŁÓWNA', menu: '📋 MENU', more: '🌐 Więcej języków', freedom: '🪜 Schody Wolności', tropics: '🌎 Tropiki', robotel: '🤖 Robotel', share: '💬 Udostępnij' },
        'uk': { home: '🏠ГОЛОВНА', menu: '📋 МЕНЮ', more: '🌐 Більше мов', freedom: '🪜 Сходи Свободи', tropics: '🌎 Тропіки', robotel: '🤖 Роботель', share: '💬 Поділитися' },
        'nl': { home: '🏠HOME', menu: '📋 MENU', more: '🌐 Meer talen', freedom: '🪜 Vrijheidstrap', tropics: '🌎 De Tropen', robotel: '🤖 Robotel', share: '💬 Delen' },
        'ro': { home: '🏠ACASĂ', menu: '📋 MENU', more: '🌐 Mai multe limbi', freedom: '🪜 Scara Libertății', tropics: '🌎 Tropicele', robotel: '🤖 Robotel', share: '💬 Distribuie' },
        'el': { home: '🏠ΑΡΧΙΚΗ', menu: '📋 ΜΕΝΟΥ', more: '🌐 Περισσότερες γλώσσες', freedom: '🪜 Σκάλα της Ελευθερίας', tropics: '🌎 Τροπικές περιοχές', robotel: '🤖 Ρομποτέλ', share: '💬 Μοιραστείτε' },
        'hu': { home: '🏠FŐOLDAL', menu: '📋 MENÜ', more: '🌐 További nyelvek', freedom: '🪜 Szabadság lépcső', tropics: '🌎 Trópusok', robotel: '🤖 Robotel', share: '💬 Megosztás' },
        'cs': { home: '🏠DOMŮ', menu: '📋 MENU', more: '🌐 Více jazyků', freedom: '🪜 Schody svobody', tropics: '🌎 Tropy', robotel: '🤖 Robotel', share: '💬 Sdílet' },
        'sv': { home: '🏠HEM', menu: '📋 MENY', more: '🌐 Fler språk', freedom: '🪜 Frihetstrappan', tropics: '🌎 Tropikerna', robotel: '🤖 Robotel', share: '💬 Dela' },
        'bg': { home: '🏠НАЧАЛО', menu: '📋 МЕНЮ', more: '🌐 Още езици', freedom: '🪜 Стълба на свободата', tropics: '🌎 Тропици', robotel: '🤖 Роботел', share: '💬 Споделете' },
        'no': { home: '🏠HJEM', menu: '📋 MENY', more: '🌐 Flere språk', freedom: '🪜 Frihetstrappen', tropics: '🌎 Tropene', robotel: '🤖 Robotel', share: '💬 Del' },
        'da': { home: '🏠HJEM', menu: '📋 MENU', more: '🌐 Flere sprog', freedom: '🪜 Frihedstrappen', tropics: '🌎 Troperne', robotel: '🤖 Robotel', share: '💬 Del' },
        'fi': { home: '🏠ETUSIVU', menu: '📋 VALIKKO', more: '🌐 Lisää kieliä', freedom: '🪜 Vapauden portaat', tropics: '🌎 Trooppiset alueet', robotel: '🤖 Robotel', share: '💬 Jaa' },
        'he': { home: '🏠בית', menu: '📋 תפריט', more: '🌐 שפות נוספות', freedom: '🪜 מדרגות החירות', tropics: '🌎 האזורים הטרופיים', robotel: '🤖 רובוטל', share: '💬 שתף' },
        'af': { home: '🏠TUIS', menu: '📋 MENU', more: '🌐 Meer tale', freedom: '🪜 Vryheidstrap', tropics: '🌎 Die Trope', robotel: '🤖 Robotel', share: '💬 Deel' },
        'zu': { home: '🏠IKHAYA', menu: '📋 IMENU', more: '🌐 Izilimi Ezengeziwe', freedom: '🪜 Izitebhisi Zenkululeko', tropics: '🌎 Izindawo Ezishisayo', robotel: '🤖 Robotel', share: '💬 Yabelana' },
        'xh': { home: '🏠IKHAYA', menu: '📋 IMENU', more: '🌐 Iilwimi Ezingeziweyo', freedom: '🪜 Izitebhisi Zenkululeko', tropics: '🌎 Iitropiki', robotel: '🤖 Robotel', share: '💬 Yabelana' },
        'is': { home: '🏠HEIM', menu: '📋 VALMYND', more: '🌐 Fleiri tungumál', freedom: '🪜 Frelsisstigi', tropics: '🌎 Hitabeltið', robotel: '🤖 Robotel', share: '💬 Deila' },
        'fo': { home: '🏠HEIM', menu: '📋 MENU', more: '🌐 Fleiri mál', freedom: '🪜 Frælsistrappa', tropics: '🌎 Hitabeltið', robotel: '🤖 Robotel', share: '💬 Deila' },
        'crs': { home: '🏠LAKAZ', menu: '📋 MENI', more: '🌐 Plis langaz', freedom: '🪜 Eskalye Laliyete', tropics: '🌎 Tropik', robotel: '🤖 Robotel', share: '💬 Partage' },
        'se': { home: '🏠RUOKTU', menu: '📋 MENU', more: '🌐 Eambbi gielat', freedom: '🪜 Friddjavuoni', tropics: '🌎 Tropihkkat', robotel: '🤖 Robotel', share: '💬 Juoiggat' },
        'fit': { home: '🏠KOTI', menu: '📋 MENY', more: '🌐 Enempi kieliä', freedom: '🪜 Vapauden portaat', tropics: '🌎 Trooppiset', robotel: '🤖 Robotel', share: '💬 Jaa' }
    };

    // Välj språket från listan, eller fallback till engelska
    const t = translations[currentLang] || translations['en'];

    // 3. Skapa menyn med dynamiska texter
    const menuHTML = `
        <div class="site-nav">
            <div class="nav-container">
                <div class="dropdown" id="homeDropdown">
                    <a href="/index.html" class="dropbtn" id="homeBtn">${t.home}</a>
                    <div class="dropdown-content">
                        <a href="/lang/en.html">🇬🇧 ENGLISH</a>
                        <a href="/lang/zh.html">🇨🇳 简体中文</a>
                        <a href="/lang/sv.html">🇸🇪 SVENSKA</a>
                        <a href="/lang/lang.html">${t.more}</a>
                        <a href="/freedom-staircase/freedom-staircase.html">${t.freedom}</a>
                        <a href="/tropics/tropics.html">${t.tropics}</a>
                        <a href="/robotel/robotel.html">${t.robotel}</a>
                        <a href="/share/share.html">${t.share}</a>
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
