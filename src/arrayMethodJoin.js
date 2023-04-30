'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedValues = '';

    if (this.length < 1) {
      return joinedValues;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined && i === this.length - 1) {
        continue;
      };

      if (this[i] === null || this[i] === undefined) {
        joinedValues += `${separator}`;
        continue;
      }

      if (i === (this.length - 1)) {
        joinedValues += `${this[i]}`;
      } else {
        joinedValues += `${this[i]}${separator}`;
      };
    };

    return joinedValues;
  };
};

module.exports = applyCustomJoin;
