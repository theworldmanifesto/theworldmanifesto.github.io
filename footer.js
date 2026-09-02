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

    // Fullständig översättning för alla 42 språk
    const translations = {
        'sv': { email: '✉  E-post webbmaster', copyright: 'Världsmanifestet – Publicerat 2026', translated: 'Världsmanifestet är översatt till 42 språk – vilket innebär att fler än 7 av 10 människor i världen kan läsa det på sitt eget språk.' },
        'en': { email: '✉  Email webmaster', copyright: 'The World Manifesto – Published 2026', translated: 'The World Manifesto is translated into 42 languages – meaning that more than 7 out of 10 people in the world can read it in their own language.' },
        'fi': { email: '✉  Sähköposti webmasterille', copyright: 'Maailmanmanifesti – Julkaistu 2026', translated: 'Maailmanmanifesti on käännetty 42 kielelle – mikä tarkoittaa, että yli 7 ihmistä 10:stä maailmassa voi lukea sen omalla kielellään.' },
        'zh': { email: '✉  给网站管理员的电子邮件', copyright: '世界宣言 – 出版于 2026 年', translated: '《世界宣言》已被翻译成42种语言——这意味着世界上超过十分之七的人可以用自己的语言阅读它。' },
        'hi': { email: '✉  वेबमास्टर को ईमेल', copyright: 'विश्व घोषणापत्र – 2026 में प्रकाशित', translated: 'विश्व घोषणापत्र का 42 भाषाओं में अनुवाद किया गया है – जिसका अर्थ है कि दुनिया में 10 में से 7 से अधिक लोग इसे अपनी भाषा में पढ़ सकते हैं।' },
        'es': { email: '✉  Correo electrónico del webmaster', copyright: 'El Manifiesto Mundial – Publicado en 2026', translated: 'El Manifiesto Mundial está traducido a 42 idiomas, lo que significa que más de 7 de cada 10 personas en el mundo pueden leerlo en su propio idioma.' },
        'fr': { email: '✉  E-mail du webmaster', copyright: 'Le Manifeste Mondial – Publié en 2026', translated: 'Le Manifeste Mondial est traduit en 42 langues, ce qui signifie que plus de 7 personnes sur 10 dans le monde peuvent le lire dans leur propre langue.' },
        'de': { email: '✉  E-Mail an den Webmaster', copyright: 'Weltmanifest – Veröffentlicht 2026', translated: 'Das Weltmanifest ist in 42 Sprachen übersetzt, was bedeutet, dass mehr als 7 von 10 Menschen auf der Welt es in ihrer eigenen Sprache lesen können.' },
        'ar': { email: '✉  بريد إلكتروني لمدير الموقع', copyright: 'البيان العالمي – نشر في 2026', translated: 'تمت ترجمة البيان العالمي إلى 42 لغة – مما يعني أن أكثر من 7 من كل 10 أشخاص في العالم يمكنهم قراءته بلغتهم الخاصة.' },
        'id': { email: '✉  Email webmaster', copyright: 'Manifest Dunia – Diterbitkan 2026', translated: 'Manifest Dunia telah diterjemahkan ke dalam 42 bahasa – artinya lebih dari 7 dari 10 orang di dunia dapat membacanya dalam bahasa mereka sendiri.' },
        'bn': { email: '✉  ওয়েবমাস্টারকে ইমেইল', copyright: 'বিশ্ব ইশতেহার – ২০২৬ সালে প্রকাশিত', translated: 'বিশ্ব ইশতেহারটি ৪২টি ভাষায় অনূদিত হয়েছে – যার অর্থ বিশ্বের ১০ জনের মধ্যে ৭ জনের বেশি মানুষ এটি তাদের নিজের ভাষায় পড়তে পারেন।' },
        'pt': { email: '✉  E-mail do webmaster', copyright: 'O Manifesto Mundial – Publicado em 2026', translated: 'O Manifesto Mundial está traduzido em 42 idiomas – o que significa que mais de 7 em cada 10 pessoas no mundo podem lê-lo na sua própria língua.' },
        'ru': { email: '✉  Электронная почта веб-мастера', copyright: 'Всемирный манифест – Опубликован в 2026 году', translated: 'Всемирный манифест переведен на 42 языка – это означает, что более 7 из 10 человек в мире могут прочитать его на своем родном языке.' },
        'uk': { email: '✉  Електронна пошта веб-майстра', copyright: 'Всесвітній маніфест – Опубліковано в 2026', translated: 'Всесвітній маніфест перекладено 42 мовами – це означає, що понад 7 із 10 людей у світі можуть прочитати його рідною мовою.' },
        'bg': { email: '✉  Имейл на уебмастъра', copyright: 'Световен манифест – Публикуван през 2026', translated: 'Световният манифест е преведен на 42 езика – което означава, че повече от 7 от всеки 10 души в света могат да го прочетат на родния си език.' },
        'ur': { email: '✉  ویب ماسٹر کو ای میل', copyright: 'عالمی منشور – 2026 میں شائع ہوا', translated: 'عالمی منشور کا 42 زبانوں میں ترجمہ کیا گیا ہے – جس کا مطلب ہے کہ دنیا کے 10 میں سے 7 سے زائد افراد اسے اپنی زبان میں پڑھ سکتے ہیں۔' },
        'ja': { email: '✉  ウェブマスターへのメール', copyright: '世界宣言 – 2026年発行', translated: '世界宣言は42の言語に翻訳されており、世界の10人中7人以上が母国語で読むことができます。' },
        'fil': { email: '✉  Email sa webmaster', copyright: 'Manipesto ng Mundo – Nailathala 2026', translated: 'Ang Manipesto ng Mundo ay isinalin sa 42 wika – ibig sabihin, higit sa 7 sa bawat 10 tao sa mundo ang makakabasa nito sa kanilang sariling wika.' },
        'ko': { email: '✉  웹마스터에게 이메일 보내기', copyright: '세계 선언문 – 2026년 출판', translated: '세계 선언문은 42개 언어로 번역되었으며, 이는 세계 인구 10명 중 7명 이상이 자신의 언어로 읽을 수 있다는 것을 의미합니다.' },
        'th': { email: '✉  อีเมลถึงผู้ดูแลเว็บ', copyright: 'แถลงการณ์โลก – เผยแพร่ 2026', translated: 'แถลงการณ์โลกได้รับการแปลเป็น 42 ภาษา ซึ่งหมายความว่าผู้คนมากกว่า 7 ใน 10 คนทั่วโลกสามารถอ่านได้ในภาษาของตนเอง' },
        'vi': { email: '✉  Email quản trị viên', copyright: 'Tuyên ngôn Thế giới – Xuất bản năm 2026', translated: 'Tuyên ngôn Thế giới đã được dịch sang 42 ngôn ngữ – nghĩa là hơn 7 trong số 10 người trên thế giới có thể đọc nó bằng ngôn ngữ của họ.' },
        'tr': { email: '✉  Webmaster\'a e-posta', copyright: 'Dünya Manifestosu – 2026\'da yayınlandı', translated: 'Dünya Manifestosu 42 dile çevrildi; bu, dünyadaki 10 kişiden 7\'den fazlasının onu kendi dilinde okuyabileceği anlamına geliyor.' },
        'fa': { email: '✉  ایمیل به مدیریت وب‌سایت', copyright: 'مانیفست جهانی – منتشر شده در 2026', translated: 'مانیفست جهانی به 42 زبان ترجمه شده است – به این معنی که بیش از 7 نفر از هر 10 نفر در جهان می‌توانند آن را به زبان خود بخوانند.' },
        'sw': { email: '✉  Barua pepe kwa msimamizi wa wavuti', copyright: 'Ilani ya Dunia – Imechapishwa 2026', translated: 'Ilani ya Dunia imetafsiriwa katika lugha 42 – ikimaanisha kuwa zaidi ya watu 7 kati ya 10 duniani wanaweza kuisoma kwa lugha yao.' },
        'it': { email: '✉  Email al webmaster', copyright: 'Manifesto Mondiale – Pubblicato nel 2026', translated: 'Il Manifesto Mondiale è tradotto in 42 lingue, il che significa che più di 7 persone su 10 nel mondo possono leggerlo nella propria lingua.' },
        'pl': { email: '✉  E-mail do webmastera', copyright: 'Manifest Światowy – Opublikowano w 2026', translated: 'Manifest Światowy został przetłumaczony na 42 języki – co oznacza, że ponad 7 na 10 osób na świecie może przeczytać go we własnym języku.' },
        'nl': { email: '✉  E-mail naar webmaster', copyright: 'Wereldmanifest – Gepubliceerd in 2026', translated: 'Het Wereldmanifest is vertaald in 42 talen – wat betekent dat meer dan 7 op de 10 mensen in de wereld het in hun eigen taal kunnen lezen.' },
        'ro': { email: '✉  E-mail către webmaster', copyright: 'Manifestul Mondial – Publicat în 2026', translated: 'Manifestul Mondial este tradus în 42 de limbi – ceea ce înseamnă că peste 7 din 10 oameni din lume îl pot citi în limba lor.' },
        'el': { email: '✉  Email στον διαχειριστή ιστοσελίδας', copyright: 'Παγκόσμιο Μανιφέστο – Δημοσιεύθηκε το 2026', translated: 'Το Παγκόσμιο Μανιφέστο έχει μεταφραστεί σε 42 γλώσσες – που σημαίνει ότι περισσότεροι από 7 στους 10 ανθρώπους στον κόσμο μπορούν να το διαβάσουν στη γλώσσα τους.' },
        'af': { email: '✉  E-pos aan webmeester', copyright: 'Wêreldmanifest – Gepubliseer 2026', translated: 'Die Wêreldmanifest is in 42 tale vertaal – wat beteken dat meer as 7 uit elke 10 mense in die wêreld dit in hul eie taal kan lees.' },
        'zu': { email: '✉  I-imeyili kumphathi wewebhu', copyright: 'IManifesto Yomhlaba – Ishicilelwe ngo-2026', translated: 'IManifesto Yomhlaba ihunyushwe ngezilimi ezingama-42 – okusho ukuthi abantu abangaphezu kwe-7 kwabangu-10 emhlabeni bangayifunda ngolimi lwabo.' },
        'xh': { email: '✉  I-imeyili kumphathi wewebhu', copyright: 'IManifesto Yehlabathi – Ishicilelwe ngo-2026', translated: 'IManifesto Yehlabathi iguqulelwe kwiilwimi ezingama-42 – nto leyo ethetha ukuba abantu abangaphezu kwabasi-7 kwabali-10 ehlabathini bangayifunda ngolwimi lwabo.' },
        'cs': { email: '✉  E-mail správci webu', copyright: 'Světový manifest – Vydáno 2026', translated: 'Světový manifest byl přeložen do 42 jazyků – což znamená, že více než 7 z 10 lidí na světě si jej může přečíst ve svém vlastním jazyce.' },
        'hu': { email: '✉  E-mail a webmesternek', copyright: 'Világkiáltvány – Kiadva 2026-ban', translated: 'A Világkiáltvány 42 nyelvre lett lefordítva – ami azt jelenti, hogy a világ 10 emberéből több mint 7 el tudja olvasni a saját nyelvén.' },
        'he': { email: '✉  ‪דוא"ל למנהל האתר', copyright: 'מניפסט העולם – פורסם ב-2026', translated: 'המניפסט העולמי תורגם ל-42 שפות – כלומר יותר מ-7 מתוך 10 אנשים בעולם יכולים לקרוא אותו בשפתם.' },
        'crs': { email: '✉  Imel pou webmaster', copyright: 'Manifest lemonn – Pibliye 2026', translated: 'Manifest lemonn in tradwir dan 42 lang – sa i veu dir ki plis ke 7 dimoun dan 10 dan lemonn kapab li sa dan zot prop lang.' },
        'no': { email: '✉  E-post til webmaster', copyright: 'Verdensmanifestet – Publisert 2026', translated: 'Verdensmanifestet er oversatt til 42 språk – noe som betyr at mer enn 7 av 10 mennesker i verden kan lese det på sitt eget språk.' },
        'se': { email: '✉  E-poasta neahttameasterii', copyright: 'Máilmmi Manifesta – Almmustuvvon 2026', translated: 'Máilmmi Manifesta lea jorgaluvvon 42 giellii – dan mearkkaša ahte eanet go 7 olbmo 10:s máilmmis sáhttet lohkat dan iežaset gillii.' },
        'fit': { email: '✉  Sähköposti webmasterille', copyright: 'Mailmanmanifesti – Julkaistu 2026', translated: 'Mailmanmanifesti on käännetty 42 kielelle – mikä tarkoittaa, että yli 7 ihmistä 10:stä maailmassa voi lukea sen omalla kielellään.' },
        'da': { email: '✉  E-mail til webmaster', copyright: 'Verdensmanifestet – Udgivet 2026', translated: 'Verdensmanifestet er oversat til 42 sprog – hvilket betyder, at mere end 7 ud af 10 mennesker i verden kan læse det på deres eget sprog.' },
        'is': { email: '✉  Tölvupóstur til vefstjóra', copyright: 'Heimsmanifestið – Gefið út 2026', translated: 'Heimsmanifestið er þýtt á 42 tungumál – sem þýðir að meira en 7 af hverjum 10 manneskjum í heiminum geta lesið það á sínu eigin tungumáli.' },
        'fo': { email: '✉  T-postur til vevstjóra', copyright: 'Heimsskráin – Útgivið 2026', translated: 'Heimsskráin er týdd til 42 mál – sum merkir, at meira enn 7 av hvørjum 10 fólkum í heiminum kunnu lesa hana á sínum egna máli.' },
        'hr': { email: '✉  E-mail webmasteru', copyright: 'Svjetski manifest – Objavljeno 2026.', translated: 'Svjetski manifest preveden je na 42 jezika – što znači da ga više od 7 od 10 ljudi u svijetu može pročitati na svom jeziku.' },
        'sk': { email: '✉  E-mail webmasterovi', copyright: 'Svetový manifest – Vydané v roku 2026', translated: 'Svetový manifest je preložený do 42 jazykov – čo znamená, že viac ako 7 z 10 ľudí na svete si ho môže prečítať vo svojom jazyku.' }
                    <!-- RÖD KNAPP FÖR ATT VISA DE 4 STEGEN -->
            <div style="text-align: center; margin-top: 40px; margin-bottom: 30px;">
                <button onclick="toggleManifesto()" style="background: linear-gradient(45deg, #FF4500, #FF8C00); border: none; color: white; padding: 15px 30px; font-size: 18px; font-weight: bold; border-radius: 50px; cursor: pointer; box-shadow: 0 4px 15px rgba(255,69,0,0.3); transition: transform 0.2s;">
                    🔴 Click to see the 4 Steps!
                </button>
            </div>

            <div id="manifestoSteps" style="display: none; max-width: 680px; margin: 0 auto 30px auto; padding: 20px; border-left: 5px solid #FF4500; background-color: #FFF5F0; border-radius: 8px; text-align: left; font-family: Georgia, serif;">
                <h3 style="color: #B22222; margin-top: 0; text-align: center;">The World Manifesto in 4 Steps</h3>
                <ol style="color: #333; line-height: 1.6; margin-bottom: 0;">
                    <li><strong>The idea</strong> must be made known.</li>
                    <li><strong>The idea</strong> must enter parliament and achieve a majority for laws like the Freedom Staircase and machine constitution.</li>
                    <li><strong>The state</strong> becomes fully automated, acting as a free pantry.</li>
                    <li><strong>The robots</strong> become autonomous and self-replicating, completing Earth's ecosystem.</li>
                </ol>
            </div>

            <script>
            function toggleManifesto() {
                var x = document.getElementById('manifestoSteps');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                } else {
                    x.style.display = 'none';
                }
            }
            </script>
    };

    const t = translations[currentLang] || translations['sv'];

    // Skapa footer-elementet
    const footer = document.createElement('footer');
    footer.style.cssText = 'margin-top: 60px; padding: 20px 0 10px 0; text-align: center; font-family: Georgia, serif; border-top: 1px solid #e0e0e0; width: 100%; clear: both; background-color: #FFFFFB;';

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

    // 3. Enkel rad om 42 språk (med languages.svg istället för emoji)
    const infoP = document.createElement('p');
    infoP.style.cssText = 'font-size: 11px; color: #888; margin-top: 10px; text-align: center; font-family: system-ui, sans-serif;';
    
    // Sätter in bilden och texten på en och samma rad
    infoP.innerHTML = '<img src="' + base + 'menu_icons/languages.svg" style="width:16px;height:16px;vertical-align:middle;margin-right:4px;"> ' + t.translated;

    footer.appendChild(infoP);

    // Sätt in footern i slutet av body
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { document.body.appendChild(footer); });
    } else {
        document.body.appendChild(footer);
    }
})();
