'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (!this[i] === this[i]) {
        this[i] = 'NaN';
      } else if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === 0) {
        joinedString += this[i];
        continue;
      }

      joinedString += `${separator !== undefined ? separator : ','}${this[i]}`;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
