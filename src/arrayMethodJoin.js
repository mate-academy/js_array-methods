'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const readySeparator = separator !== undefined ? String(separator) : ',';

    for (let i = 0; i < this.length; i++) {
      let value = this[i];

      if (value === undefined || value === null) {
        value = '';
      }

      if (i === 0) {
        result += value;
      } else {
        result += readySeparator + value;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
