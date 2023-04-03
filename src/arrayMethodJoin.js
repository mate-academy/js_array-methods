'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length > 0) {
      for (let key = 0; key < this.length; key++) {
        if (this[key] !== undefined && this[key] !== null) {
          string += this[key];
        }

        if (key < this.length - 1) {
          string += separator;
        }
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
