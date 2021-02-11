'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let resultOfMerger = this[0];

    for (let i = 1; i < this.length; i++) {
      if (resultOfMerger === null) {
        resultOfMerger = '';
      }

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        resultOfMerger += `${separator}` + this[i];
      } else {
        resultOfMerger += separator + this[i];
      }
    }

    return resultOfMerger.toString();
  };
}

module.exports = applyCustomJoin;
