'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const currentArrayLength = this.length;
    const joinSeparator = separator + '';
    let resultingString = '';

    if (!currentArrayLength) {
      return resultingString;
    }

    this.forEach((item, index) => {
      /* const stringCharacter = item ?? '' is the best choice,
      but I couldn`t disable eslint for the nullish operator */
      const stringCharacter = item === null || item === undefined
        ? ''
        : item;

      currentArrayLength - 1 === index
        ? resultingString += stringCharacter
        : resultingString += stringCharacter + joinSeparator;
    });

    return resultingString;
  };
}

module.exports = applyCustomJoin;
