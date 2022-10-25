'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';
    const stringSep = typeof (separator) === typeof (undefined)
      ? ','
      : String(separator);

    for (let x = 0; x < this.length; x++) {
      if (this[x] === undefined || this[x] === null) {
        this[x] = '';
      }

      res += this[x]
      + (x === this.length - 1
        ? ''
        : stringSep);
    }

    return res;
  };
}

module.exports = applyCustomJoin;
