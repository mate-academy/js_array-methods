'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const joinedArr = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        joinedArr[i] = this[i];
      } else {
        if (separator === null) {
          joinedArr[i] = this[i] + 'null';
        } else {
          joinedArr[i] = this[i] + separator;
        }
      }
    }

    let str = '';

    for (const e of joinedArr) {
      str += e;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
