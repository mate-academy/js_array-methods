'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultStr = '';
    this.forEach((element, index, array) => {
      resultStr += (element !== undefined && element !== null)
        ? element.toString()
        : '';
      if (index !== array.length - 1) resultStr += separator;
    });
    return resultStr;
  };
}

module.exports = applyCustomJoin;
