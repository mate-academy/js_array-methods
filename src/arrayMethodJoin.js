'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let modifiedArray = '';
    const lengthOfElements = this.length;

    for (let i = 0; i < lengthOfElements; i++) {
      const element = this[i];

      if (element !== null && element !== undefined) {
        modifiedArray += `${element}`;
      }

      if (i !== lengthOfElements - 1) {
        modifiedArray += `${separator}`;
      }
    }

    return modifiedArray;
  };
}

module.exports = applyCustomJoin;
