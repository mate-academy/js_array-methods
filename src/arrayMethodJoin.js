'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arr = '';
    const separatorString = separator + '';

    for (let i = 0; i < this.length; i++) {
      arr += (this[i] === undefined || this[i] === null ? '' : this[i])
      + (i < this.length - 1 ? separatorString : '');
    }

    return arr;
  };
}

module.exports = applyCustomJoin;
