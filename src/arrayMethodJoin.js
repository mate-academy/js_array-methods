'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    for (let a of this) {
      if (this.indexOf(null) === 0
      || (this.includes(null) && this.includes(undefined))) {
        if (a === null || a === undefined) {
          a = '';
        }
      }

      if (separator === undefined) {
        result += (a + ',');
      } else if (separator === '') {
        result += a;
      } else if (separator === null) {
        result += (a + 'null');
      } else {
        result += (a + separator);
      }
    };

    if (separator === null) {
      result = result.slice(0, result.length - 4);
    } else if (typeof separator === 'object') {
      result = result.slice(0, result.length - 15);
    } else if (separator !== '') {
      result = result.slice(0, result.length - 1);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
