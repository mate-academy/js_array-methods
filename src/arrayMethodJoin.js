'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += ',';
        continue;
      }

      if (i === this.length - 1) {
        result += this[i];
        break;
      }

      result += this[i] + separator;

      if (separator === null) {
        result += 'null';
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
