'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (let i = 0; i < this.length; i += 1) {
      let item = '';

      if (this[i] !== null && this[i] !== undefined) {
        item = this[i];
      }
      // const item = this[i] === null || this[i] === undefined ? "" : this[i];

      if (i === this.length - 1) {
        resultingString += `${item}`;
        continue;
      }

      resultingString += `${item}${separator}`;
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
