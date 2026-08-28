// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK från <html lang="..."> ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ORDBOK FÖR ALLA MENY-OBJEKT (översättningar) ---
    const translations = {
        // Större språk
        'en': {
            menuLabel: 'MENU',
            home: 'Home',
            theWorldManifesto: 'The World Manifesto',   // ← NYTT NAMN
            freedomStaircase: 'Freedom Staircase',
            tropics: 'The Tropics',
            robotel: 'Robotel',
            share: 'Share'
        },
        'sv': {
            menuLabel: 'MENY',
            home: 'Hem',
            theWorldManifesto: 'The World Manifesto',   // ← SAMMA PÅ SVENSKA
            freedomStaircase: 'Frihetstrappan',
            tropics: 'Tropikerna',
            robotel: 'Robotel',
            share: 'Dela'
        },
        'zh': {
            menuLabel: '菜单',
            home: '首页',
            theWorldManifesto: 'The World Manifesto',
            freedomStaircase: '自由阶梯',
            tropics: '热带地区',
            robotel: '机器人',
            share: '分享'
        },
        'es': {
            menuLabel: 'MENÚ',
            home: 'Inicio',
            theWorldManifesto: 'The World Manifesto',
            freedomStaircase: 'Escalera de la Libertad',
            tropics: 'Los Trópicos',
            robotel: 'Robotel',
            share: 'Compartir'
        },
        'fr': {
            menuLabel: 'MENU',
            home: 'Accueil',
            theWorldManifesto: 'The World Manifesto',
            freedomStaircase: 'Escalier de la Liberté',
            tropics: 'Les Tropiques',
            robotel: 'Robotel',
            share: 'Partager'
        },
        'de': {
            menuLabel: 'MENÜ',
            home: 'Startseite',
            theWorldManifesto: 'The World Manifesto',
            freedomStaircase: 'Freiheitstreppe',
            tropics: 'Die Tropen',
            robotel: 'Robotel',
            share: 'Teilen'
        }
        // Lägg till fler språk här efter behov
    };

    // Fallback till engelska om språket saknas
    const t = translations[currentLang] || translations['en'];

    // --- RÄKNA UT HUR MÅNGA NIVÅER UPP VI BEFINNER OSS ---
    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }

    const base = getBasePath();

    // --- Hjälpfunktion för att avgöra om vi är på mobil ---
    function isMobile() {
        return window.innerWidth <= 600;
    }

    // --- SKAPA MENYN ---
    function buildMenu() {
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <button class="dropbtn" id="menuBtn">${t.menuLabel}</button>
                    <div class="dropdown-content">
                        <a href="${base}index.html">🏠 ${t.home}</a>
                        <a href="${base}lang/lang.html">📜 ${t.theWorldManifesto}</a>
                        <a href="${base}freedom-staircase/freedom-staircase.html">🪜 ${t.freedomStaircase}</a>
                        <a href="${base}tropics/tropics.html">🌎 ${t.tropics}</a>
                        <a href="${base}robotel/robotel.html">🤖 ${t.robotel}</a>
                        <a href="${base}share/share.html">💬 ${t.share}</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Sätt in menyn i #main-menu
    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = buildMenu();
    }

    // --- MOBIL/DESKTOP: KLICK ÖPPNAR/STÄNGER MENYN ---
    const dropdown = document.getElementById('homeDropdown');
    const menuBtn = document.getElementById('menuBtn');

    if (menuBtn && dropdown) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
            const content = dropdown.querySelector('.dropdown-content');
            if (content) {
                content.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
            }
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                const content = dropdown.querySelector('.dropdown-content');
                if (content) {
                    content.style.display = 'none';
                }
            }
        });
    }
});
