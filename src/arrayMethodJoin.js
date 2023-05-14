'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const length = this.length;
    const separatorValue = separator;
    let result = '';

    for (let i = 0; i < length; i++) {
      let element = this[i];

      if (element === undefined || element === null) {
        element = '';
      }

      if (i === length - 1) {
        result += element;
        break;
      }
      result = result + element + separatorValue;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
