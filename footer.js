// ============================================================
// FOOTER.JS - Global sidfot för The World Manifesto
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    if (container) {
        // 1. Känn av sidans språk från <html lang="...">
        const currentLang = document.documentElement.lang || 'en';

        // 2. Ordbok för alla 42 språk
        const translations = {
            // --- STÖRRE SPRÅK ---
            'en': { webmaster: '✉ &nbsp;E-mail webmaster', published: 'Published' },
            'zh': { webmaster: '✉ &nbsp;联系站长', published: '出版于' },
            'hi': { webmaster: '✉ &nbsp;वेबमास्टर को ईमेल', published: 'प्रकाशित' },
            'es': { webmaster: '✉ &nbsp;Correo webmaster', published: 'Publicado' },
            'fr': { webmaster: '✉ &nbsp;E-mail webmaster', published: 'Publié' },
            'ar': { webmaster: '✉ &nbsp;بريد الويب', published: 'نُشر في' },
            'bn': { webmaster: '✉ &nbsp;ওয়েবমাস্টারকে ইমেইল', published: 'প্রকাশিত' },
            'pt': { webmaster: '✉ &nbsp;E-mail webmaster', published: 'Publicado' },
            'ru': { webmaster: '✉ &nbsp;Электронная почта', published: 'Опубликовано' },
            'ur': { webmaster: '✉ &nbsp;ویب ماسٹر کو ای میل', published: 'شائع شدہ' },
            'id': { webmaster: '✉ &nbsp;Email webmaster', published: 'Diterbitkan' },
            'de': { webmaster: '✉ &nbsp;E-Mail Webmaster', published: 'Veröffentlicht' },
            'ja': { webmaster: '✉ &nbsp;ウェブマスターへのメール', published: '発行' },
            'sw': { webmaster: '✉ &nbsp;Barua pepe msimamizi', published: 'Ilichapishwa' },
            'tl': { webmaster: '✉ &nbsp;Email sa webmaster', published: 'Nai-publish' },
            'tr': { webmaster: '✉ &nbsp;Webmaster\'a e-posta', published: 'Yayınlandı' },
            'vi': { webmaster: '✉ &nbsp;Email quản trị web', published: 'Được xuất bản' },
            'ko': { webmaster: '✉ &nbsp;웹마스터 이메일', published: '출판됨' },
            'fa': { webmaster: '✉ &nbsp;ایمیل به مدیر وب', published: 'منتشر شده' },
            'it': { webmaster: '✉ &nbsp;Email webmaster', published: 'Pubblicato' },
            'th': { webmaster: '✉ &nbsp;อีเมลเว็บมาสเตอร์', published: 'เผยแพร่' },
            'pl': { webmaster: '✉ &nbsp;E-mail webmastera', published: 'Opublikowano' },
            'uk': { webmaster: '✉ &nbsp;Електронна пошта вебмайстра', published: 'Опубліковано' },
            'nl': { webmaster: '✉ &nbsp;E-mail webmaster', published: 'Gepubliceerd' },
            'ro': { webmaster: '✉ &nbsp;E-mail webmaster', published: 'Publicat' },
            'el': { webmaster: '✉ &nbsp;Email διαχειριστή', published: 'Δημοσιεύτηκε' },
            'hu': { webmaster: '✉ &nbsp;E-mail webmesternek', published: 'Közzétéve' },
            'cs': { webmaster: '✉ &nbsp;E-mail webmasterovi', published: 'Zveřejněno' },
            'sv': { webmaster: '✉ &nbsp;E-post webbmaster', published: 'Publicerad' },
            'bg': { webmaster: '✉ &nbsp;Имейл на уебмастър', published: 'Публикувано' },
            'no': { webmaster: '✉ &nbsp;E-post til webmaster', published: 'Publisert' },
            'da': { webmaster: '✉ &nbsp;E-mail til webmaster', published: 'Udgivet' },
            'fi': { webmaster: '✉ &nbsp;Sähköposti webmasterille', published: 'Julkaistu' },
            'he': { webmaster: '✉ &nbsp;דואר אלקטרוני למנהל האתר', published: 'פורסם' },
            'af': { webmaster: '✉ &nbsp;E-pos webmeester', published: 'Gepubliseer' },
            
            // --- MINDRE/REGIONALA SPRÅK ---
            'zu': { webmaster: '✉ &nbsp;I-imeyili kumphathi wewebhu', published: 'Kushicilelwe' },
            'xh': { webmaster: '✉ &nbsp;I-imeyili kumphathi wewebhu', published: 'Kupapashwe' },
            'is': { webmaster: '✉ &nbsp;Tölvupóstur vefstjóra', published: 'Útgefið' },
            'fo': { webmaster: '✉ &nbsp;T-post til webmaster', published: 'Útgevið' },
            'crs': { webmaster: '✉ &nbsp;Imel webmaster', published: 'Pibliye' },
            'se': { webmaster: '✉ &nbsp;E-poasta webmasterii', published: 'Almmuhuvvon' },
            'fit': { webmaster: '✉ &nbsp;Sähköposti webmasterille', published: 'Julkaistu' }
        };

        // Välj språket från listan, eller fallback till engelska
        const t = translations[currentLang] || translations['en'];

        // 3. Generera sidfoten med dynamisk text
        const footerHTML = `
            <footer>
                <div class="webmaster">
                    <a href="mailto:theworldmanifesto@outlook.com">${t.webmaster}</a>
                </div>
                <div class="copyright">
                    The World Manifesto &nbsp; &nbsp; – &nbsp; &nbsp; ${t.published} 2026
                </div>
            </footer>
        `;

        container.insertAdjacentHTML('beforeend', footerHTML);
    }
});