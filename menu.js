// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // 1. Känn av sidans språk från <html lang="...">
    const currentLang = document.documentElement.lang || 'en';

    // 2. Ordbok för meny-text på alla 42 språk
    const translations = {
        // --- STÖRRE SPRÅK ---
        'en': { home: '🏠HOME' },
        'zh': { home: '🏠首页' },
        'hi': { home: '🏠होम' },
        'es': { home: '🏠INICIO' },
        'fr': { home: '🏠ACCUEIL' },
        'ar': { home: '🏠الرئيسية' },
        'bn': { home: '🏠হোম' },
        'pt': { home: '🏠INÍCIO' },
        'ru': { home: '🏠ГЛАВНАЯ' },
        'ur': { home: '🏠ہوم' },
        'id': { home: '🏠BERANDA' },
        'de': { home: '🏠STARTSEITE' },
        'ja': { home: '🏠ホーム' },
        'sw': { home: '🏠NYUMBA' },
        'tl': { home: '🏠HOME' },
        'tr': { home: '🏠ANA SAYFA' },
        'vi': { home: '🏠TRANG CHỦ' },
        'ko': { home: '🏠홈' },
        'fa': { home: '🏠خانه' },
        'it': { home: '🏠HOME' },
        'th': { home: '🏠หน้าแรก' },
        'pl': { home: '🏠STRONA GŁÓWNA' },
        'uk': { home: '🏠ГОЛОВНА' },
        'nl': { home: '🏠HOME' },
        'ro': { home: '🏠ACASĂ' },
        'el': { home: '🏠ΑΡΧΙΚΗ' },
        'hu': { home: '🏠FŐOLDAL' },
        'cs': { home: '🏠DOMŮ' },
        'sv': { home: '🏠HEM' },
        'bg': { home: '🏠НАЧАЛО' },
        'no': { home: '🏠HJEM' },
        'da': { home: '🏠HJEM' },
        'fi': { home: '🏠ETUSIVU' },
        'he': { home: '🏠בית' },
        'af': { home: '🏠TUIS' },
        
        // --- MINDRE/REGIONALA SPRÅK ---
        'zu': { home: '🏠IKHAYA' },
        'xh': { home: '🏠IKHAYA' },
        'is': { home: '🏠HEIM' },
        'fo': { home: '🏠HEIM' },
        'crs': { home: '🏠LAKAZ' },
        'se': { home: '🏠RUOKTU' },
        'fit': { home: '🏠KOTI' }
    };

    // Välj språket från listan, eller fallback till engelska
    const t = translations[currentLang] || translations['en'];

    // 3. Skapa menyn med dynamisk HOME-text
    const menuHTML = `
        <div class="site-nav">
            <div class="nav-container">
                <div class="dropdown" id="homeDropdown">
                    <a href="/index.html" class="dropbtn" id="homeBtn">${t.home}</a>
                    <div class="dropdown-content">
                        <a href="/lang/en.html">🇬🇧 ENGLISH</a>
                        <a href="/lang/zh.html">🇨🇳 简体中文</a>
                        <a href="/lang/sv.html">🇸🇪 SVENSKA</a>
                        <a href="/lang/lang.html">🌐 More Languages</a>
                        <a href="/freedom-staircase/freedom-staircase.html">🪜 Freedom Staircase</a>
                        <a href="/tropics/tropics.html">🌎 The Tropics</a>
                        <a href="/robotel/robotel.html">🤖 Robotel</a>
                        <a href="/share/share.html">💬 Share</a>
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