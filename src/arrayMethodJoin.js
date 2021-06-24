'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null) {
        this[i] = '';
      } else if (this[i] === true) {
        this[i] = 'true';
      } else if (this[i] === false) {
        this[i] = 'false';
      } else if (this[i] === undefined) {
        this[i] = '';
      } else if (this[i] === 'null') {
        this[i] = 'null';
      } else if (isNaN(this[i])) {
        this[i] = 'NaN';
      }

      result += this[i];

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
