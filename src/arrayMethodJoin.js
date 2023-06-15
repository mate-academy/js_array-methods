'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArray = [];
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        newArray[i] = '';
      } else {
        newArray[i] = this[i];
      }

      if (i !== this.length - 1) {
        str += newArray[i] + String(separator);
      } else {
        str += newArray[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
