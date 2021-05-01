'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    if (this.length) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] !== null && this[i] !== undefined) {
          result += this[i];
        } else {
          result += '';
        }

        if (i < this.length - 1) {
          if (separator === undefined) {
            result += ',';
          } else {
            result += separator;
          }
        }
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
