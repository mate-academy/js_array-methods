/* eslint-disable no-console */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const len = this.length;
    let str = '';

    for (let i = 0; i < len; i++) {
      if (this[i] == null || typeof this[i] === 'undefined') {
        str += String(separator);
      } else {
        str += this[i];

        if (i !== len - 1) {
          str += String(separator);
        }
      }
    }

    return str;
  };
}

applyCustomJoin();

console.log([null, null, 1, undefined, 0, NaN, ''].join2(','));

module.exports = applyCustomJoin;
