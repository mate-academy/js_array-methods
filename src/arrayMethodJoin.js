'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += separator;
        continue;
      }

      string += this[i];

      if (i < this.length - 1) {
        string += separator;
      }
    }

    const lastElement = this[this.length - 1];

    if (lastElement === undefined || isNaN(lastElement)) {
      string = string.slice(0, -1);
    }

    return string;
  };
}

module.exports = applyCustomJoin;
