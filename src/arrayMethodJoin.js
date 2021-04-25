'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const resArr = [];
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (i === (this.length - 1)) {
        resArr.push(this[i]);
      } else {
        if (this[i] === undefined) {
          resArr.push(separator);
        } else if (this[i] === null) {
          resArr.push(separator);
        } else {
          resArr.push(this[i]);
          resArr.push(separator);
        }
      }
    }

    for (const el of resArr) {
      res += el;
    }

    return res;
  };
}

module.exports = applyCustomJoin;
