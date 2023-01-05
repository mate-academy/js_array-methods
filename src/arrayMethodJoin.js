'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === null) {
        if (i === this.length - 1) {
          result += this[i];
          break;
        }

        result += this[i] + 'null';
        continue;
      }

      if (i !== this.length - 1) {
        if (this[i] === null
          || this[i] === undefined) {
          result += separator;
          continue;
        }

        result += this[i] + separator;
      } else if (i === this.length - 1
        && this[i] === undefined) {
        break;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
