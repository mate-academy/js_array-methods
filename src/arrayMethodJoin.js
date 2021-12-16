'use strict';
/* eslint-disable no-console */

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let x = 0; x < this.length; x++) {
      if (x === this.length - 1) {
        if (this[x] === undefined) {
          result += '';
        } else {
          result += `${this[x]}`;
        }

        return result;
      }

      if (this[x] === undefined || this[x] === null) {
        result += '' + separator;
        continue;
      }

      result += `${this[x]}` + separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
