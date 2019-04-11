'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(arg = ',') {
    let stringFromArray = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        stringFromArray += '';
      } else {
        stringFromArray += '' + this[i];
      }
      if (i < (this.length - 1)) {
        stringFromArray += '' + arg;
      }
    }
    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
