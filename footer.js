(function() {
    'use strict';

    // Hämta språk från webbläsaren
    const currentLang = (navigator.language || 'sv').split('-')[0].toLowerCase();

    // Beräkna bas-sökväg (för att hitta bilder korrekt från alla sidor)
    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }
    const base = getBasePath();

    // Översättningar för fotnoten
    const translations = {
        'sv': { email: '✉  E-post webbmaster', copyright: 'Världsmanifestet – Publicerat 2026' },
        'en': { email: '✉  Email webmaster', copyright: 'The World Manifesto – Published 2026' },
        // ... (Lägg till de andra 40 språken här om du vill ha översatt email och copyright, annars fallback till svenska) ...
    };

    const t = translations[currentLang] || translations['sv'];

    // Skapa footer-elementet
    const footer = document.createElement('footer');
    footer.style.cssText = `
        margin-top: 60px;
        padding: 20px 0 10px 0;
        text-align: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
        border-top: 1px solid #e0e0e0;
        width: 100%;
        clear: both;
        background-color: #FFFFFB;
    `;

    // 1. Webmaster-e-post
    const webmasterP = document.createElement('p');
    webmasterP.style.cssText = 'font-size: 16px; margin-bottom: 5px; text-align: center;';
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:theworldmanifesto@gmail.com';
    emailLink.textContent = t.email;
    emailLink.style.cssText = 'color: #1a1a1a; text-decoration: none; transition: color 0.3s;';
    emailLink.onmouseover = function() { this.style.color = '#555'; };
    emailLink.onmouseout = function() { this.style.color = '#1a1a1a'; };
    webmasterP.appendChild(emailLink);
    footer.appendChild(webmasterP);

    // 2. Copyright-rad
    const copyrightP = document.createElement('p');
    copyrightP.style.cssText = 'font-size: 14px; color: #666; margin-top: 5px; margin-bottom: 0; text-align: center;';
    copyrightP.textContent = t.copyright;
    footer.appendChild(copyrightP);

    // 3. NY TEXT OM ÖVERSÄTTNING (med små bokstäver och exakta radbrytningar)
    const infoP = document.createElement('div');
    infoP.style.cssText = `
        font-size: 11px;
        color: #888;
        margin-top: 15px;
        line-height: 1.4;
        text-align: center;
        font-family: system-ui, sans-serif;
    `;

    // Skapa exakt den textstruktur du visade, med bild istället för emoji
    infoP.innerHTML = `
        The World Manifesto is translated into<br>
        <img src="${base}menu_icons/languages.svg" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px;"> 42 languages<br>
        &nbsp;&nbsp;–<br>
        meaning that more than 7 out of 10 people<br>
        in the world can read it in their own<br>
        language.
    `;

    footer.appendChild(infoP);

    // Sätt in footern i slutet av body
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(footer);
        });
    } else {
        document.body.appendChild(footer);
    }
})();
