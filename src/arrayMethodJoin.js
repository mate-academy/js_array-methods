"use strict";

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let key = 0; key < this.length; key++) {
      if (this[key] === undefined || this[key] === null) {
        this[key] = '';
      }

      if (key === this.length - 1) {
        result += this[key];
        break;
      }

      result += this[key] + `${separator}`;

      // if (this[key] === undefined || this[key] === null) {
      //   result += `${separator}`;
      // } else {
      //   result += this[key] + `${separator}`;
      // }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
