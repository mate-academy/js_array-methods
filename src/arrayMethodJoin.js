'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          break;
        }
        str += this[i].toString();
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        str += separator;
        continue;
      }

      str += this[i].toString();
      str += separator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
