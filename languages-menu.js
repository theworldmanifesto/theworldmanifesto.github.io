// languages-menu.js
// Fyller en <select>-dropdown med alla språk från languages-list.js.

window.populateLangSelect = function(selectEl) {
    if (!selectEl) return;
    if (!window.ALL_LANGUAGES) {
        console.error('languages-list.js måste laddas före languages-menu.js');
        return;
    }
    selectEl.innerHTML = '';
    window.ALL_LANGUAGES.forEach(function(item) {
        var code = item[0];
        var name = item[1];
        var en = item[2];
        var opt = document.createElement('option');
        opt.value = code;
        opt.textContent = en ? name + ' (' + en + ')' : name;
        selectEl.appendChild(opt);
    });
};

window.setDocumentDirection = function(langCode) {
    if (!window.RTL_LANGS) return;
    document.documentElement.dir = window.RTL_LANGS.indexOf(langCode) !== -1 ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
};