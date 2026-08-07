// ============================================================
// FOOTER – The World Manifesto
// ============================================================
// Denna fil skapar en enhetlig sidfot för hela webbplatsen.
// Den laddas in i alla HTML-sidor via <script src="footer.js"></script>
// ============================================================

(function() {
    'use strict';

    // ------------------------------------------------------------
    // 1. SKAPA FOOTER-ELEMENTET
    // ------------------------------------------------------------
    const footer = document.createElement('footer');
    footer.style.cssText = `
        margin-top: 60px;
        padding: 20px 0 10px 0;
        text-align: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
        border-top: 1px solid #e0e0e0;
        width: 100%;
        clear: both;
        background-color: #fcfcfc;
    `;

    // ------------------------------------------------------------
    // 2. WEBBMASTER-E-POST
    // ------------------------------------------------------------
    const webmasterP = document.createElement('p');
    webmasterP.style.cssText = `
        font-size: 16px;
        margin-bottom: 5px;
        text-align: center;
    `;

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:theworldmanifesto@gmail.com';
    emailLink.textContent = '✉  E-post webbmaster';
    emailLink.style.cssText = `
        color: #1a1a1a;
        text-decoration: none;
        transition: color 0.3s;
    `;
    emailLink.onmouseover = function() { this.style.color = '#555'; };
    emailLink.onmouseout = function() { this.style.color = '#1a1a1a'; };
    webmasterP.appendChild(emailLink);
    footer.appendChild(webmasterP);

    // ------------------------------------------------------------
    // 3. COPYRIGHT-RAD
    // ------------------------------------------------------------
    const copyrightP = document.createElement('p');
    copyrightP.style.cssText = `
        font-size: 14px;
        color: #666;
        margin-top: 5px;
        margin-bottom: 0;
        text-align: center;
    `;
    copyrightP.textContent = 'The World Manifesto – Publicerad 2026';
    footer.appendChild(copyrightP);

    // ------------------------------------------------------------
    // 4. SÄTT IN FOOTERN I SLUTET AV BODY
    // ------------------------------------------------------------
    // Vänta tills DOM är redo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(footer);
        });
    } else {
        document.body.appendChild(footer);
    }

})();
