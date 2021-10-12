'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      let elem = this[i];

      if (this[i] === null || this[i] === undefined) {
        elem = '';
      }

      if (i === this.length - 1) {
        result += elem;
      } else {
        result += elem + String(separator);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
