// ============================================================
// PRINT.JS - The World Manifesto
// Fyller print.html med rätt språkversion från print.json.
// ============================================================

import { AVAILABLE, pickBestLanguage } from '../../lang/js/lang.js';

const RTL_LANGS = ['ar', 'he', 'ur', 'fa'];

// print.json ligger i print/json/ — relativt print.html
const JSON_URL = '../json/print.json';

function getCurrentLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang) return pickBestLanguage(AVAILABLE, [urlLang]);
    return pickBestLanguage();
}

async function loadTranslations(lang) {
    try {
        const res = await fetch(JSON_URL);
        if (!res.ok) {
            console.error('Kunde inte hämta print.json:', res.status);
            return null;
        }
        const data = await res.json();
        return data[lang] || data['en'];
    } catch (err) {
        console.error('Fel vid inläsning av print.json:', err);
        return null;
    }
}

function applyTranslations(t) {
    // Sätt text på alla element med id
const map = {
    'print-title': t.title,
    'print-intro': t.intro,
    'business-cards-title': t.business_cards_title,
    'business-cards-link': t.business_cards_link,
    'business-cards-note': t.business_cards_note,
    'postcards-title': t.postcards_title,
    'postcards-front': t.postcards_front,
    'postcards-back': t.postcards_back,
    'postcards-note': t.postcards_note,
    'postcards-paper': t.postcards_paper,
    'posters-title': t.posters_title,
    'posters-coming': t.posters_coming,
    'poster-a4': t.poster_a4,
    'qr-title': t.qr_title,
    'qr-link': t.qr_link
};

    for (const [id, text] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el && text) el.textContent = text;
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    const lang = getCurrentLang();

    // RTL-stöd
    if (RTL_LANGS.includes(lang)) {
        document.documentElement.setAttribute('dir', 'rtl');
    }
    document.documentElement.lang = lang;

    const t = await loadTranslations(lang);
    if (t) applyTranslations(t);
});
