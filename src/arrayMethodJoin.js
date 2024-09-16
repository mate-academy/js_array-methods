'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';

    for (let el = 0; el < this.length; el++) {
      if ((this[el] !== undefined && this[el] !== null)) {
        newStr += this[el];
      }

      if (el !== this.length - 1) {
        newStr += separator;
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
