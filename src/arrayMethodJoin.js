'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringResult = '';

    for (let i = 0; i < this.length; i++) {
      let elementThis;

      if (this[i] === null || this[i] === undefined) {
        elementThis = '';
      } else {
        elementThis = this[i];
      }

      if (i === this.length - 1) {
        stringResult += elementThis;
      } else if (separator === null) {
        stringResult += elementThis + 'null';
      } else {
        stringResult += elementThis + separator;
      }
    }

    return stringResult;
  };
}

module.exports = applyCustomJoin;
