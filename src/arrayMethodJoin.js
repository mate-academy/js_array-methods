'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(valueBetweenElements = ',') {
    const elementBetweenItem = valueBetweenElements + '';
    let str = '';
    if (!this.length) {
      return str;
    }
    for (let i = 0; i < this.length; i++) {
      const itemOfArray = this[i];
      if (itemOfArray === null || itemOfArray === undefined) {
        str += elementBetweenItem;
        continue;
      }
      if (i === 0) {
        str += itemOfArray;
        continue;
      }

      str += elementBetweenItem + itemOfArray;
    }
    return str;
  };
}

module.exports = applyCustomJoin;
