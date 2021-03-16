'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }

      if (separator === null) {
        string += this[i] <= (this.length - 2) ? this[i] + 'null' : this[i];
      } else {
        string += this[i] <= (this.length - 2) ? this[i] + separator : this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
