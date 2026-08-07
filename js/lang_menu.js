// lang_menu.js – RULLGARDINSMENY med alla 42 språk

function getLanguageMenu() {
    const languages = [
        { code: 'af', name: 'Afrikaans' },
        { code: 'ar', name: 'العربية' },
        { code: 'bg', name: 'Български' },
        { code: 'bn', name: 'বাংলা' },
        { code: 'crs', name: 'Kreol seselwa' },
        { code: 'cs', name: 'Čeština' },
        { code: 'da', name: 'Dansk' },
        { code: 'de', name: 'Deutsch' },
        { code: 'el', name: 'Ελληνικά' },
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fa', name: 'فارسی' },
        { code: 'fi', name: 'Suomi' },
        { code: 'fit', name: 'Meänkieli' },
        { code: 'fo', name: 'Føroyskt' },
        { code: 'fr', name: 'Français' },
        { code: 'he', name: 'עברית' },
        { code: 'hi', name: 'हिंदी' },
        { code: 'hu', name: 'Magyar' },
        { code: 'id', name: 'Bahasa Indonesia' },
        { code: 'is', name: 'Íslenska' },
        { code: 'it', name: 'Italiano' },
        { code: 'ja', name: '日本語' },
        { code: 'ko', name: '한국어' },
        { code: 'nl', name: 'Nederlands' },
        { code: 'no', name: 'Norsk' },
        { code: 'pl', name: 'Polski' },
        { code: 'pt', name: 'Português' },
        { code: 'ro', name: 'Română' },
        { code: 'ru', name: 'Русский' },
        { code: 'se', name: 'Davvisámegiella' },
        { code: 'sv', name: 'Svenska' },
        { code: 'sw', name: 'Kiswahili' },
        { code: 'th', name: 'ภาษาไทย' },
        { code: 'tl', name: 'Filipino' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'uk', name: 'Українська' },
        { code: 'ur', name: 'اردو' },
        { code: 'vi', name: 'Tiếng Việt' },
        { code: 'xh', name: 'isiXhosa' },
        { code: 'zh', name: '中文' },
        { code: 'zu', name: 'isiZulu' }
    ];

    // Sortera alfabetiskt efter språknamn
    languages.sort((a, b) => a.name.localeCompare(b.name));

    let menu = `
        <div class="language-menu">
            <label for="language-select">🌍 Choose your language:</label>
            <select id="language-select" onchange="window.location.href = this.value + '.html'">
                <option value="">-- Select language --</option>
    `;

    languages.forEach(lang => {
        menu += `<option value="${lang.code}">${lang.name}</option>`;
    });

    menu += `
            </select>
        </div>
    `;
    return menu;
}