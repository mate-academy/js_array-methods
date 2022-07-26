'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let valueOfSeparator = separator;
    let result = '';

    if (this.length === 1) {
      result += this[0];

      return result;
    }

    for (let index = 0; index < this.length; index++) {
      if (this[index] === null || this[index] === undefined) {
        if (index === (this.length - 1)) {
          this[index] = '';
          result += this[index];
        } else {
          this[index] = valueOfSeparator;
          result += this[index];
        }

      } else if (index === (this.length - 1)) {
        result += String(this[index]);
      } else {
        switch (valueOfSeparator) {
          case undefined:
            result += String(this[index]);
            valueOfSeparator = ',';
            result += valueOfSeparator;
            break;

          default:
            result += String(this[index]);
            result += valueOfSeparator;
            break;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
