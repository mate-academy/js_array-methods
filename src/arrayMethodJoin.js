'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (let i = 0; i < this.length; i++) {
      const currentItem = this[i];
      const wrongTypeItem = (this[i] === undefined || this[i] === null);
      const joinedItem = wrongTypeItem ? '' : currentItem;

      resultingString += joinedItem;

      if (i !== this.length - 1) {
        resultingString += separator;
      }
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
