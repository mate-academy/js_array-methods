'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case undefined:
          break;

        case null:
          break;

        case false:
          result += 'false';
          break;

        default:
          result += this[i];
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
