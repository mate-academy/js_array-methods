'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (this[i] === undefined || this[i] === null) {
        item = '';
      }

      if (i === this.length - 1) {
        resultString += `${item}`;
      } else {
        resultString += `${item}${separator}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
