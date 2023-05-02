'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 1) {
      return `${this[0]}`;
    }

    let sepr = separator;

    if (sepr === undefined) {
      sepr = ',';
    }

    let result = '';

    if (this.length > 1) {
      result += typeCheck(this[0]);

      for (let i = 1; i < this.length; i++) {
        result += `${sepr}${typeCheck(this[i])}`;
      }
    }

    function typeCheck(char) {
      if (char === undefined || char === null) {
        return '';
      } else {
        return `${char}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
