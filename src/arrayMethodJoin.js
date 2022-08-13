'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        if (this[i] !== null && this[i] !== undefined
          && separator !== undefined) {
          string += this[i].toString() + separator;
        } else {
          if (separator !== undefined) {
            string += separator;
          }
        }
      } else {
        if (this[i] !== undefined) {
          string += this[i];
        }
      }
    }

    return string;
  };
}
module.exports = applyCustomJoin;
