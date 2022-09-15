'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let index = 0;
    let concatenated = '';
    let next;

    while (index < this.length) {
      if (this[index] === undefined || this[index] === null) {
        next = '';
      } else {
        next = this[index];
      }

      concatenated += (index < this.length - 1)
        ? next + String(separator)
        : next;
      index++;
    }

    return concatenated;
  };
}

module.exports = applyCustomJoin;
