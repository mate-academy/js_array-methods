'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length <= 1) {
      return this.toString();
    }

    let string = '';
    const divisor = separator;

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] !== 'undefined'
      && this[i] !== null) {
        string += this[i];
      }

      if (i !== this.length - 1) {
        string += divisor;
      }
    };

    return string;
  };
}

module.exports = applyCustomJoin;
