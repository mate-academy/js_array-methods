'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let key of this) {
      if (key === null || key === undefined) {
        key = '';
      }
      result += key.toString() + separator;
    }

    switch (true) {
      case (separator === null): return result.slice(0, -4);
      case (result.length > this.length):
        return result.slice(0, -separator.toString().length);
      default: return result;
    }
  };
}

module.exports = applyCustomJoin;
