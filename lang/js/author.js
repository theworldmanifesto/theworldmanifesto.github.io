// author.js - Hanterar författarnamnet och dess omgivande tomrader

// true = visa namnet från textfilen (rad 6)
// false = visa inget namn alls
const SHOW_AUTHOR = true;

// Fallback om textfilens namn saknas
const AUTHOR_NAME_FALLBACK = "Sven Yngerstedt";

function getAuthorHTML() {
    const name = (typeof authorNameFromText !== 'undefined' && authorNameFromText)
        ? authorNameFromText
        : AUTHOR_NAME_FALLBACK;

    if (SHOW_AUTHOR && name && name.trim() !== "") {
        return `
            <br><br>
            <p class="author">${name}</p>
            <br>
        `;
    } else {
        return `
            <br><br>
        `;
    }
}
