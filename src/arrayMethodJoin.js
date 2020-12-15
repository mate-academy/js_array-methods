'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let stringy;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        stringy = '';
      } else {
        stringy = this[i];
      }

      if (i !== this.length - 1) {
        result += stringy + '' + separator;
      } else {
        result += stringy;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
