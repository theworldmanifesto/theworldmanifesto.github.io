// ============================================================
// TEST_MENU.JS - Testmeny med SVG-ikoner (ingen funktion)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // --- RÄKNA UT SÖKVÄG (för att visa rätt sökväg i testet) ---
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

    // --- SKAPA TESTMENYN MED SVG-IKONER ---
    // Här ersätter du mina exempel-SVG:er med dina egna ikoner!
    // Du kan kopiera in dina SVG-strängar direkt.
    function buildMenu() {
        const btnText = getButtonText();
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <a href="#" class="dropbtn" id="homeBtn">${btnText}</a>
                    <div class="dropdown-content">
                        <!-- 🏠 HOME – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1"/>
                            </svg>
                            HOME
                        </a>

                        <!-- 🇬🇧 ENGLISH – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                            </svg>
                            ENGLISH
                        </a>

                        <!-- 🇨🇳 简体中文 – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 2v20M2 12h20"/>
                            </svg>
                            简体中文
                        </a>

                        <!-- 🇸🇪 SVENSKA – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <rect x="2" y="2" width="20" height="20" rx="2"/>
                                <path d="M8 2v20M16 2v20M2 8h20M2 16h20"/>
                            </svg>
                            SVENSKA
                        </a>

                        <!-- 🌐 More Languages – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                            </svg>
                            More Languages
                        </a>

                        <!-- 🪜 Freedom Staircase – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <path d="M4 20h16M4 16l4-4M8 16l4-4M12 16l4-4M16 16l4-4"/>
                                <path d="M4 12l4-4M8 12l4-4M12 12l4-4M16 12l4-4"/>
                            </svg>
                            Freedom Staircase
                        </a>

                        <!-- 🌎 The Tropics – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M2 12h20M12 2c-2.5 2.5-4 6-4 10s1.5 7.5 4 10c2.5-2.5 4-6 4-10s-1.5-7.5-4-10z"/>
                            </svg>
                            The Tropics
                        </a>

                        <!-- 👄 Robotel – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <rect x="2" y="2" width="20" height="20" rx="2"/>
                                <circle cx="8" cy="8" r="1.5"/>
                                <circle cx="16" cy="8" r="1.5"/>
                                <path d="M8 14c1 1.5 3 2.5 5 2.5s4-1 5-2.5"/>
                            </svg>
                            Robotel
                        </a>

                        <!-- 💬 Share – med SVG-ikon -->
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
                                <circle cx="18" cy="5" r="3"/>
                                <circle cx="6" cy="12" r="3"/>
                                <circle cx="18" cy="19" r="3"/>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                            </svg>
                            Share
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
        const btn = document.getElementById('homeBtn');
        if (btn) {
            btn.textContent = getButtonText();
        }
    }

    window.addEventListener('resize', updateButtonText);

    // --- MOBIL: KLICK VÄXLAR MENYN (bara för att testa beteendet) ---
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('homeBtn');

    if (btn && dropdown) {
        btn.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    // --- LÄGG TILL EN KONSOLLOGG SÅ ATT DU VET ATT TESTFILEN LADDATS ---
    console.log('🧪 TESTMENY LADDAD – SVG-ikoner aktiva!');
});