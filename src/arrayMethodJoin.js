'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 1) {
      return result + this[0];
    }

    if (separator === null) {
      for (let i = 0; i < this.length; i++) {
        result += (this[i] + 'null');
        if (i === this.length - 2) {
          result += this[this.length - 1];
          return result;
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || (this[i] === undefined)) {
        this[i] = '';
      }

      result += (this[i] + separator);
      if (i === this.length - 2) {
        result += this[this.length - 1];
        return result;
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
