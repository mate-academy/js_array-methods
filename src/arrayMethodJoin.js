'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const clearedArr = this
      .map((item) => item === null || item === undefined ? '' : item);
    let joinString = clearedArr[0];
    let joinSeparator = separator;

    if (this.length <= 1) {
      return this.toString();
    }

    joinSeparator = joinSeparator === undefined ? ',' : joinSeparator + '';

    for (let i = 1; i < clearedArr.length; i++) {
      joinString += joinSeparator + clearedArr[i];
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
