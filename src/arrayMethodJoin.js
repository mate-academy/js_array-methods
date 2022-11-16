'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === 0) {
        string += this[i].toString();
      } else {
        string += separator + this[i].toString();
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
