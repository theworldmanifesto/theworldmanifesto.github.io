/*
  Världsmanifestet - FINAL COMPLETE UTAN localStorage-minne
  CC0 1.0 Universal - Public Domain
  https://creativecommons.org/publicdomain/zero/1.0/

  Denna fil gör 1 sak:
  1. Automatisk detektering av 324+ dialekter -> dina 42 språk
  Ingen lagring, varje besök går på webbläsarens språk + fallback.
  Baskiska eu -> es, galiciska gl -> es, katalanska ca -> es,
  Åland sv-ax -> sv, meänkieli fkv -> fit, alla samiska -> se osv.
*/

export const AVAILABLE = [
  'sv','en','zh','hi','es','fr','ar','id','bn','pt','ru','uk','bg','ur','ja','fil','de','ko','th','vi','tr','fa','sw','it','pl','nl','ro','el','af','zu','xh','cs','hu','he','crs','se','fit','no','fi','da','is','fo'
];

export const RELATED_FALLBACK = {
  "af-za": "af", "af-na": "af",
  "an": "es", "an-es": "es",
  "ar-eg": "ar", "ar-sa": "ar", "ar-dz": "ar", "ar-ma": "ar", "ar-iq": "ar", "ar-sy": "ar", "ar-lb": "ar", "ar-jo": "ar", "ar-ps": "ar", "ar-ye": "ar", "ar-om": "ar", "ar-ae": "ar", "ar-qa": "ar", "ar-bh": "ar", "ar-kw": "ar", "ar-ly": "ar", "ar-tn": "ar", "ar-sd": "ar", "ar-so": "ar", "ary": "ar", "arz": "ar", "apc": "ar", "aeb": "ar", "acm": "ar",
  "ast": "es", "ast-es": "es",
  "az": "tr", "az-az": "tr", "az-ir": "tr",
  "be": "uk", "be-by": "uk",
  "bg-bg": "bg",
  "bn-bd": "bn", "bn-in": "bn", "rkt": "bn",
  "ca": "es", "ca-ad": "es", "ca-es": "es", "ca-fr": "es", "ca-it": "es", "ca-valencia": "es",
  "ceb": "fil",
  "co": "it",
  "crh": "tr",
  "crs": "crs", "crs-sc": "crs",
  "cs-cz": "cs",
  "da-dk": "da", "da-gl": "da",
  "de-at": "de", "de-be": "de", "de-ch": "de", "de-de": "de", "de-li": "de", "bar": "de", "gsw": "de", "ksh": "de", "nds": "de",
  "el-gr": "el", "el-cy": "el", "grc": "el",
  "en-au": "en", "en-bz": "en", "en-ca": "en", "en-gb": "en", "en-gh": "en", "en-gy": "en", "en-hk": "en", "en-ie": "en", "en-in": "en", "en-jm": "en", "en-ke": "en", "en-mt": "en", "en-mw": "en", "en-my": "en", "en-ng": "en", "en-nz": "en", "en-ph": "en", "en-pk": "en", "en-sg": "en", "en-tt": "en", "en-tz": "en", "en-ug": "en", "en-us": "en", "en-za": "en", "ang": "en", "enm": "en", "sco": "en",
  "es-419": "es", "es-ar": "es", "es-bo": "es", "es-bz": "es", "es-cl": "es", "es-co": "es", "es-cr": "es", "es-cu": "es", "es-do": "es", "es-ec": "es", "es-es": "es", "es-gq": "es", "es-gt": "es", "es-hn": "es", "es-mx": "es", "es-ni": "es", "es-pa": "es", "es-pe": "es", "es-ph": "es", "es-pr": "es", "es-py": "es", "es-sv": "es", "es-us": "es", "es-uy": "es", "es-ve": "es", "eu": "es", "eu-es": "es", "eu-fr": "es", "ext": "es", "lad": "es", "gl-es": "es", "oc": "es", "oc-ar": "es", "oc-es": "es",
  "fa-af": "fa", "fa-ir": "fa", "ckb": "fa", "prs": "fa", "tg": "fa", "tg-tj": "fa",
  "fi-fi": "fi",
  "fil-ph": "fil", "tl": "fil", "tl-ph": "fil", "ilo": "fil",
  "fit": "fit", "fit-fi": "fit", "fit-no": "fit", "fit-se": "fit", "fi-se-tornio": "fit", "fi-tornio": "fit", "fkv": "fit", "fkv-fi": "fit", "fkv-no": "fit", "kvk": "fit",
  "fo": "fo", "fo-dk": "fo", "fo-fa": "fo", "fo-fare": "fo", "fo-fo": "fo", "fo-gl": "fo", "fo-no": "fo", "fo-se": "fo", "fao": "fo",
  "fr-be": "fr", "fr-bf": "fr", "fr-ca": "fr", "fr-cd": "fr", "fr-cg": "fr", "fr-ch": "fr", "fr-ci": "fr", "fr-cm": "fr", "fr-fr": "fr", "fr-gn": "fr", "fr-ht": "fr", "fr-lu": "fr", "fr-mc": "fr", "fr-ml": "fr", "fr-ne": "fr", "fr-pf": "fr", "fr-rw": "fr", "fr-sn": "fr", "fr-td": "fr",
  "fy": "nl",
  "gl": "es",
  "gag": "tr",
  "gn": "es", "gn-py": "es", "gug": "es",
  "he-il": "he", "yi": "he",
  "hi-in": "hi", "bho": "hi", "hif": "hi",
  "ht": "crs",
  "hu-hu": "hu",
  "id-id": "id", "ms": "id", "ms-bn": "id", "ms-id": "id", "ms-my": "id", "ms-sg": "id", "ind": "id", "zsm": "id",
  "is-is": "is",
  "it-ch": "it", "it-it": "it", "it-sm": "it", "it-va": "it", "lmo": "it", "scn": "it", "vec": "it",
  "ja-jp": "ja",
  "ko-kp": "ko", "ko-kr": "ko",
  "lmo": "it",
  "mfe": "crs",
  "ms": "id",
  "mwl": "pt",
  "nb": "no", "nb-no": "no", "nn": "no", "nn-no": "no", "no-no": "no", "nob": "no", "nno": "no",
  "nl-be": "nl", "nl-nl": "nl", "zea": "nl",
  "pl-pl": "pl", "szl": "pl",
  "pt-ao": "pt", "pt-br": "pt", "pt-ch": "pt", "pt-cv": "pt", "pt-gw": "pt", "pt-lu": "pt", "pt-mo": "pt", "pt-mz": "pt", "pt-pt": "pt", "pt-st": "pt", "pt-tl": "pt",
  "qu": "es", "qu-bo": "es", "qu-ec": "es", "qu-pe": "es", "quz": "es", "qve": "es", "qwh": "es",
  "ro-md": "ro", "ro-ro": "ro", "mo": "ro", "rup": "ro",
  "ru-by": "ru", "ru-kg": "ru", "ru-kz": "ru", "ru-md": "ru", "ru-ru": "ru", "ru-ua": "ru",
  "scn": "it",
  "se": "se", "se-fi": "se", "se-no": "se", "se-se": "se", "sia": "se", "sjd": "se", "sjd-ru": "se", "sje": "se", "sje-no": "se", "sje-se": "se", "sjk": "se", "sjt": "se", "sju": "se", "sju-no": "se", "sju-se": "se", "sma": "se", "sma-no": "se", "sma-se": "se", "sme": "se", "smi": "se", "smi-fi": "se", "smi-no": "se", "smi-ru": "se", "smi-se": "se", "smj": "se", "smj-no": "se", "smj-se": "se", "smn": "se", "smn-fi": "se", "sms": "se", "sms-fi": "se", "sms-no": "se", "sms-ru": "se",
  "sk": "cs", "sk-sk": "cs",
  "sv-ax": "sv", "sv-fi": "sv", "sv-se": "sv",
  "sw-cd": "sw", "sw-ke": "sw", "sw-tz": "sw", "sw-ug": "sw",
  "th-th": "th",
  "tr-cy": "tr", "tr-tr": "tr",
  "uk-ua": "uk", "rue": "uk",
  "ur-in": "ur", "ur-pk": "ur",
  "vi-vn": "vi",
  "wuu": "zh", "yue": "zh", "yue-hk": "zh",
  "zh-cn": "zh", "zh-hans": "zh", "zh-hant": "zh", "zh-hk": "zh", "zh-mo": "zh", "zh-sg": "zh", "zh-tw": "zh",
  "zu-za": "zu",
  "xh-za": "xh"
};

// UTAN minne - varje besök går på webbläsarens språk
export function pickBestLanguage(available = AVAILABLE, preferred = []) {
  const prefs = (preferred.length ? preferred : (typeof navigator !== 'undefined' ? (navigator.languages || [navigator.language]) : [])).map(s => String(s).toLowerCase());
  for (const raw of prefs) {
    const tag = raw.toLowerCase().trim();
    if (!tag) continue;
    if (available.includes(tag)) return tag;
    const base = tag.split('-')[0];
    if (available.includes(base)) return base;
    if (RELATED_FALLBACK[tag] && available.includes(RELATED_FALLBACK[tag])) return RELATED_FALLBACK[tag];
    if (RELATED_FALLBACK[base] && available.includes(RELATED_FALLBACK[base])) return RELATED_FALLBACK[base];
    try {
      const max = new Intl.Locale(tag).maximize();
      if (available.includes(max.language)) return max.language;
    } catch(e) {}
  }
  return available.includes('en') ? 'en' : available[0];
}
