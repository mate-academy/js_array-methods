'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';

    if (this[0] === undefined || this[0] === null) {

    } else {
      res = this[0];
    }

    let sep = separator;

    if (separator === null) {
      sep = 'null';
    } else if (separator === undefined) {
      sep = ',';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        res += sep;
      } else {
        res += sep + this[i];
      }
    }

    return res.toString();
  };
}

module.exports = applyCustomJoin;
