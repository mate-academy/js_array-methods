'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      const curItem = this[i] == null ? '' : this[i];

      joinedStr += curItem + (i === this.length - 1 ? '' : `${separator}`);
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
