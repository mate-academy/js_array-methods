'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(arg = ',') {
    let parsedString = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        parsedString += arg;
      } else if (i === this.length - 1) {
        parsedString += this[i];
      } else {
        parsedString += '' + this[i] + arg;
      }
    }
    return parsedString;
  };
}
module.exports = applyCustomJoin;
