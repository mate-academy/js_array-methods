'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';

    if (this.length === 0) {
      return joinResult;
    }

    if (this[0] !== null) {
      joinResult += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        joinResult += `${separator}`;
      } else {
        joinResult += `${separator}` + this[i];
      }
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
