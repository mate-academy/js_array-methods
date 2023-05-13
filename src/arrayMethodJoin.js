'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let updatedData = '';
    const separatorToStr = String(separator);
    let arrayValue;

    for (let i = 0; i < this.length; i++) {
      arrayValue = this[i];

      if (arrayValue !== null && arrayValue !== undefined) {
        updatedData += arrayValue;
      }

      if (i !== this.length - 1) {
        updatedData += separatorToStr;
      }
    }

    return updatedData;
  };
}

module.exports = applyCustomJoin;
