'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      let tmp = this[i];

      if (tmp === undefined || tmp === null) {
        tmp = '';
      }

      str = str + tmp;

      if (i !== this.length - 1) {
        str = str + separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
