// ============================================================
// MENU.JS - Global meny för The World Manifesto
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // --- SKAPA MENYN MED ABSOLUTA SÖKVÄGAR ---
    const menuHTML = `
        <div class="site-nav">
            <div class="nav-container">
                <div class="dropdown" id="homeDropdown">
                    <a href="/index.html" class="dropbtn" id="homeBtn">🌐HOME</a>
                    <div class="dropdown-content">
                        <a href="/lang/en.html">🇬🇧 ENGLISH</a>
                        <a href="/lang/zh.html">🇨🇳 简体中文</a>
                        <a href="/lang/sv.html">🇸🇪 SVENSKA</a>
                        <a href="/lang/lang.html">🌐 More Languages</a>
                        <a href="/freedom-staircase/freedom-staircase.html">🪜 Freedom Staircase</a>
                        <a href="/tropics/tropics.html">🌎 The Tropics</a>
                        <a href="/robotel/robotel.html">👄 Robotel</a>
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
                // Andra klicket – låt länken gå
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