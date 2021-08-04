'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resStr += separator;
        continue;
      }
      resStr += this[i];

      if (i !== this.length - 1) {
        resStr += separator;
      }
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
