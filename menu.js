// menu.js - Genererar menyn, anpassar första knappen och döljer Robotel vid Kina-kriterier

document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("main-menu");
    if (!menuContainer) return;

    // 1. Kriteriekontroll för Kina (BÅDA kriterierna måste uppfyllas)
    // Kriterium A: Webbläsarens språk är inställt på Kina ('zh', 'zh-CN', 'zh-hans' etc.)
    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const isChinaLang = userLang.startsWith('zh');

    // Kriterium B: Enhetens tidszon är inställd på Kina ('Asia/Shanghai', 'Asia/Urumqi', 'Asia/Chongqing' etc.)
    let isChinaTimeZone = false;
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone && (timeZone.includes('Shanghai') || timeZone.includes('Urumqi') || timeZone.includes('Chongqing') || timeZone.includes('Harbin') || timeZone === 'Asia/Kashgar')) {
            isChinaTimeZone = true;
        }
    } catch (e) {
        // Om tidszon inte kan läsas av
        isChinaTimeZone = false;
    }

    // Om BÅDA stämmer -> dölj Robotel
    const hideRobotel = isChinaLang && isChinaTimeZone;

    // 2. Bygg HTML för menyn
    let html = `
    <div class="site-nav">
        <div class="nav-container">
            <div class="dropdown" id="homeDropdown">
                <a href="index.html" class="dropbtn" id="homeBtn">🌐HOME</a>
                <div class="dropdown-content">
                    <a id="detected-lang-link" href="lang/sv.html">🇸🇪 SVENSKA</a>
                    <a href="lang/en.html">🇬🇧 ENGLISH</a>
                    <a href="lang/zh.html">🇨🇳 简体中文</a>
                    <a href="lang/lang.html">🌐 More Languages</a>
                    <a href="freedom-staircase/freedom-staircase.html">🪜 Freedom Staircase</a>
                    <a href="tropics/tropics.html">🌎 The Tropics</a>
                    <a href="share/share.html">💬 Share</a>`;

    // Lägg bara till Robotel om besökaren INTE uppfyller båda Kina-kriterierna
    if (!hideRobotel) {
        html += `\n                    <a href="robotel/robotel.html">👄 Robotel</a>`;
    }

    html += `
                </div>
            </div>
        </div>
    </div>`;

    menuContainer.innerHTML = html;

    // 3. Dynamisk förstalänk för språk (om besökaren har t.ex. Tyska, Spanska, osv.)
    const langData = {
        'es': { url: 'lang/es.html', text: '🇪🇸 ESPAÑOL' },
        'fr': { url: 'lang/fr.html', text: '🇫🇷 FRANÇAIS' },
        'de': { url: 'lang/de.html', text: '🇩🇪 DEUTSCH' },
        'ru': { url: 'lang/ru.html', text: '🇷🇺 РУССКИЙ' },
        'ja': { url: 'lang/ja.html', text: '🇯🇵 日本語' },
        'fi': { url: 'lang/fi.html', text: '🇫🇮 SUOMI' },
        'no': { url: 'lang/no.html', text: '🇳🇴 NORSK' },
        'da': { url: 'lang/da.html', text: '🇩🇰 DANSK' },
        'it': { url: 'lang/it.html', text: '🇮🇹 ITALIANO' },
        'pt': { url: 'lang/pt.html', text: '🇵🇹 PORTUGUÊS' },
        'hi': { url: 'lang/hi.html', text: '🇮🇳 हिन्दी' },
        'ar': { url: 'lang/ar.html', text: '🇸🇦 العربية' }
        // Fyll på med fler av dina 42 språk vid behov
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