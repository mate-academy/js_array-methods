'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      const isEmpty = typeof element === 'undefined' || element === null;

      if (i !== 0) {
        string += separator;
      }

      string += isEmpty ? '' : element;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
