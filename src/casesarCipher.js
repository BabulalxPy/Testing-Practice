function caesarCipher(str, shift) {
  // Normalize shift to be between 0 and 25
  const n = ((shift % 26) + 26) % 26;

  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Handle Uppercase (ASCII 65-90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
      }
      // Handle Lowercase (ASCII 97-122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
      // Leave non-alphabetic characters unchanged
      return char;
    })
    .join("");
}

module.exports = caesarCipher;
