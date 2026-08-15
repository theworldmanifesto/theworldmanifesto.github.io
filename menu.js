// ============================================================
// MENY – The World Manifesto (förbättrad med dropdown)
// ============================================================
// Denna fil skapar en enhetlig meny för hela webbplatsen.
// Den laddas in i alla HTML-sidor via <script src="menu.js"></script>
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
        // ... (lägg till fler språk vid behov)
        'default': { menu: '☰ MENY', home: 'Home', freedom: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' }
    };

    // ------------------------------------------------------------
    // 2. HÄMTA AKTUELLT SPRÅK
    // ------------------------------------------------------------
    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && menuTranslations[langParam]) return langParam;

        const browserLang = navigator.language || navigator.languages?.[0] || 'en';
        const langCode = browserLang.split('-')[0].toLowerCase();
        if (menuTranslations[langCode]) return langCode;

        return 'en';
    }

    // ------------------------------------------------------------
    // 3. SKAPA MENYN MED RULLGARDIN
    // ------------------------------------------------------------
    function createMenu() {
        const currentLang = getCurrentLanguage();
        const t = menuTranslations[currentLang] || menuTranslations['default'];

        // Bygg HTML för menyn
        const menuHTML = `
            <nav id="main-nav" style="
                background: linear-gradient(135deg, #2c3e50, #1a252f);
                padding: 8px 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                border-bottom: 3px solid #f39c12;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                font-family: 'Arimo', 'Arial', sans-serif;
                position: sticky;
                top: 0;
                z-index: 1000;
            ">
                <!-- Vänster: LOGO / HAMBURGER -->
                <div style="display: flex; align-items: center; gap: 10px;">
                    <button id="menu-toggle" style="
                        background: none;
                        border: 2px solid #f39c12;
                        color: #f39c12;
                        font-size: 18px;
                        font-weight: bold;
                        padding: 8px 16px;
                        border-radius: 6px;
                        cursor: pointer;
                        transition: background 0.3s, color 0.3s;
                        font-family: inherit;
                        letter-spacing: 1px;
                    " onmouseover="this.style.background='#f39c12'; this.style.color='#1a252f';" 
                       onmouseout="this.style.background='transparent'; this.style.color='#f39c12';">
                        ${t.menu}
                    </button>
                </div>

                <!-- Höger: LOGGA / TITEL (valfritt) -->
                <div style="color: #ecf0f1; font-size: 16px; font-weight: bold; letter-spacing: 1px; display: flex; align-items: center; gap: 6px;">
                    <span style="color: #f39c12; font-size: 20px;">✦</span>
                    <span style="font-family: 'Dancing Script', cursive; font-size: 20px;">The World Manifesto</span>
                </div>
            </nav>

            <!-- Rullgardinsmeny -->
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
                <div style="max-width: 800px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 24px; padding: 0 20px;">
                    <a href="/" style="
                        color: #ecf0f1;
                        text-decoration: none;
                        padding: 8px 12px;
                        border-radius: 4px;
                        transition: background 0.3s, color 0.3s;
                        font-weight: 500;
                        font-size: 15px;
                        border-left: 3px solid transparent;
                    " onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" 
                       onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">
                        🏠 ${t.home}
                    </a>
                    <a href="/freedom-staircase/freedom-staircase.html" style="
                        color: #ecf0f1;
                        text-decoration: none;
                        padding: 8px 12px;
                        border-radius: 4px;
                        transition: background 0.3s, color 0.3s;
                        font-weight: 500;
                        font-size: 15px;
                        border-left: 3px solid transparent;
                    " onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" 
                       onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">
                        🪜 ${t.freedom}
                    </a>
                    <a href="/tropics/tropics.html" style="
                        color: #ecf0f1;
                        text-decoration: none;
                        padding: 8px 12px;
                        border-radius: 4px;
                        transition: background 0.3s, color 0.3s;
                        font-weight: 500;
                        font-size: 15px;
                        border-left: 3px solid transparent;
                    " onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" 
                       onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">
                        🌴 ${t.tropics}
                    </a>
                    <a href="/robotel/robotel.html" style="
                        color: #ecf0f1;
                        text-decoration: none;
                        padding: 8px 12px;
                        border-radius: 4px;
                        transition: background 0.3s, color 0.3s;
                        font-weight: 500;
                        font-size: 15px;
                        border-left: 3px solid transparent;
                    " onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" 
                       onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">
                        🤖 ${t.robotel}
                    </a>
                    <a href="/share/share.html" style="
                        color: #ecf0f1;
                        text-decoration: none;
                        padding: 8px 12px;
                        border-radius: 4px;
                        transition: background 0.3s, color 0.3s;
                        font-weight: 500;
                        font-size: 15px;
                        border-left: 3px solid transparent;
                    " onmouseover="this.style.background='#34495e'; this.style.borderLeftColor='#f39c12';" 
                       onmouseout="this.style.background='transparent'; this.style.borderLeftColor='transparent';">
                        📤 ${t.share}
                    </a>
                </div>
            </div>
        `;

        // Sätt in menyn i #main-menu
        const menuContainer = document.getElementById('main-menu');
        if (menuContainer) {
            menuContainer.innerHTML = menuHTML;

            // Toggle-funktion för rullgardin
            const toggleBtn = document.getElementById('menu-toggle');
            const dropdown = document.getElementById('dropdown-menu');
            if (toggleBtn && dropdown) {
                toggleBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (dropdown.style.display === 'block') {
                        dropdown.style.display = 'none';
                    } else {
                        dropdown.style.display = 'block';
                    }
                });

                // Stäng dropdown om man klickar utanför
                document.addEventListener('click', function(e) {
                    if (!menuContainer.contains(e.target)) {
                        dropdown.style.display = 'none';
                    }
                });

                // Stäng dropdown om man klickar på en länk
                dropdown.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        dropdown.style.display = 'none';
                    });
                });
            }
        } else {
            // Fallback: sätt in i början av body
            const body = document.body;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = menuHTML;
            body.insertBefore(tempDiv.firstElementChild, body.firstChild);

            // Toggle-funktion även för fallback
            const toggleBtn = document.getElementById('menu-toggle');
            const dropdown = document.getElementById('dropdown-menu');
            if (toggleBtn && dropdown) {
                toggleBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (dropdown.style.display === 'block') {
                        dropdown.style.display = 'none';
                    } else {
                        dropdown.style.display = 'block';
                    }
                });
                document.addEventListener('click', function(e) {
                    const nav = document.getElementById('main-nav');
                    if (nav && !nav.contains(e.target)) {
                        dropdown.style.display = 'none';
                    }
                });
                dropdown.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        dropdown.style.display = 'none';
                    });
                });
            }
        }
    }

    // ------------------------------------------------------------
    // 4. KÖR NÄR DOM ÄR REDO
    // ------------------------------------------------------------
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createMenu);
    } else {
        createMenu();
    }
})();
