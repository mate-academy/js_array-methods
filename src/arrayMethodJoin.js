/* eslint-disable no-extend-native */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(customSeparator) {
    const separator = customSeparator === undefined ? ',' : customSeparator;

    let result = '';

    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i];

      if (i !== 0) {
        result += separator;
      }

      if (currentElement !== null && currentElement !== undefined) {
        result += currentElement;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
