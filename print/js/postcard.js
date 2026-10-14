// ============================================================
// POSTCARD.JS - The World Manifesto
// Fyller vykortens framsidor med rätt språkversion.
//
// Användning:
//   <div data-postcard="machine_constitution"></div>
//   <div data-postcard="four_steps"></div>
//   <div data-postcard="freedom_staircase"></div>
//   <div data-postcard="slogan_quote"></div>
//
// Filen läser ?lang=xx från URL:en, hämtar rätt JSON och
// fyller i rätt element. Allt annat lämnas orört.
// ============================================================

import { AVAILABLE, pickBestLanguage } from '../../lang/js/lang.js';

// RTL-språk — de som skrivs från höger till vänster
const RTL_LANGS = ['ar', 'he', 'ur', 'fa'];

// JSON-filer i print/json/ (relativt till postcard_front.html)
const JSON_BASE = 'json/';

// four_steps.json ligger i roten (används av index.html)
const FOUR_STEPS_URL = '../../four_steps.json';

// Hämta språk från URL eller webbläsaren
function getCurrentLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang) {
        return pickBestLanguage(AVAILABLE, [urlLang]);
    }
    return pickBestLanguage();
}

// Hämta en JSON-fil från print/json/
async function fetchJson(name) {
    const url = JSON_BASE + name + '.json';
    const res = await fetch(url);
    if (!res.ok) {
        console.error('Kunde inte hämta', url, res.status);
        return null;
    }
    return res.json();
}

// Sätt riktning (LTR/RTL) på ett element
function applyDirection(el, lang) {
    if (RTL_LANGS.includes(lang)) {
        el.setAttribute('dir', 'rtl');
    } else {
        el.setAttribute('dir', 'ltr');
    }
}

// ============================================================
// VYKORT 1 — Maskinkonstitutionen
// ============================================================
async function fillMachineConstitution(el, lang) {
    const data = await fetchJson('machine_constitution');
    if (!data || !data[lang]) return;
    const t = data[lang];
    applyDirection(el, lang);

    el.innerHTML = `
        <div class="mc-titel">${t.title}</div>
        <div class="mc-punkt"><strong>${t.p1_strong}:</strong> ${t.p1_text}</div>
        <div class="mc-punkt"><strong>${t.p2_strong}:</strong> ${t.p2_text}</div>
        <div class="mc-punkt"><strong>${t.p3_strong}:</strong> ${t.p3_text}</div>
        <div class="mc-punkt"><strong>${t.p4_strong}:</strong> ${t.p4_text}</div>
        <div class="mc-avslutning">${t.ending}</div>
    `;
}

// ============================================================
// VYKORT 4 — The World Manifesto in 4 Steps
// (använder four_steps.json i roten)
// ============================================================
async function fillFourSteps(el, lang) {
    const res = await fetch(FOUR_STEPS_URL);
    if (!res.ok) {
        console.error('Kunde inte hämta four_steps.json:', res.status);
        return;
    }
    const data = await res.json();
    if (!data || !data[lang]) return;
    const t = data[lang];
    applyDirection(el, lang);

    const stepsHtml = t.steps.map(s => `<div class="fs-step">${s}</div>`).join('');

    el.innerHTML = `
        <div class="fs-titel">${t.title}</div>
        <div class="fs-steps">${stepsHtml}</div>
    `;
}

// ============================================================
// VYKORT 3 — Frihetstrappan (tabell)
// ============================================================
async function fillFreedomStaircase(el, lang) {
    const data = await fetchJson('freedom_staircase');
    if (!data || !data[lang]) return;
    const t = data[lang];
    applyDirection(el, lang);

    const headers = t.headers.map(h => `<th>${h}</th>`).join('');
    const rows = t.rows.map(row =>
        '<tr>' + row.map(cell => `<td>${cell}</td>`).join('') + '</tr>'
    ).join('');

    el.innerHTML = `
        <div class="fs-titel">${t.title}</div>
        <table class="fs-tabell">
            <thead><tr>${headers}</tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

// ============================================================
// VYKORT 2 — Slogan & Quote
// ============================================================
async function fillSloganQuote(el, lang) {
    const data = await fetchJson('slogan_quote');
    if (!data || !data[lang]) return;
    const t = data[lang];
    applyDirection(el, lang);

    el.innerHTML = `
        <div class="sq-slogan">${t.slogan}</div>
        <div class="sq-quote">${t.quote}</div>
        <div class="sq-ending">${t.ending}</div>
    `;
}

// ============================================================
// HUVUDFUNKTION — kör när DOM är klar
// ============================================================
document.addEventListener('DOMContentLoaded', async function() {
    const lang = getCurrentLang();

    const elements = document.querySelectorAll('[data-postcard]');

    for (const el of elements) {
        const type = el.getAttribute('data-postcard');

        try {
            switch (type) {
                case 'machine_constitution':
                    await fillMachineConstitution(el, lang);
                    break;
                case 'four_steps':
                    await fillFourSteps(el, lang);
                    break;
                case 'freedom_staircase':
                    await fillFreedomStaircase(el, lang);
                    break;
                case 'slogan_quote':
                    await fillSloganQuote(el, lang);
                    break;
                default:
                    console.warn('Okänd vykortstyp:', type);
            }
        } catch (err) {
            // Ett fel i ett vykort ska inte stoppa de andra
            console.error('Fel vid ifyllning av', type, err);
        }
    }
});
