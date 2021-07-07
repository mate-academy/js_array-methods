'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let rslt = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        rslt += separator;
      } else {
        rslt += this[i];

        if (i !== this.length - 1) {
          rslt += separator;
        }
      }
    }

    return rslt;
  };
}

module.exports = applyCustomJoin;
