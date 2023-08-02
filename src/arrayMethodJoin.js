'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this[0].toString();
    }

    let joinedStr = '';
    let separatorForFunction = separator;
    const arrForFunction = [...this];

    for (let i = 0; i < arrForFunction.length; i++) {
      if (arrForFunction[i] === null || arrForFunction[i] === undefined) {
        arrForFunction[i] = '';
      }

      if (i === arrForFunction.length - 1) {
        separatorForFunction = '';
      }

      joinedStr
        = joinedStr + arrForFunction[i].toString() + separatorForFunction;
    };

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
