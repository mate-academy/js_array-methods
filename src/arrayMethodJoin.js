'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatening = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length - i === 1 && this[i] === undefined) {
        continue;
      } else if (this[i] === null || this[i] === undefined) {
        concatening += `${separator}`;
      } else if (this.length - 1 === i) {
        concatening += `${this[i]}`;
      } else {
        concatening += `${this[i]}${separator}`;
      }
    }

    return concatening;
  };
}

module.exports = applyCustomJoin;
