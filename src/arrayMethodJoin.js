'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const length = this.length;

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined'
      || this[i] === null) {
        this[i] = '';
      }

      if (i !== length - 1) {
        string += this[i] + String(separator);
      } else {
        string += this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
