'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    this.forEach((e, i) => {
      if (e !== null && e !== undefined) {
        str += e;
      }

      if (i !== this.length - 1) {
        str += separator;
      }
    });

    return str;
  };
}

module.exports = applyCustomJoin;
