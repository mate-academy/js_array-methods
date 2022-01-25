'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separ = separator;
    let resultString = '';

    if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      let partOfThis = this[i];

      if (partOfThis === undefined || partOfThis === null) {
        partOfThis = '';
      }
      resultString += partOfThis + separ;
    }

    if (this[this.length - 1]) {
      resultString += this[this.length - 1];
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
