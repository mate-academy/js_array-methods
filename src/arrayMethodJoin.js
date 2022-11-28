'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayToString = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'string' || typeof this[i] === 'number'
      || typeof this[i] === 'boolean') {
        arrayToString += this[i];
      } else {
        arrayToString += '';
      }

      if (i !== this.length - 1) {
        arrayToString += separator;
      }
    }

    return arrayToString;
  };
}

module.exports = applyCustomJoin;
