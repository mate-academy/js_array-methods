'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const clearArr = this
      .map((item) => item === null || item === undefined ? '' : item);
    let joinSeparator = separator;
    let joinString = clearArr[0];

    if (this.length <= 1) {
      return this.toString();
    }

    joinSeparator === undefined ? joinSeparator = ',' : joinSeparator += '';

    for (let i = 1; i < clearArr.length; i++) {
      joinString += joinSeparator + clearArr[i];
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
