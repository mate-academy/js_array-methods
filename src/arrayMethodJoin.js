'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res;
    let sep = separator;

    if (separator === undefined) {
      sep = ',';
    }

    if (this[0] === undefined || this[0] == null) {
      res = '';
    } else {
      res = String(this[0]);
    }

    if (this === undefined) {
      res = '';
    } else {
      for (let i = 1; i < this.length; i++) {
        if (String(this[i]) === undefined || this[i] == null) {
          res += sep + '';
        } else {
          res += sep + String(this[i]);
        }
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
