/* eslint-disable max-len */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    for (const [index, elem] of this.entries()) {
      if (typeof (elem) !== 'undefined' && elem !== null) { str += elem; } else { str += ''; }
      if (index !== (this.length - 1)) { str += separator; }
    }
    return str;
  };
}

module.exports = applyCustomJoin;
