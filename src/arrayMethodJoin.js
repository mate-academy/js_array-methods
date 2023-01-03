'use strict';

/**
 * Implement method join
 */

/* function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    for (const item of this) {
      if (item === null || item === undefined) {
        joinedArray += `${separator}`;
      } else {
        joinedArray += item + `${separator}`;
      }
    }

    return joinedArray.slice(0, joinedArray.length - `${separator}`.length);
  };
} */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedArray += this[i];
      }

      if (i < this.length - 1) {
        joinedArray += separator;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
