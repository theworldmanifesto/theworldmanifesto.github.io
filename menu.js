// ============================================================
// MENY – The World Manifesto (klassisk menyrad)
// ============================================================
(function() {
    'use strict';

    const menuTranslations = {
        'sv': { home: 'Hem', freedom: 'Frihetstrappan', tropics: 'Tropikerna', robotel: 'Robotel', share: 'Dela' },
        'en': { home: 'Home', freedom: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' },
        'default': { home: 'Home', freedom: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', share: 'Share' }
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
            <div id="menu" style="
                background-color: #f8f8f8;
                padding: 12px 20px;
                text-align: center;
                border-bottom: 1px solid #e0e0e0;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 16px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 8px 20px;
            ">
                <a href="/" style="color: #1a1a1a; text-decoration: none; font-weight: bold; transition: color 0.3s;" 
                   onmouseover="this.style.color='#555'" onmouseout="this.style.color='#1a1a1a'">
                    🏠 ${t.home}
                </a>
                <a href="/freedom-staircase/freedom-staircase.html" style="color: #1a1a1a; text-decoration: none; transition: color 0.3s;"
                   onmouseover="this.style.color='#555'" onmouseout="this.style.color='#1a1a1a'">
                    🪜 ${t.freedom}
                </a>
                <a href="/tropics/tropics.html" style="color: #1a1a1a; text-decoration: none; transition: color 0.3s;"
                   onmouseover="this.style.color='#555'" onmouseout="this.style.color='#1a1a1a'">
                    🌴 ${t.tropics}
                </a>
                <a href="/robotel/robotel.html" style="color: #1a1a1a; text-decoration: none; transition: color 0.3s;"
                   onmouseover="this.style.color='#555'" onmouseout="this.style.color='#1a1a1a'">
                    🤖 ${t.robotel}
                </a>
                <a href="/share/share.html" style="color: #1a1a1a; text-decoration: none; transition: color 0.3s;"
                   onmouseover="this.style.color='#555'" onmouseout="this.style.color='#1a1a1a'">
                    📤 ${t.share}
                </a>
            </div>
        `;

        const menuContainer = document.getElementById('main-menu');
        if (menuContainer) {
            menuContainer.innerHTML = menuHTML;
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
