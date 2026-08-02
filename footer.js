document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <footer style="text-align: center; padding: 40px 20px; font-size: 0.9em; opacity: 0.7;">
            <hr style="border: 0; border-top: 1px solid #444; margin-bottom: 20px; width: 60%;">
            <p>Kontakt: <a href="mailto:din-epost@doman.com" style="color: inherit;">din-epost@doman.com</a></p>
            <p>© The World Manifesto</p>
        </footer>
    `;

    // Sätter in sidfoten längst ner i <body> på alla sidor
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});