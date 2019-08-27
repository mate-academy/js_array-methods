'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = ``;

    for (let i = 0; i < this.length; i++) {
      const intermidiateVar = this[i] == null || undefined
        ? ''
        : this[i];

      resultStr = i !== 0
        ? `${resultStr}${separator}${intermidiateVar}`
        : `${intermidiateVar}`;
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
