'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      if (!Object.is(this[i], null) && !Object.is(this[i], undefined)) {
        resultStr += this[i];
      }

      if (i !== (this.length - 1)) {
        resultStr += separator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
