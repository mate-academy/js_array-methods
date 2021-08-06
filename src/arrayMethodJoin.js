'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    for (const item of this) {
      if (item === null || item === undefined) {
        joinedArray += '' + separator;
      } else {
        if (item !== this[this.length - 1]) {
        }
        joinedArray += item + '' + separator;
      }
    }

    if (joinedArray[joinedArray.length - 1] === separator) {
      joinedArray = joinedArray.slice(0, -1);
    }

    if (separator === null) {
      joinedArray = joinedArray.slice(0, -4);
    }

    if (typeof separator === 'object' && separator !== null) {
      joinedArray = joinedArray.slice(0, -15);
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
