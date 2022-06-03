'use strict';

/**
 * Implement method join
 */
applyCustomJoin();

function applyCustomJoin() {
  // const arr = [1, 6, 9, NaN, 12, undefined, null, 0, ''];

  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        str += this[i];
      }

      if (i !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };

  // console.log('join2', arr.join2());
  // console.log('join', arr.join());
}

module.exports = applyCustomJoin;
