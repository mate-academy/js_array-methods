'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (i === 0 && (this[i] === null || this[i] === undefined)) {
        continue;
      } else if (this[i] === null || this[i] === undefined) {
        joinedString += `${separator}`;
      } else if (i === 0) {
        joinedString = `${this[0]}`;
      } else {
        joinedString += `${separator}` + `${this[i]}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
