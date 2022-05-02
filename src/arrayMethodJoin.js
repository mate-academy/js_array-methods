'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separator2 = separator;

    if (separator2 === null) {
      separator2 = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      result += this[i];

      if (i !== this.length - 1) {
        result += separator2;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
