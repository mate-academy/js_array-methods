'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const readySeparator = separator !== undefined ? String(separator) : ',';

    for (let i = 0; i < this.length; i++) {
      const value = this[i] === undefined || this[i] === null ? '' : this[i];

      result += i === 0 ? value : readySeparator + value;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
