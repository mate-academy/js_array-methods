'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length === 0) {
      return '';
    }

    for (let element = 0; element < this.length; element++) {
      if (this[element] !== null && this[element] !== undefined) {
        string += this[element];
      }

      if (element !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
};

module.exports = applyCustomJoin;
