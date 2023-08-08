'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (let i = 0; i < this.length; i++) {
      let stringCharacter = this[i];

      if (stringCharacter === null || stringCharacter === undefined) {
        stringCharacter = '';
      }

      if (this.length - 1 === i) {
        resultingString += stringCharacter;

        break;
      }

      resultingString += stringCharacter;
      resultingString += separator;
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
