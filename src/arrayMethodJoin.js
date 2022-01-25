'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separ = '' + separator;
    const lastChild = this[this.length - 1];
    let resultString = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultString += separ;
      } else {
        resultString += this[i] + separ;
      }
    }

    if (lastChild !== undefined && lastChild !== null) {
      resultString += lastChild;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
