'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = ``;

    if (this[0] !== undefined && this[0] !== null) {
      newStr += `${this[0]}`;
    }

    let el;

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        el = this[i];
      } else {
        el = '';
      }

      newStr += `${separator}` + el;
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
