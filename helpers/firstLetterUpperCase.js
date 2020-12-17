export const toFirstLetterUpperCase = (letters) => {
  return letters.replace(/\b[a-z]/, (letter) => letter.toUpperCase());
};
