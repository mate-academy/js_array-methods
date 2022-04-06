'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case null:
        case undefined:
          str += '';
          break;
        default:
          str += this[i];
      }

      if (i !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}
module.exports = applyCustomJoin;
