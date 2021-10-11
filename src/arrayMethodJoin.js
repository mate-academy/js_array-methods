'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      let word = this[i];

      if (word === null || word === undefined) {
        word = '';
      }

      if (i !== this.length - 1) {
        resultString += word + `${separator}`;
      } else {
        resultString += word;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
