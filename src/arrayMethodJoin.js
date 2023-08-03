'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromJoinedArray = '';

    for (let i = 0; i < this.length; i++) {
      const itemContent
        = this[i] === null || this[i] === undefined
          ? ''
          : this[i];

      stringFromJoinedArray
        += i === 0
          ? itemContent
          : `${separator}` + itemContent;
    }

    return stringFromJoinedArray;
  };
}

module.exports = applyCustomJoin;
