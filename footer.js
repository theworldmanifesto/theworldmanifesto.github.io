document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    
    if (container) {
        const footerHTML = `
            <footer>
                <div class="webmaster">
                    <a href="mailto:theworldmanifesto@outlook.com">✉ &nbsp;E-mail webbmaster</a>
                </div>
                <div class="copyright">
                    The World Manifesto &nbsp; &nbsp; – &nbsp; &nbsp; Published 2026
                </div>
            </footer>
        `;
        
        container.insertAdjacentHTML('beforeend', footerHTML);
    }
});