'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayJoin = '';
    const arrayLength = this.length;

    if (!arrayLength) {
      return '';
    }

    for (let i = 0; i < arrayLength; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        arrayJoin += this[i];
      }

      if (i !== arrayLength - 1) {
        arrayJoin += separator;
      }
    }

    return arrayJoin;
  };
}

module.exports = applyCustomJoin;
