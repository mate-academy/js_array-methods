'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let sourceString = '';

    for (let i = 0; i < this.length; i++) {
      let string = this[i];

      if (string === undefined || string === null) {
        string = '';
      }

      if (i === (this.length - 1)) {
        sourceString += `${string}`;
      } else {
        sourceString += `${string}${separator}`;
      }
    }

    return sourceString;
  };
}

module.exports = applyCustomJoin;
