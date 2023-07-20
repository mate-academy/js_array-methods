/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const result = this.slice();

    let joinedString = '';

    for (let i = 0; i < result.length; i++) {
      const value = result[i];

      if (value === null || value === undefined) {
        joinedString += '';
      } else {
        joinedString += value;
      }

      if (i < result.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
