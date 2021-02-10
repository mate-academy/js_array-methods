'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this) {
      return '';
    }

    let firstElement = this[0];

    if (this.length > 1) {
      for (let i = 1; i < this.length; i++) {
        if (firstElement === null) {
          firstElement = '';
        }

        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }

        if (separator === null) {
          firstElement += `${separator}` + this[i];
        } else {
          firstElement += separator + this[i];
        }
      }

      return firstElement;
    } else {
      return this.toString();
    }
  };
}

module.exports = applyCustomJoin;
