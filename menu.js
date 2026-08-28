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
            moreLanguages: 'More Languages',
            freedomStaircase: 'Freedom Staircase',
            tropics: 'The Tropics',
            robotel: 'Robotel',
            share: 'Share'
        },
        'sv': {
            menuLabel: 'MENY',
            home: 'Hem',
            moreLanguages: 'Fler språk',
            freedomStaircase: 'Frihetstrappan',
            tropics: 'Tropikerna',
            robotel: 'Robotel',
            share: 'Dela'
        },
        'zh': {
            menuLabel: '菜单',
            home: '首页',
            moreLanguages: '更多语言',
            freedomStaircase: '自由阶梯',
            tropics: '热带地区',
            robotel: '机器人',
            share: '分享'
        },
        'es': {
            menuLabel: 'MENÚ',
            home: 'Inicio',
            moreLanguages: 'Más idiomas',
            freedomStaircase: 'Escalera de la Libertad',
            tropics: 'Los Trópicos',
            robotel: 'Robotel',
            share: 'Compartir'
        },
        'fr': {
            menuLabel: 'MENU',
            home: 'Accueil',
            moreLanguages: 'Plus de langues',
            freedomStaircase: 'Escalier de la Liberté',
            tropics: 'Les Tropiques',
            robotel: 'Robotel',
            share: 'Partager'
        },
        'de': {
            menuLabel: 'MENÜ',
            home: 'Startseite',
            moreLanguages: 'Weitere Sprachen',
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

    // --- SKAPA MENYN (med knapp istället för länk) ---
    function buildMenu() {
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <button class="dropbtn" id="menuBtn">${t.menuLabel}</button>
                    <div class="dropdown-content">
                        <a href="${base}index.html">🏠 ${t.home}</a>
                        <a href="${base}lang/lang.html">🌐 ${t.moreLanguages}</a>
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
        // Klick på knappen växlar menyn
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle active-klass
            dropdown.classList.toggle('active');

            // För desktop: även hantera display via CSS
            const content = dropdown.querySelector('.dropdown-content');
            if (content) {
                if (dropdown.classList.contains('active')) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            }
        });

        // Stäng menyn om man klickar utanför
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                const content = dropdown.querySelector('.dropdown-content');
                if (content) {
                    content.style.display = 'none';
                }
            }
        });

        // Vid hover på desktop ska menyn visas (om man inte använder active)
        // Vi använder active för att styra både hover och klick.
        // Så vi lägger till en hover-regel i CSS istället.
        // I CSS: .dropdown:hover .dropdown-content { display: block; }
        // Men vi vill att klick ska fungera också.
        // Så vi låter CSS:en sköta hover, och JS sköter klick via active-klassen.
    }

    // --- Uppdatera om fönstret ändras (ingen extra funktion behövs) ---
});
