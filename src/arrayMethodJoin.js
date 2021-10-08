'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = String(this[0]);

    if (this[0] === null || this[0] === undefined) {
      result = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (separator === undefined) {
        result += ',' + String(this[i]);
      } else if (this[i] === null || this[i] === undefined) {
        result += (String(separator) + '');
      } else {
        result += (String(separator) + String(this[i]));
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
