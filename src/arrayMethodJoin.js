'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const strSeparator = String(separator);

    if (!this.length) {
      return str;
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null || this[i] === undefined)) {
        str += strSeparator;
      } else if (i !== this.length - 1) {
        str += this[i] + strSeparator;
      } else {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
