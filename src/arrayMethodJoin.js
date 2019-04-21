'use strict';

/*
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(valueBetweenElements = ',') {
    const elementBetweenItem = valueBetweenElements + '';
    const lengthOfArray = this.length;
    let str = '';
    if (!lengthOfArray) {
      return str;
    }
    for (let i = 0; i < lengthOfArray; i++) {
      const itemOfArray = this[i];

      if (itemOfArray !== null && itemOfArray !== undefined) {
        str += itemOfArray;
      }
      if (i < lengthOfArray - 1) {
        str += elementBetweenItem;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
