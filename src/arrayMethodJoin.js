'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let resultString = '';

    const glue = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultString += glue;
        continue;
      }

      resultString += this[i];

      if (i !== this.length - 1) {
        resultString += glue;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
