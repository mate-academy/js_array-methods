'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let updatedArrayData = '';
    // let arrayValue;

    for (let i = 0; i < this.length; i++) {
      const currentItem = this[i];

      if (currentItem !== null && currentItem !== undefined) {
        updatedArrayData += currentItem;
      }

      if (i !== this.length - 1) {
        updatedArrayData += separator;
      }
    }

    return updatedArrayData;
  };
}

module.exports = applyCustomJoin;
