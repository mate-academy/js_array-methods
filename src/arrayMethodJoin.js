'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (separator === null) {
      for (let i = 0; i < this.length; i++) {
        result += (i !== this.length - 1)
          ? this[i] + String(separator) : this[i];
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        if (this[i] !== null && this[i] !== undefined) {
          result += (i !== this.length - 1)
            ? this[i] + separator : this[i];
        } else {
          result += (i !== this.length - 1)
            ? '' + separator : '';
        }
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
