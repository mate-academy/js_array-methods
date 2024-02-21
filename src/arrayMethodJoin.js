'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';
    const separatorItem = '' + separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultStr += separatorItem;
      } else {
        resultStr += this[i] + separatorItem;
      }
    }

    return resultStr.slice(0, resultStr.length - separatorItem.length);
  };
}

module.exports = applyCustomJoin;
