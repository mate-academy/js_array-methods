'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let arrToString = '';
    let newSeparator = separator;

    if (separator === undefined) {
      newSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === undefined) || (this[i] === null)) {
        arrToString += '';
      } else {
        arrToString += this[i];
      }

      if (i < this.length - 1) {
        arrToString += newSeparator;
      }
    }

    return arrToString;
  };
}

module.exports = applyCustomJoin;
