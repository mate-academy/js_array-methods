'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strElements = '';

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i === this.length - 1) {
          strElements += this[i];
        } else {
          strElements += this[i] + `${separator}`;
        }
      } else {
        strElements += `${separator}`;
      }
    }

    return strElements;
  };
};

module.exports = applyCustomJoin;
