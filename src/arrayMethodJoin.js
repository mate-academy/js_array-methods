'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this[0] + '';
    }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof separator === 'string') {
        if ((this[i] === undefined) || (this[i] === null)) {
          this[i] = '';
        }
      }

      if (i === this.length - 1) {
        string += this[i];
      } else {
        string += this[i] + `${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
