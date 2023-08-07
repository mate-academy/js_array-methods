/* eslint-disable space-before-function-paren */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    let arrayToString = '';

    for (let i = 0; i < this.length; i++) {
      const arrayItem = this[i];

      if (arrayItem !== null && arrayItem !== undefined) {
        arrayToString += arrayItem;
      }

      if (i !== this.length - 1) {
        arrayToString += separator;
      }
    };

    return arrayToString;
  };
}
module.exports = applyCustomJoin;
