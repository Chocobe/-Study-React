const regExpForSplit = /(^[a-z])|[A-Z]/g
const regExpForParsing = /[A-Z]/g

const parseCamelToPascal = (camelCaseValue: string) => {
  const words = camelCaseValue.split(regExpForSplit);

  return words
    .filter(word => word)
    .map((curWord, index) => {
      if (index === 0 || regExpForParsing.test(curWord)) {
        return curWord.toUpperCase();
      } else {
        return curWord;
      }
    })
    .join("");
};

export default parseCamelToPascal;