/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      const value = this[i];

      if (value !== null && value !== undefined) {
        joinedString += value;
      }

      if (i < this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
