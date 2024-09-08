export function getAllCharacters(word, usedLetters) {
    const guessedLetters = new Set(usedLetters.map(letter => letter.toUpperCase()));
    const characters = word.toUpperCase().split('').map(char => (
        guessedLetters.has(char) ? char : '_'
    ));
    return characters.join(''); // e.g., ___B_E
}
