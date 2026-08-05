// Central lagring av copyright-texten på olika språk
const copyrightTexts = {
  sv: `
    <h3>Första utgåvan, 2026</h3>
    <h4>Manifestets status i den digitala tidsåldern</h4>
    <p>Detta manifest är en gåva till mänskligheten och en ritning för en skuldfri, totalrobotiserad framtid. Det är ett digitalt flygblad för befrielse.</p>
    <p>Texten är helt gratis att läsa, kopiera, skriva ut och dela med varje människa på jorden. Det får däremot aldrig säljas, paketeras om för kommersiell vinning eller låsas in bakom betalväggar. Idéer för en gratis värld kan inte ägas.</p>
    <p>Läs, sprid och ställ om. Det fullständiga originalet finns alltid tillgängligt gratis på internet.</p>
    <p><strong>Undantagna från förbudet mot kommersiell försäljning är följande:</strong></p>
    <ol>
      <li><strong>Tidningar och tidskrifter:</strong> Får fritt publicera manifestet (helt eller delvis) som en artikelserie i sina ordinarie publikationer som säljs via lösnummer eller prenumeration.</li>
      <li><strong>Bokpaket och samlingar (bundles):</strong> Manifestet får ingå som en del i samlingsvolymer, antologier eller bokpaket tillsammans med andra verk.</li>
    </ol>
  `,
  en: `
    <h3>First Edition, 2026</h3>
    <h4>The status of the manifesto in the digital age</h4>
    <p>This manifesto is a gift to humanity and a blueprint for a debt-free, fully automated future. It is a digital flyer for liberation.</p>
    <p>The text is completely free to read, copy, print, and share with every person on Earth. However, it must never be sold, repackaged for commercial gain, or locked behind paywalls. Ideas for a free world cannot be owned.</p>
    <p>Read, spread, and transition. The complete original is always available for free on the internet.</p>
    <p><strong>Exempt from the prohibition on commercial sales are the following:</strong></p>
    <ol>
      <li><strong>Newspapers and periodicals:</strong> Are free to publish the manifesto (in whole or in part) as a series of articles in their regular publications sold via single issues or subscriptions.</li>
      <li><strong>Book bundles and collections:</strong> The manifesto may be included as part of collected volumes, anthologies, or book bundles alongside other works.</li>
    </ol>
  `,
  zh: `
    <h3>第一版，2026年</h3>
    <h4>数字时代的宣言地位</h4>
    <p>本宣言是赠予全人类的礼物，也是通往无债务、完全自动化未来的蓝图。这是一份争取解放的数字传单。</p>
    <p>本文本完全免费，供地球上的每个人阅读、复制、打印和分享。但是，绝不得出售、出于商业利益重新包装或锁在付费墙后。关于自由世界的思想不能被占有。</p>
    <p>阅读、传播并转变。完整的原件在互联网上始终免费提供。</p>
    <p><strong>以下情况不受商业销售禁令的限制：</strong></p>
    <ol>
      <li><strong>报纸与期刊：</strong> 可以自由地在其通过零售或订阅出售的常规出版物中，将本宣言（全文或部分）作为系列文章连载发表。</li>
      <li><strong>图书套装与合集（bundles）：</strong> 本宣言可以作为文集、选集或图书套装的一部分，与其他作品一同包含在内。</li>
    </ol>
  `
};

// Funktion för att sätta in texten i HTML-sektionen
function renderCopyright() {
  const container = document.getElementById('copyright-page');
  if (!container) return;

  // Hämtar språkkod från <html lang="..."> (t.ex. "sv", "en", "zh" eller "zh-CN")
  let currentLang = (document.documentElement.lang || 'sv').toLowerCase();
  
  // Hanterar om koden är t.ex. "zh-CN" -> plockar ut bara "zh"
  if (currentLang.includes('-')) {
    currentLang = currentLang.split('-')[0];
  }

  // Hämtar texten för språket, eller faller tillbaka på svenska om språket saknas
  const content = copyrightTexts[currentLang] || copyrightTexts['sv'];
  
  container.innerHTML = content;
}

// Körs automatiskt när sidan har laddats klart
document.addEventListener('DOMContentLoaded', renderCopyright);