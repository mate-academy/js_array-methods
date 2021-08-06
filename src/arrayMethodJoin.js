'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      joinedString += this[i] === undefined || this[i] === null
        ? separator : i === this.length - 1
          ? this[i] : `${this[i]}${separator}`;
    };

    return joinedString;
  };
}

module.exports = applyCustomJoin;
