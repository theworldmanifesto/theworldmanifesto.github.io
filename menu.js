// ============================================================
// FOOTER – The World Manifesto
// ============================================================

(function() {
    'use strict';

    // --- HÄMTA SPRÅK FRÅN WEBBlÄSAREN (navigator.language) ---
    const currentLang = (navigator.language || 'sv').split('-')[0].toLowerCase();

    // --- ÖVERSÄTTNINGAR FÖR SIDFOTEN ---
    const translations = {
        'en': { email: '✉  Email webmaster', copyright: 'The World Manifesto – Published 2026' },
        'zh': { email: '✉  ‪给网站管理员的电子邮件', copyright: '世界宣言 – 出版于 2026 年' },
        'hi': { email: '✉  वेबमास्टर को ईमेल', copyright: 'विश्व घोषणापत्र – 2026 में प्रकाशित' },
        'es': { email: '✉  Correo electrónico del webmaster', copyright: 'El Manifiesto Mundial – Publicado en 2026' },
        'fr': { email: '✉  E-mail du webmaster', copyright: 'Le Manifeste Mondial – Publié en 2026' },
        'ar': { email: '✉  بريد إلكتروني لمدير الموقع', copyright: 'البيان العالمي – نشر في 2026' },
        'bn': { email: '✉  ওয়েবমাস্টারকে ইমেইল', copyright: 'বিশ্ব ইশতেহার – ২০২৬ সালে প্রকাশিত' },
        'pt': { email: '✉  E-mail do webmaster', copyright: 'O Manifesto Mundial – Publicado em 2026' },
        'ru': { email: '✉  Электронная почта веб-мастера', copyright: 'Всемирный манифест – Опубликован в 2026 году' },
        'ur': { email: '✉  ویب ماسٹر کو ای میل', copyright: 'عالمی منشور – 2026 میں شائع ہوا' },
        'id': { email: '✉  Email webmaster', copyright: 'Manifest Dunia – Diterbitkan 2026' },
        'de': { email: '✉  E-Mail an den Webmaster', copyright: 'Weltmanifest – Veröffentlicht 2026' },
        'ja': { email: '✉  ‪ウェブマスターへのメール', copyright: '世界宣言 – 2026年発行' },
        'sw': { email: '✉  Barua pepe kwa msimamizi wa wavuti', copyright: 'Ilani ya Dunia – Imechapishwa 2026' },
        'tl': { email: '✉  Email sa webmaster', copyright: 'Manipesto ng Mundo – Nailathala 2026' },
        'tr': { email: '✉  Webmaster\'a e-posta', copyright: 'Dünya Manifestosu – 2026\'da yayınlandı' },
        'vi': { email: '✉  Email quản trị viên', copyright: 'Tuyên ngôn Thế giới – Xuất bản năm 2026' },
        'ko': { email: '✉  웹마스터에게 이메일 보내기', copyright: '세계 선언문 – 2026년 출판' },
        'fa': { email: '✉  ایمیل به مدیریت وب‌سایت', copyright: 'مانیفست جهانی – منتشر شده در 2026' },
        'it': { email: '✉  Email al webmaster', copyright: 'Manifesto Mondiale – Pubblicato nel 2026' },
        'th': { email: '✉  อีเมลถึงผู้ดูแลเว็บ', copyright: 'แถลงการณ์โลก – เผยแพร่ 2026' },
        'pl': { email: '✉  E-mail do webmastera', copyright: 'Manifest Światowy – Opublikowano w 2026' },
        'uk': { email: '✉  Електронна пошта веб-майстра', copyright: 'Всесвітній маніфест – Опубліковано в 2026' },
        'nl': { email: '✉  E-mail naar webmaster', copyright: 'Wereldmanifest – Gepubliceerd in 2026' },
        'ro': { email: '✉  E-mail către webmaster', copyright: 'Manifestul Mondial – Publicat în 2026' },
        'el': { email: '✉  Email στον διαχειριστή ιστοσελίδας', copyright: 'Παγκόσμιο Μανιφέστο – Δημοσιεύθηκε το 2026' },
        'hu': { email: '✉  E-mail a webmesternek', copyright: 'Világkiáltvány – Kiadva 2026-ban' },
        'cs': { email: '✉  E-mail správci webu', copyright: 'Světový manifest – Vydáno 2026' },
        'sv': { email: '✉  E-post webbmaster', copyright: 'Världsmanifestet – Publicerat 2026' },
        'bg': { email: '✉  Имейл на уебмастъра', copyright: 'Световен манифест – Публикуван през 2026' },
        'no': { email: '✉  E-post til webmaster', copyright: 'Verdensmanifestet – Publisert 2026' },
        'da': { email: '✉  E-mail til webmaster', copyright: 'Verdensmanifestet – Udgivet 2026' },
        'fi': { email: '✉  Sähköposti webmasterille', copyright: 'Maailmanmanifesti – Julkaistu 2026' },
        'he': { email: '✉  ‪דוא"ל למנהל האתר', copyright: 'מניפוסט העולם – פורסם ב-2026' },
        'af': { email: '✉  E-pos aan webmeester', copyright: 'Wêreldmanifest – Gepubliseer 2026' },
        'zu': { email: '✉  I-imeyili kumphathi wewebhu', copyright: 'IManifesto Yomhlaba – Ishicilelwe ngo-2026' },
        'xh': { email: '✉  I-imeyili kumphathi wewebhu', copyright: 'IManifesto Yehlabathi – Ishicilelwe ngo-2026' },
        'is': { email: '✉  Tölvupóstur til vefstjóra', copyright: 'Heimsmanifestið – Gefið út 2026' },
        'fo': { email: '✉  T-postur til vevstjóra', copyright: 'Heimsskráin – Útgivið 2026' },
        'crs': { email: '✉  Imel pou webmaster', copyright: 'Manifest lemonn – Pibliye 2026' },
        'se': { email: '✉  E-poasta neahttameasterii', copyright: 'Máilmmi Manifesta – Almmustuvvon 2026' },
        'fit': { email: '✉  Sähköposti webmasterille', copyright: 'Mailmanmanifesti – Julkaistu 2026' }
    };

    // Välj rätt översättning (fallback till svenska om språket saknas)
    const t = translations[currentLang] || translations['sv'];

    // --- SKAPA FOOTER-ELEMENTET ---
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

    // --- WEBBMASTER-E-POST ---
    const webmasterP = document.createElement('p');
    webmasterP.style.cssText = `
        font-size: 16px;
        margin-bottom: 5px;
        text-align: center;
    `;
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:theworldmanifesto@gmail.com';
    emailLink.textContent = t.email;
    emailLink.style.cssText = `
        color: #1a1a1a;
        text-decoration: none;
        transition: color 0.3s;
    `;
    emailLink.onmouseover = function() { this.style.color = '#555'; };
    emailLink.onmouseout = function() { this.style.color = '#1a1a1a'; };
    webmasterP.appendChild(emailLink);
    footer.appendChild(webmasterP);

    // --- COPYRIGHT-RAD ---
    const copyrightP = document.createElement('p');
    copyrightP.style.cssText = `
        font-size: 14px;
        color: #666;
        margin-top: 5px;
        margin-bottom: 0;
        text-align: center;
    `;
    copyrightP.textContent = t.copyright;
    footer.appendChild(copyrightP);

    // --- SÄTT IN FOOTERN I SLUTET AV BODY ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(footer);
        });
    } else {
        document.body.appendChild(footer);
    }

})();
