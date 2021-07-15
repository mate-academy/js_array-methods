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
        stringResult += this[i];
      } else if (separator) {
        stringResult += elementThis + separator;
      } else if (separator === null) {
        stringResult += elementThis + 'null';
      } else if (separator === '') {
        stringResult += elementThis + '';
      }
    }

    return stringResult;
  };
}

module.exports = applyCustomJoin;
