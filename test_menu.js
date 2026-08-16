// ============================================================
// MENU.JS - Global meny för The World Manifesto (med PNG-ikoner)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
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

    // --- Bygg knapptext beroende på skärmbredd ---
    function getButtonText() {
        return isMobile() ? '☰ MENU' : '🌐 HOME';
    }

    // --- Hjälpfunktion för att skapa en menyrad med PNG-ikon ---
    function menuItem(iconFile, label, url) {
        return `
            <a href="${base}${url}">
                <img src="${base}menu_icons/${iconFile}" width="24" height="24" alt="${label}" style="vertical-align: middle; margin-right: 8px; border-radius: 4px;">
                ${label}
            </a>
        `;
    }

    // --- SKAPA MENYN MED PNG-IKONER ---
    function buildMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <a href="${base}index.html" class="dropbtn" id="homeBtn">${btnText}</a>
                    <div class="dropdown-content">
                        ${menuItem('home.png', 'HOME', 'index.html')}
                        ${menuItem('lang.png', 'ENGLISH', 'lang/en.html')}
                        ${menuItem('lang.png', '简体中文', 'lang/zh.html')}
                        ${menuItem('lang.png', 'SVENSKA', 'lang/sv.html')}
                        ${menuItem('lang.png', 'More Languages', 'lang/lang.html')}
                        ${menuItem('freedom_staircase.png', 'Freedom Staircase', 'freedom-staircase/freedom-staircase.html')}
                        ${menuItem('tropics.png', 'The Tropics', 'tropics/tropics.html')}
                        ${menuItem('robotel.png', 'Robotel', 'robotel/robotel.html')}
                        ${menuItem('share.png', 'Share', 'share/share.html')}
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
        const btn = document.getElementById('homeBtn');
        if (btn) {
            btn.textContent = getButtonText();
        }
    }

    window.addEventListener('resize', updateButtonText);

    // --- MOBIL: KLICK VÄXLAR MENYN ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('homeBtn');

    if (btn && dropdown) {
        // Ta bort gamla eventlisteners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        const newDropdown = dropdown.cloneNode(true);
        dropdown.parentNode.replaceChild(newDropdown, dropdown);

        const freshBtn = document.getElementById('homeBtn');
        const freshDropdown = document.getElementById('homeDropdown');

        if (freshBtn && freshDropdown) {
            freshBtn.addEventListener('click', function(e) {
                if (isMobile()) {
                    e.preventDefault();
                    freshDropdown.classList.toggle('active');
                }
            });

            document.addEventListener('click', function(e) {
                if (!freshDropdown.contains(e.target)) {
                    freshDropdown.classList.remove('active');
                }
            });
        }
    }
});
