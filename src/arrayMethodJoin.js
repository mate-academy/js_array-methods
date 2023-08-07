'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const currentArrayLength = this.length;
    const joinSeparator = String(separator);
    let resultingString = '';

    if (!currentArrayLength) {
      return resultingString;
    }

    this.forEach((item, index) => {
      let stringCharacter = item;

      if (item === null || item === undefined) {
        stringCharacter = '';
      }

      if (currentArrayLength - 1 === index) {
        resultingString += stringCharacter;
      } else {
        resultingString += stringCharacter + joinSeparator;
      }
    });

    return resultingString;
  };
}

module.exports = applyCustomJoin;
