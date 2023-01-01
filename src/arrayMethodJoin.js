'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalStr = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === undefined || item === null) {
        item = '';
      }

      finalStr += `${item}`;

      if (i !== this.length - 1) {
        finalStr += separator;
      }
    }

    return finalStr;
  };
}

module.exports = applyCustomJoin;
