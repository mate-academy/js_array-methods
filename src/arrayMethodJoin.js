'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let connected = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (separator === null) {
        connected += `${this[i]}${null}`;
      } else if (this[i] === null || this[i] === undefined) {
        connected += '' + separator;
      } else {
        connected += this[i] + separator;
      }
    }

    if (this[this.length - 1] === undefined) {
      return connected;
    }

    return connected + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
