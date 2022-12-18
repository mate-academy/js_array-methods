'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const joinArr = [];
    let sep = separator;
    let joinStr = '';

    if (sep === undefined) {
      sep = ',';
    }

    if (this.length === 0) {
      return joinStr;
    }

    joinArr.length = 2 * this.length - 1;

    for (let i = 0; i < joinArr.length; i++) {
      if (i % 2 !== 0) {
        joinArr[i] = sep;
      } else {
        const joinElement = this[i / 2];

        if ((joinElement !== null) && (joinElement !== undefined)) {
          joinArr[i] = joinElement;
        } else {
          joinArr[i] = '';
        }
      }
    }

    for (const i of joinArr) {
      joinStr += i;
    }

    return joinStr;
  };
}

module.exports = applyCustomJoin;
