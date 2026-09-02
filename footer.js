(function() {
    'use strict';
    // --- HÄMTA SPRÅK FRÅN WEBBlÄSAREN ---
    const currentLang = (navigator.language || 'sv').split('-')[0].toLowerCase();

    // --- FULLSTÄNDIG ORDBOK FÖR 42 SPRÅK (Behåller din befintliga lista, med 'fi' korrekt) ---
    const translations = {
        // ... (Klistra in din fullständiga lista från förra meddelandet här, men se till att du har 'fi' med) ...
        'sv': { email: '✉  E-post webbmaster', copyright: 'Världsmanifestet – Publicerat 2026' },
        'en': { email: '✉  Email webmaster', copyright: 'The World Manifesto – Published 2026' },
        'fi': { email: '✉  Sähköposti webmasterille', copyright: 'Maailmanmanifesti – Julkaistu 2026' },
        // ... (Lägg till resterande 39 språk här, exakt som de var i din förra fil) ...
        'zh': { email: '✉ 给网站管理员的电子邮件', copyright: '世界宣言 – 出版于 2026 年' },
        // ... etc.
    };

    const t = translations[currentLang] || translations['sv'];
    
    // ... (Resten av din footer-kod är exakt densamma som tidigare, den skapar bara elementen) ...
    const footer = document.createElement('footer');
    footer.style.cssText = 'margin-top: 60px; padding: 20px 0 10px 0; text-align: center; font-family: Georgia; border-top: 1px solid #e0e0e0; width: 100%; clear: both; background-color: #fcfcfc;';
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
    const copyrightP = document.createElement('p');
    copyrightP.style.cssText = 'font-size: 14px; color: #666; margin-top: 5px; margin-bottom: 0; text-align: center;';
    copyrightP.textContent = t.copyright;
    footer.appendChild(copyrightP);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { document.body.appendChild(footer); });
    } else { document.body.appendChild(footer); }
})();
