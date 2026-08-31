// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK från <html lang="..."> ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ORDBOK FÖR ALLA SPRÅK (menytexter) ---
    const translations = {
        // --- SVENSKA ---
        'sv': { 
            menu: 'MENY',
            home: 'HEM',
            theWorldManifesto: 'Världsmanifestet',
            freedomStaircase: 'Frihetstrappan',
            tropics: 'Tropikerna',
            robotel: 'Robotel',
            share: 'Dela'
        },
        // --- ENGELSKA ---
        'en': { 
            menu: 'MENU',
            home: 'HOME',
            theWorldManifesto: 'The World Manifesto',
            freedomStaircase: 'Freedom Staircase',
            tropics: 'The Tropics',
            robotel: 'Robotel',
            share: 'Share'
        },
        // --- KINESISKA ---
        'zh': { 
            menu: '菜单',
            home: '首页',
            theWorldManifesto: '世界宣言',
            freedomStaircase: '自由阶梯',
            tropics: '热带地区',
            robotel: '机器人',
            share: '分享'
        },
        // --- SPANSKA ---
        'es': { 
            menu: 'MENÚ',
            home: 'Inicio',
            theWorldManifesto: 'El Manifiesto Mundial',
            freedomStaircase: 'Escalera de la Libertad',
            tropics: 'Los Trópicos',
            robotel: 'Robotel',
            share: 'Compartir'
        },
        // --- FRANSKA ---
        'fr': { 
            menu: 'MENU',
            home: 'Accueil',
            theWorldManifesto: 'Le Manifeste Mondial',
            freedomStaircase: 'Escalier de la Liberté',
            tropics: 'Les Tropiques',
            robotel: 'Robotel',
            share: 'Partager'
        },
        // --- TYSKA ---
        'de': { 
            menu: 'MENÜ',
            home: 'Startseite',
            theWorldManifesto: 'Weltmanifest',
            freedomStaircase: 'Freiheitstreppe',
            tropics: 'Die Tropen',
            robotel: 'Robotel',
            share: 'Teilen'
        },
        // --- LÄGG TILL FLER SPRÅK HÄR ---
        // ... alla 42 språk
    };

    // Välj rätt språk eller fallback till engelska
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
        // MENY-KNAPPEN: använder t.menu (inte t.home!)
        const menuIcon = `<img src="${base}menu_icons/menu.png" alt="Menu" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;">`;
        const btnText = menuIcon + t.menu;

        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <button class="dropbtn" id="menuBtn">${btnText}</button>
                    <div class="dropdown-content">
                        <a href="${base}index.html">
                            <img src="${base}menu_icons/home.png" alt="Home" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> ${t.home}
                        </a>
                        <a href="${base}lang/lang.html?lang=${currentLang}">
                            <img src="${base}menu_icons/languages.svg" alt="Languages" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.theWorldManifesto}
                        </a>
                        <a href="${base}freedom-staircase/freedom-staircase.html?lang=${currentLang}">
                            <img src="${base}menu_icons/freedom.png" alt="Freedom" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> ${t.freedomStaircase}
                        </a>
                        <a href="${base}tropics/tropics.html?lang=${currentLang}">
                            <img src="${base}menu_icons/tropics.png" alt="Tropics" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> ${t.tropics}
                        </a>
                        <a href="${base}robotel/robotel.html?lang=${currentLang}">
                            <img src="${base}menu_icons/robotel.png" alt="Robotel" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> ${t.robotel}
                        </a>
                        <a href="${base}share/share.html?lang=${currentLang}">
                            <img src="${base}menu_icons/share.svg" alt="Share" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.share}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Sätt in menyn
    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = buildMenu();
    }

    // --- Uppdatera knapptext vid fönsterändring ---
    function updateButtonText() {
        const btn = document.getElementById('menuBtn');
        if (btn) {
            const menuIcon = `<img src="${base}menu_icons/menu.png" alt="Menu" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;">`;
            btn.innerHTML = menuIcon + t.menu;
        }
    }

    window.addEventListener('resize', updateButtonText);

    // --- MOBIL/DESKTOP: KLICK ÖPPNAR/STÄNGER MENYN ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('menuBtn');

    if (btn && dropdown) {
        // Klona för att undvika dubbla eventlisteners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        const newDropdown = dropdown.cloneNode(true);
        dropdown.parentNode.replaceChild(newDropdown, dropdown);

        const freshBtn = document.getElementById('menuBtn');
        const freshDropdown = document.getElementById('homeDropdown');

        if (freshBtn && freshDropdown) {
            freshBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                freshDropdown.classList.toggle('active');
            });

            document.addEventListener('click', function(e) {
                if (!freshDropdown.contains(e.target)) {
                    freshDropdown.classList.remove('active');
                }
            });
        }
    }
});
