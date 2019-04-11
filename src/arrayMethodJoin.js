'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(valueBetweenElements = ',') {
    if (valueBetweenElements == null) {
      valueBetweenElements = 'null';
    }
    let arrayToString = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      if (i === this.length - 1) {
        arrayToString += this[i];
        break;
      }
      arrayToString += this[i] + valueBetweenElements;
    }

    return arrayToString;
  };
}

module.exports = applyCustomJoin;
