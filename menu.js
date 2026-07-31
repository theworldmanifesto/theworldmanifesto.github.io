// menu.js - Genererar menyn och hanterar relativa sökvägar för undermappar

document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("main-menu");
    if (!menuContainer) return;

// Känn av om filen ligger i en undermapp genom att kolla om script-taggen har src="../menu.js"
const scripts = document.getElementsByTagName('script');
let prefix = "";

for (let s of scripts) {
    const src = s.getAttribute('src'); // getAttribute bevarar den skrivna koden "../menu.js"
    if (src && src.includes('../menu.js')) {
        prefix = "../"; // Tvinga länkar att gå upp ett mapplås när vi är i en undermapp!
        break;
    }
}

    // 1. Kriteriekontroll för Kina (BÅDA kriterierna måste uppfyllas)
    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const isChinaLang = userLang.startsWith('zh');

    let isChinaTimeZone = false;
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone && (timeZone.includes('Shanghai') || timeZone.includes('Urumqi') || timeZone.includes('Chongqing') || timeZone.includes('Harbin') || timeZone === 'Asia/Kashgar')) {
            isChinaTimeZone = true;
        }
    } catch (e) {
        isChinaTimeZone = false;
    }

    const hideRobotel = isChinaLang && isChinaTimeZone;

    // 2. Bygg HTML för menyn med prefix (../ om i undermapp)
    let html = `
    <div class="site-nav">
        <div class="nav-container">
            <div class="dropdown" id="homeDropdown">
                <a href="${prefix}index.html" class="dropbtn" id="homeBtn">🌐HOME</a>
                <div class="dropdown-content">
                    <a id="detected-lang-link" href="${prefix}lang/sv.html">🇸🇪 SVENSKA</a>
                    <a href="${prefix}lang/en.html">🇬🇧 ENGLISH</a>
                    <a href="${prefix}lang/zh.html">🇨🇳 简体中文</a>
                    <a href="${prefix}lang/lang.html">🌐 More Languages</a>
                    <a href="${prefix}freedom-staircase/freedom-staircase.html">🪜 Freedom Staircase</a>
                    <a href="${prefix}tropics/tropics.html">🌎 The Tropics</a>
                    <a href="${prefix}share/share.html">💬 Share</a>`;

    if (!hideRobotel) {
        html += `\n                    <a href="${prefix}robotel/robotel.html">🤖 Robotel</a>`;
    }

    html += `
                </div>
            </div>
        </div>
    </div>`;

    menuContainer.innerHTML = html;

    // 3. Dynamisk förstalänk för språk
    const langData = {
        'es': { url: `${prefix}lang/es.html`, text: '🇪🇸 ESPAÑOL' },
        'fr': { url: `${prefix}lang/fr.html`, text: '🇫🇷 FRANÇAIS' },
        'de': { url: `${prefix}lang/de.html`, text: '🇩🇪 DEUTSCH' },
        'ru': { url: `${prefix}lang/ru.html`, text: '🇷🇺 РУССКИЙ' },
        'ja': { url: `${prefix}lang/ja.html`, text: '🇯🇵 日本語' },
        'fi': { url: `${prefix}lang/fi.html`, text: '🇫🇮 SUOMI' },
        'no': { url: `${prefix}lang/no.html`, text: '🇳🇴 NORSK' },
        'da': { url: `${prefix}lang/da.html`, text: '🇩🇰 DANSK' },
        'it': { url: `${prefix}lang/it.html`, text: '🇮🇹 ITALIANO' },
        'pt': { url: `${prefix}lang/pt.html`, text: '🇵🇹 PORTUGUÊS' },
        'hi': { url: `${prefix}lang/hi.html`, text: '🇮🇳 हिन्दी' },
        'ar': { url: `${prefix}lang/ar.html`, text: '🇸🇦 العربية' }
    };

    const shortLang = userLang.slice(0, 2);
    if (langData[shortLang] && shortLang !== 'en' && shortLang !== 'zh') {
        const detectedBtn = document.getElementById('detected-lang-link');
        if (detectedBtn) {
            detectedBtn.href = langData[shortLang].url;
            detectedBtn.textContent = langData[shortLang].text;
        }
    }

    // 4. Mobil- och Hover-logik för dropdown
    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('homeBtn');
    let isOpen = false;

    if (btn && dropdown) {
        btn.addEventListener('click', function (e) {
            if (window.innerWidth <= 600) {
                if (!isOpen) {
                    e.preventDefault();
                    dropdown.classList.add('active');
                    isOpen = true;
                }
            }
        });

        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                isOpen = false;
            }
        });
    }
});
