'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorStr = `${separator}`;
    let joinedString = '';

    const length = this.length;

    for (let i = 0; i < length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i === length - 1) {
        joinedString += element;
        continue;
      }

      joinedString += element + separatorStr;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
