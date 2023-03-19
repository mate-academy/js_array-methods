'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    if (this.length !== 0) {
      for (let i = 0; i < this.length; i++) {
        resultStr += this[i] === undefined || this[i] === null ? '' : this[i];

        if (i !== this.length - 1) {
          resultStr += separator;
        }
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
