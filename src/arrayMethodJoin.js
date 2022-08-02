'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    for (let el = 0; el < this.length - 1; el++) {
      if (this.length === 1) {
        return `${this[0]}`;
      }

      if ((this[el] === undefined || this[el] === null)) {
        newStr += sep;
        continue;
      }

      newStr += this[el] + sep;
    }

    if (this[this.length - 1] !== undefined) {
      newStr += this[this.length - 1];
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
