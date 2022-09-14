'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      const item = (this[i] === null || this[i] === undefined)
        ? ''
        : this[i];

      string += item;

      if (i !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
