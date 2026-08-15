// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // --- RÄKNA UT HUR MÅNGA NIVÅER UPP VI BEFINNER OSS ---
    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        // Räkna antal mappar (exklusive filnamnet)
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }

    const base = getBasePath();

    // --- SKAPA MENYN ---
    const menuHTML = `
        <div class="site-nav">
            <div class="nav-container">
                <div class="dropdown" id="homeDropdown">
                    <a href="${base}index.html" class="dropbtn" id="homeBtn">🌐 HOME</a>
                    <div class="dropdown-content">
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
                <span class="site-title"><a href="${base}index.html" style="text-decoration: none; color: inherit;">The World Manifesto</a></span>
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
