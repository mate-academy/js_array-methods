'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let stringJoin = '';

    for (let i = 0; i < this.length; i++) {
      const THIS_ITEM = this[i];

      if (THIS_ITEM !== null && THIS_ITEM !== undefined) {
        stringJoin += `${THIS_ITEM}`;
      }

      if (i !== this.length - 1) {
        stringJoin += separator;
      }
    }

    return stringJoin;
  };
};

module.exports = applyCustomJoin;
