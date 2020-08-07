/* eslint-disable no-console */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const len = this.length;
    let result = '';
    let valueToAdd;

    for (let i = 0; i < len; i++) {
      if (this[i] == null || typeof this[i] === 'undefined') {
        valueToAdd = '';
      } else {
        valueToAdd = this[i];
      }

      if (i !== len - 1) {
        result += valueToAdd + String(separator);
      } else {
        result += valueToAdd;
      }
    }

    return result;
  };
};

const source = [null, null, 1, 2, undefined, null];

applyCustomJoin();

source.join2(',');

module.exports = applyCustomJoin;
