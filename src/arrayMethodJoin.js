'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let word = this[i];

      if (word === null || word === undefined) {
        word = '';
      }

      if (i === this.length - 1) {
        result += word;

        return result;
      }

      result += `${word}` + separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
