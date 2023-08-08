'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const joinSeparator = String(separator);
    let resultingString = '';

    this.forEach((item, index) => {
      let stringCharacter = item;

      if (item === null || item === undefined) {
        stringCharacter = '';
      }

      if (this.length - 1 === index) {
        resultingString += stringCharacter;

        return;
      }

      resultingString += stringCharacter + joinSeparator;
    });

    return resultingString;
  };
}

module.exports = applyCustomJoin;
