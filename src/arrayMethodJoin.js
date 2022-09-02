'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let finalString = '';
    let newSeparator = separator;
    let counter = 0;

    if (separator === undefined) {
      newSeparator = ',';
    }

    for (let key of this) {
      if (key === null || key === undefined) {
        key = '';
      }

      if ((this.length - 1) === counter) {
        finalString += `${key}`;
      } else {
        finalString += `${key}${newSeparator}`;
        counter++;
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
