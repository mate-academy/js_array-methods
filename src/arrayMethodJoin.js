'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';
    const lastItem = this.length - 1;

    for (let i = 0; i < lastItem; i++) {
      resStr += this[i] != null ? this[i] : '';
      resStr += separator;
    }

    return resStr + (this[lastItem] || '');
  };
}

module.exports = applyCustomJoin;
