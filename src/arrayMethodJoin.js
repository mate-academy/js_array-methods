'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArray = [];
    let str = '';

    for (let i = 0; i < this.length; i++) {
      this[i] === null || this[i] === undefined
        ? newArray[i] = ''
        : newArray[i] = this[i];

      str += newArray[i] + (i !== this.length - 1 ? String(separator) : '');
    }

    return str;
  };
}

module.exports = applyCustomJoin;
