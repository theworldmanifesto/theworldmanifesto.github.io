// author.js - Hanterar författarnamnet och dess omgivande tomrader

// Själva namnet (sätt till null eller tom sträng för att dölja)
const AUTHOR_NAME = "Sven Yngerstedt";

// Generera HTML för författarsektionen
function getAuthorHTML() {
    if (AUTHOR_NAME && AUTHOR_NAME.trim() !== "") {
        // Om namn finns: två tomrader före + namn + en tomrad efter
        return `
            <br><br>
            <p class="author">${AUTHOR_NAME}</p>
            <br>
        `;
    } else {
        // Om inget namn: bara två tomrader (för att behålla layouten)
        return `
            <br><br>
        `;
    }
}
