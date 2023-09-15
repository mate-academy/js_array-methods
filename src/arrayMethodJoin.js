'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const { sep } = { sep: separator === undefined ? ',' : String(separator) };

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += sep;
      }

      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        if (String(this[i]) === 'null') {
          result += 'null';
        } else {
          result += String(this[i]);
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
