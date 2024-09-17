/* eslint-disable max-len */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    for (const [index, elem] of this.entries()) {
      str = (elem !== undefined && elem !== null) ? str + elem : str;
      str = (index !== (this.length - 1)) ? str + separator : str;
    }
    return str;
  };
}

module.exports = applyCustomJoin;
