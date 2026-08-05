// author.js - Hanterar författarnamnet och dess omgivande tomrader

// Själva namnet (sätt till null eller tom sträng för att dölja)
const AUTHOR_NAME = "Sven Yngerstedt";

// Generera HTML för författarsektionen
function getAuthorHTML() {
    if (AUTHOR_NAME && AUTHOR_NAME.trim() !== "") {
        // Om namn finns: returnera namn med två tomrader före och en efter
        return `<div class="author-section">
                    <br><br>
                    <p class="author">${AUTHOR_NAME}</p>
                    <br>
                </div>`;
    } else {
        // Om inget namn: returnera bara två tomrader (för att behålla layouten)
        return `<div class="author-section">
                    <br><br>
                </div>`;
    }
}
