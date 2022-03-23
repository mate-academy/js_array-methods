'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
  [].__proto__.join2 = function(separator = ',') {
    let sString = '';

    for (let i = 0; i < this.length; i += 1) {
      if (this[i] !== undefined && this[i] !== null) {
        sString += String(this[i]);
      }

      if (i + 1 !== this.length) {
        sString += String(separator);
      }
    }

    return sString;
}

module.exports = applyCustomJoin;
