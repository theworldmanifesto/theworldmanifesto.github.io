// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // 1. Känn av sidans språk från <html lang="...">
    const currentLang = document.documentElement.lang || 'en';

    // 2. Ordbok för ALLA menytexter på alla 42 språk
    const translations = {
        // --- STÖRRE SPRÅK ---
        'en': { 
            home: '🏠HOME', 
            menu: '📋 MENU',
            moreLanguages: '🌐 More Languages',
            freedomStaircase: '🪜 Freedom Staircase',
            tropics: '🌎 The Tropics',
            robotel: '🤖 Robotel',
            share: '💬 Share',
            // Språklänkar
            lang_en: '🇬🇧 ENGLISH',
            lang_zh: '🇨🇳 简体中文',
            lang_sv: '🇸🇪 SVENSKA'
        },
        'sv': { 
            home: '🏠HEM', 
            menu: '📋 MENY',
            moreLanguages: '🌐 Fler språk',
            freedomStaircase: '🪜 Frihetstrappan',
            tropics: '🌎 Tropikerna',
            robotel: '🤖 Robotel',
            share: '💬 Dela',
            lang_en: '🇬🇧 ENGELSKA',
            lang_zh: '🇨🇳 简体中文',
            lang_sv: '🇸🇪 SVENSKA'
        },
        'zh': { 
            home: '🏠首页', 
            menu: '📋 菜单',
            moreLanguages: '🌐 更多语言',
            freedomStaircase: '🪜 自由阶梯',
            tropics: '🌎 热带地区',
            robotel: '🤖 机器人',
            share: '💬 分享',
            lang_en: '🇬🇧 英语',
            lang_zh: '🇨🇳 简体中文',
            lang_sv: '🇸🇪 瑞典语'
        },
        // ... FORTSÄTT MED ALLA 42 SPRÅK
        // (Här lägger du in översättningar för alla språk)
    };

    // Fallback till engelska
    const t = translations[currentLang] || translations['en'];

    // --- SKAPA MENYN MED DYNAMISKA TEXTER ---
    const menuHTML = `
        <div class="site-nav">
            <div class="nav-container">
                <div class="dropdown" id="homeDropdown">
                    <a href="/index.html" class="dropbtn" id="homeBtn">${t.home}</a>
                    <div class="dropdown-content">
                        <a href="/lang/en.html">${t.lang_en}</a>
                        <a href="/lang/zh.html">${t.lang_zh}</a>
                        <a href="/lang/sv.html">${t.lang_sv}</a>
                        <a href="/lang/lang.html">${t.moreLanguages}</a>
                        <a href="/freedom-staircase/freedom-staircase.html">${t.freedomStaircase}</a>
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
