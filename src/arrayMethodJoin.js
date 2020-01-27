'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const strSeparator = String(separator);

    if (!this.length) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null || this[i] === undefined)) {
        result += strSeparator;
      } else if (i !== this.length - 1) {
        result += this[i] + strSeparator;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
