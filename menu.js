// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HÄMTA SIDANS SPRÅK från <html lang="..."> ---
    const currentLang = document.documentElement.lang || 'en';

    // --- ORDBOK FÖR ALLA SPRÅK (menytexter) ---
    const translations = {
        // Större språk
        'en': { 
            menu: 'MENU',        // ← MENY-KNAPPEN
            home: 'HOME',        // ← FÖRSTA POSTEN I MENYN
            read: 'READ', 
            choose: '-- Choose language --' 
        },
        'sv': { 
            menu: 'MENY',        // ← MENY-KNAPPEN
            home: 'HEM',         // ← FÖRSTA POSTEN I MENYN
            read: 'LÄS', 
            choose: '-- Välj språk --' 
        },
        'zh': { 
            menu: '菜单', 
            home: '首页', 
            read: '阅读', 
            choose: '-- 选择语言 --' 
        }
        // ... alla andra språk här ...
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
                        <a href="${base}lang/lang.html">
                            <img src="${base}menu_icons/languages.svg" alt="Languages" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> The World Manifesto
                        </a>
                        <a href="${base}freedom-staircase/freedom-staircase.html">
                            <img src="${base}menu_icons/freedom.png" alt="Freedom" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> Freedom Staircase
                        </a>
                        <a href="${base}tropics/tropics.html">
                            <img src="${base}menu_icons/tropics.png" alt="Tropics" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> The Tropics
                        </a>
                        <a href="${base}robotel/robotel.html">
                            <img src="${base}menu_icons/robotel.png" alt="Robotel" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px;"> Robotel
                        </a>
                        <a href="${base}share/share.html">
                            <img src="${base}menu_icons/share.svg" alt="Share" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> Share
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
            btn.innerHTML = menuIcon + t.menu;   // ← använder t.menu!
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
