'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const lastIndex = this.length - 1;
    let joinedResult = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      const isLastIndex = (i === lastIndex);
      const isInvalidElement = (element === null || element === undefined);

      joinedResult += isInvalidElement ? '' : element;
      joinedResult += isLastIndex ? '' : separator;
    }

    return joinedResult;
  };
}

module.exports = applyCustomJoin;
