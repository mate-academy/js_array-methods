'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // let res = this[0];
    let res = '';

    for (let elem = 0; elem < this.length; elem++) {
      if (this.length === 1) {
        res = String(this[elem]);
      } else {
        if (this[elem] === null || this[elem] === undefined) {
          if (elem !== 0) {
            res += `${separator}`;
          }
        } else if (res === '') {
          res += `${this[elem]}`;
        } else {
          res += `${separator}${this[elem]}`;
        }
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
