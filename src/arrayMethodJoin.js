'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';
    const joinSeparator = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      joinResult += this[i] + joinSeparator;
    }

    if (joinSeparator !== '') {
      return joinResult.substring(0, joinResult.length - joinSeparator.length);
    }

    return joinResult;
  };
}
module.exports = applyCustomJoin;
