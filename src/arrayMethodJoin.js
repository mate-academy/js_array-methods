'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    this.forEach((val, i, arr) => {
      if (i === arr.length - 1) {
        res += String(val);

        return;
      }

      if (val === null || val === undefined) {
        res += '' + separator;
      } else {
        res += String(val) + separator;
      }
    });

    return res;
  };
}

module.exports = applyCustomJoin;
