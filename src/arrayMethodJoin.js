'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinToStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinToStr += separator;
      } else if (i !== this.length - 1) {
        joinToStr += `${this[i]}${separator}`;
      } else {
        joinToStr += this[i];
      }
    }

    return joinToStr;
  };
}

module.exports = applyCustomJoin;
