'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        const symbol = isUndefined(this[i]) || isNull(this[i]) ? '' : this[i];
        string += `${symbol}${separator}`;
      } else {
        string += this[i];
      }
    }
    return string;
  };
}

/**
 * This function checks if value is undefined.
 *
 * @param {any} value
 * @returns {boolean}
 */
function isUndefined(value) {
  return value === undefined;
}

/**
 * This function checks if value is null.
 *
 * @param {any} value
 * @returns {boolean}
 */
function isNull(value) {
  return value === null;
}

module.exports = applyCustomJoin;
