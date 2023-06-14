'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const indexOfLastElem = this.length - 1;
    let joinResult = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      const lastElement = (i === indexOfLastElem);
      const invalidEl = (element === null || element === undefined);

      joinResult += invalidEl ? '' : element;
      joinResult += lastElement ? '' : separator;
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
