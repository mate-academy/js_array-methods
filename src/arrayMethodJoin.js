'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 1) {
      return this.toString();
    }

    let arrayToString = '';

    if (separator === undefined) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] !== undefined && this[i] !== null) {
        arrayToString += this[i];
        continue;
      }

      if (i === this.length - 1 && this[i] === undefined) {
        arrayToString += '';
        continue;
      }

      if (this[i] === undefined || this[i] === null) {
        arrayToString += '' + separator;
        continue;
      }

      arrayToString += `${this[i]}${separator}`;
    }

    return arrayToString;
  };
}
module.exports = applyCustomJoin;
