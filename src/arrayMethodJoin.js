/* eslint-disable no-console */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let valueToAdd;

    for (let i = 0; i < this.length; i++) {
      if (this[i] == null || typeof this[i] === 'undefined') {
        valueToAdd = '';
      } else {
        valueToAdd = this[i];
      }

      if (i !== this.length - 1) {
        result += valueToAdd + String(separator);
      } else {
        result += valueToAdd;
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
