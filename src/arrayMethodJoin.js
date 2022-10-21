'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {

      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      if (this[i] !== this.length - 1 && this.length > 1 && this[i] !== '') {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
