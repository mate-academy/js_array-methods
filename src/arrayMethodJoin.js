'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] == null || undefined) {
        this[i] = '';
      }

      const newStr = `${this[i]}` + `${i === this.length - 1 ? '' : separator}`;

      str += newStr;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
