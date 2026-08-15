// ============================================================
// MENY – The World Manifesto (med titel i headern)
// ============================================================
(function() {
    'use strict';

    // ------------------------------------------------------------
    // 1. SPRÅKÖVERSÄTTNINGAR FÖR MENY
    // ------------------------------------------------------------
    const menuTranslations = {
        'sv': { menu: '☰ MENY', home: 'Hem', freedom: 'Frihetstrappan', tropics: 'Tropikerna', robotel: 'Robotel', share: 'Dela' },
        'en': { menu: '☰ MENU', home: 'Home', freedom: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' },
        'es': { menu: '☰ MENÚ', home: 'Inicio', freedom: 'Escalera de la Libertad', tropics: 'Los Trópicos', robotel: 'Robotel', share: 'Compartir' },
        'zh': { menu: '☰ 菜单', home: '首页', freedom: '自由阶梯', tropics: '热带地区', robotel: '机器人', share: '分享' },
        'fr': { menu: '☰ MENU', home: 'Accueil', freedom: 'Escalier de la Liberté', tropics: 'Les Tropiques', robotel: 'Robotel', share: 'Partager' },
        'de': { menu: '☰ MENÜ', home: 'Startseite', freedom: 'Freiheitstreppe', tropics: 'Die Tropen', robotel: 'Robotel', share: 'Teilen' },
        'it': { menu: '☰ MENU', home: 'Home', freedom: 'Scala della Libertà', tropics: 'I Tropici', robotel: 'Robotel', share: 'Condividi' },
        'pt': { menu: '☰ MENU', home: 'Início', freedom: 'Escada da Liberdade', tropics: 'Os Trópicos', robotel: 'Robotel', share: 'Compartilhar' },
        'ru': { menu: '☰ МЕНЮ', home: 'Главная', freedom: 'Лестница Свободы', tropics: 'Тропики', robotel: 'Роботель', share: 'Поделиться' },
        'ja': { menu: '☰ メニュー', home: 'ホーム', freedom: '自由の階段', tropics: '熱帯地域', robotel: 'ロボテル', share: 'シェア' },
        'ko': { menu: '☰ 메뉴', home: '홈', freedom: '자유의 계단', tropics: '열대 지역', robotel: '로보텔', share: '공유' },
        'ar': { menu: '☰ القائمة', home: 'الرئيسية', freedom: 'درج الحرية', tropics: 'المناطق الاستوائية', robotel: 'روبوتيل', share: 'مشاركة' },
        'hi': { menu: '☰ मेनू', home: 'होम', freedom: 'स्वतंत्रता की सीढ़ी', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', share: 'साझा करें' },
        'bn': { menu: '☰ মেনু', home: 'হোম', freedom: 'স্বাধীনতার সিঁড়ি', tropics: 'গ্রীষ্মমন্ডলীয়', robotel: 'রোবোটেল', share: 'শেয়ার করুন' },
        'id': { menu: '☰ MENU', home: 'Beranda', freedom: 'Tangga Kebebasan', tropics: 'Daerah Tropis', robotel: 'Robot', share: 'Bagikan' },
        'tl': { menu: '☰ MENU', home: 'Bahay', freedom: 'Hagdan ng Kalayaan', tropics: 'Tropiko', robotel: 'Robot', share: 'Ibahagi' },
        'vi': { menu: '☰ MENU', home: 'Trang chủ', freedom: 'Cầu thang Tự do', tropics: 'Vùng Nhiệt đới', robotel: 'Người máy', share: 'Chia sẻ' },
        'th': { menu: '☰ เมนู', home: 'หน้าแรก', freedom: 'บันไดแห่งอิสรภาพ', tropics: 'เขตร้อน', robotel: 'หุ่นยนต์', share: 'แชร์' },
        'tr': { menu: '☰ MENÜ', home: 'Ana Sayfa', freedom: 'Özgürlük Merdiveni', tropics: 'Tropikler', robotel: 'Robot', share: 'Paylaş' },
        'fa': { menu: '☰ منو', home: 'خانه', freedom: 'پله‌های آزادی', tropics: 'مناطق گرمسیری', robotel: 'ربات', share: 'اشتراک‌گذاری' },
        'he': { menu: '☰ תפריט', home: 'בית', freedom: 'גרם המדרגות של החופש', tropics: 'האזורים הטרופיים', robotel: 'רובוט', share: 'שתף' },
        'sw': { menu: '☰ MENU', home: 'Nyumbani', freedom: 'Ngazi ya Uhuru', tropics: 'Nchi za Tropiki', robotel: 'Roboti', share: 'Shiriki' },
        'zu': { menu: '☰ IMENU', home: 'Ikhaya', freedom: 'Izitebhisi Zenkululeko', tropics: 'Izindawo Ezishisayo', robotel: 'Irobhothi', share: 'Yabelana' },
        'xh': { menu: '☰ IMENU', home: 'Ikhaya', freedom: 'Izitepsi Zenkululeko', tropics: 'Iindawo Ezishushu', robotel: 'Irobhothi', share: 'Yabelana' },
        'nl': { menu: '☰ MENU', home: 'Home', freedom: 'Vrijheidstrap', tropics: 'De Tropen', robotel: 'Robot', share: 'Delen' },
        'pl': { menu: '☰ MENU', home: 'Strona główna', freedom: 'Schody Wolności', tropics: 'Tropiki', robotel: 'Robot', share: 'Udostępnij' },
        'uk': { menu: '☰ МЕНЮ', home: 'Головна', freedom: 'Сходи Свободи', tropics: 'Тропіки', robotel: 'Робот', share: 'Поділитися' },
        'ro': { menu: '☰ MENU', home: 'Acasă', freedom: 'Scara Libertății', tropics: 'Tropice', robotel: 'Robot', share: 'Distribuie' },
        'el': { menu: '☰ ΜΕΝΟΥ', home: 'Αρχική', freedom: 'Σκάλα της Ελευθερίας', tropics: 'Τροπικές Περιοχές', robotel: 'Ρομπότ', share: 'Κοινοποίηση' },
        'cs': { menu: '☰ MENU', home: 'Domů', freedom: 'Schodiště Svobody', tropics: 'Tropy', robotel: 'Robot', share: 'Sdílet' },
        'hu': { menu: '☰ MENÜ', home: 'Főoldal', freedom: 'Szabadság Lépcső', tropics: 'Trópusok', robotel: 'Robot', share: 'Megosztás' },
        'sk': { menu: '☰ MENU', home: 'Domov', freedom: 'Schodisko Slobody', tropics: 'Tropy', robotel: 'Robot', share: 'Zdieľať' },
        'bg': { menu: '☰ МЕНЮ', home: 'Начало', freedom: 'Стълба на Свободата', tropics: 'Тропици', robotel: 'Робот', share: 'Сподели' },
        'hr': { menu: '☰ MENU', home: 'Početna', freedom: 'Stube Slobode', tropics: 'Tropi', robotel: 'Robot', share: 'Podijeli' },
        'no': { menu: '☰ MENY', home: 'Hjem', freedom: 'Frihetstrappen', tropics: 'Tropene', robotel: 'Robot', share: 'Del' },
        'da': { menu: '☰ MENU', home: 'Hjem', freedom: 'Frihedstrappen', tropics: 'Troperne', robotel: 'Robot', share: 'Del' },
        'fi': { menu: '☰ VALIKKO', home: 'Koti', freedom: 'Vapauden Portaat', tropics: 'Trooppiset Alueet', robotel: 'Robotti', share: 'Jaa' },
        'is': { menu: '☰ VALMYND', home: 'Heim', freedom: 'Frelsisstiginn', tropics: 'Hitabeltið', robotel: 'Vélmenni', share: 'Deila' },
        'fo': { menu: '☰ MENU', home: 'Heim', freedom: 'Frelsisstigin', tropics: 'Hitabeltið', robotel: 'Robot', share: 'Deila' },
        'crs': { menu: '☰ MENU', home: 'Lakaz', freedom: 'Leskalye Liberte', tropics: 'Tropik', robotel: 'Robo', share: 'Partaz' },
        'se': { menu: '☰ MENU', home: 'Ruohta', freedom: 'Friddjavuođa Rámpa', tropics: 'Davvisámegiella', robotel: 'Robot', share: 'Juogat' },
        'fit': { menu: '☰ VALIKKO', home: 'Koti', freedom: 'Vapauten Portaat', tropics: 'Tropiikit', robotel: 'Robotti', share: 'Jaa' },
        'default': { menu: '☰ MENY', home: 'Home', freedom: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' }
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

    function createMenu() {
        const currentLang = getCurrentLanguage();
        const t = menuTranslations[currentLang] || menuTranslations['default'];

        const menuHTML = `
            <!-- MENY-KNAPP + TITEL -->
            <nav id="main-nav" style="
                background: linear-gradient(135deg, #2c3e50, #1a252f);
                padding: 8px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 3px solid #f39c12;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                font-family: 'Arimo', 'Arial', sans-serif;
                position: sticky;
                top: 0;
                z-index: 1000;
            ">
                <!-- Vänster: MENY-knapp -->
                <button id="menu-toggle" style="
                    background: none;
                    border: 2px solid #f39c12;
                    color: #f39c12;
                    font-size: 18px;
                    font-weight: bold;
                    padding: 8px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-family: inherit;
                    letter-spacing: 1px;
                " onmouseover="this.style.background='#f39c12'; this.style.color='#1a252f';" 
                   onmouseout="this.style.background='transparent'; this.style.color='#f39c12';">
                    ${t.menu}
                </button>

                <!-- Höger: Titel -->
                <div style="color: #ecf0f1; font-size: 18px; font-weight: bold; letter-spacing: 1px; display: flex; align-items: center; gap: 6px;">
                    <span style="color: #f39c12; font-size: 22px;">✦</span>
                    <span style="font-family: 'Dancing Script', cursive; font-size: 22px;">The World Manifesto</span>
                </div>
            </nav>

            <!-- RULLGARDINSMENY -->
            <div id="dropdown-menu" style="
                display: none;
                background: #2c3e50;
                border-bottom: 3px solid #f39c12;
                box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                padding: 12px 0;
                position: sticky;
                top: 58px;
                z-index: 999;
                font-family: 'Arimo', 'Arial', sans-serif;
            ">
                <div style="max-width: 600px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 24px; padding: 0 20px;">
                    <a href="/" style="color: #ecf0f1; text-decoration: none; padding: 8px 12px; border-radius: 4px; transition: all 0.3s; font-weight: 500; font-size: 15px; border-left: 3px solid transparent;" onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">🏠 ${t.home}</a>
                    <a href="/freedom-staircase/freedom-staircase.html" style="color: #ecf0f1; text-decoration: none; padding: 8px 12px; border-radius: 4px; transition: all 0.3s; font-weight: 500; font-size: 15px; border-left: 3px solid transparent;" onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">🪜 ${t.freedom}</a>
                    <a href="/tropics/tropics.html" style="color: #ecf0f1; text-decoration: none; padding: 8px 12px; border-radius: 4px; transition: all 0.3s; font-weight: 500; font-size: 15px; border-left: 3px solid transparent;" onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">🌴 ${t.tropics}</a>
                    <a href="/robotel/robotel.html" style="color: #ecf0f1; text-decoration: none; padding: 8px 12px; border-radius: 4px; transition: all 0.3s; font-weight: 500; font-size: 15px; border-left: 3px solid transparent;" onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">🤖 ${t.robotel}</a>
                    <a href="/share/share.html" style="color: #ecf0f1; text-decoration: none; padding: 8px 12px; border-radius: 4px; transition: all 0.3s; font-weight: 500; font-size: 15px; border-left: 3px solid transparent;" onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">📤 ${t.share}</a>
                </div>
            </div>
        `;

        const menuContainer = document.getElementById('main-menu');
        if (menuContainer) {
            menuContainer.innerHTML = menuHTML;

            const toggleBtn = document.getElementById('menu-toggle');
            const dropdown = document.getElementById('dropdown-menu');
            if (toggleBtn && dropdown) {
                toggleBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                });
                document.addEventListener('click', function(e) {
                    if (!menuContainer.contains(e.target)) {
                        dropdown.style.display = 'none';
                    }
                });
                dropdown.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        dropdown.style.display = 'none';
                    });
                });
            }
        } else {
            const body = document.body;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = menuHTML;
            body.insertBefore(tempDiv.firstElementChild, body.firstChild);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createMenu);
    } else {
        createMenu();
    }
})();
