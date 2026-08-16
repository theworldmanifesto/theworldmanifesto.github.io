// ============================================================
// MENU.JS - Global meny för The World Manifesto
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

    // --- SKAPA MENYN (med dynamisk knapptext) ---
    function buildMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <a href="${base}index.html" class="dropbtn" id="homeBtn">${btnText}</a>
                    <div class="dropdown-content">
                        <a href="${base}index.html">🏠 HOME</a>
                        <a href="${base}lang/en.html">🇬🇧 ENGLISH</a>
                        <a href="${base}lang/zh.html">🇨🇳 简体中文</a>
                        <a href="${base}lang/sv.html">🇸🇪 SVENSKA</a>
                        <a href="${base}lang/lang.html">🌐 More Languages</a>
                        <a href="${base}freedom-staircase/freedom-staircase.html">🪜 Freedom Staircase</a>
                        <a href="${base}tropics/tropics.html">🌎 The Tropics</a>
                        <a href="${base}robotel/robotel.html">👄 Robotel</a>
                        <a href="${base}share/share.html">💬 Share</a>
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

    // --- MOBIL: KLICK VÄXLAR MENYN (ÖPPNA/STÄNG) ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('homeBtn');

    function setupMenuEvents() {
        if (!btn || !dropdown) return;

        // Ta bort gamla eventlisteners för att undvika dubletter
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        const newDropdown = dropdown.cloneNode(true);
        dropdown.parentNode.replaceChild(newDropdown, dropdown);

        const freshBtn = document.getElementById('homeBtn');
        const freshDropdown = document.getElementById('homeDropdown');

        if (freshBtn && freshDropdown) {
            freshBtn.addEventListener('click', function(e) {
                if (isMobile()) {
                    e.preventDefault(); // Förhindra navigation
                    const isOpen = freshDropdown.classList.contains('active');
                    if (isOpen) {
                        freshDropdown.classList.remove('active');
                    } else {
                        freshDropdown.classList.add('active');
                    }
                }
                // På desktop gör vi inget – länken fungerar normalt
            });

            // Klick utanför stänger menyn
            document.addEventListener('click', function(e) {
                if (!freshDropdown.contains(e.target)) {
                    freshDropdown.classList.remove('active');
                }
            });
        }
    }

    // --- Uppdatera knapptext vid fönsterändring (resize) ---
    function updateButtonText() {
        const btn = document.getElementById('homeBtn');
        if (btn) {
            btn.textContent = getButtonText();
        }
    }

    // Lyssna på fönsterändringar
    window.addEventListener('resize', function() {
        updateButtonText();
        // Uppdatera även menyns beteende om den har förstörts
        setupMenuEvents();
    });

    // Initiera events
    setupMenuEvents();
});
