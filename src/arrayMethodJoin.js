'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = (this.length === 0
      || this[0] === null) ? '' : `${this[0]}`;

    for (let i = 1; i < this.length; i++) {
      switch (this[i]) {
        case null:
        case undefined:
          joinedString += `${separator}`;
          break;
        default:
          joinedString += `${separator}` + `${this[i]}`;
          break;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
