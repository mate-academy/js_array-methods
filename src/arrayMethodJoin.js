'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    let addToString = '';
    let sep = separator;

    if (this.length === 0) {
      return res;
    }

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === undefined) {
          res = res + '';

          return res;
        }

        res = res + this[i];

        return res;
      }

      if (this[i] === null || this[i] === undefined) {
        addToString = '' + sep;
      } else {
        addToString = this[i] + sep;
      }
      res = res + addToString;
    }

    return res;
  };
}

module.exports = applyCustomJoin;
