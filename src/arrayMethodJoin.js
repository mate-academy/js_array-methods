'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      let ourCharracter = this[i];

      if (ourCharracter === null || ourCharracter === undefined) {
        ourCharracter = '';
      }

      if (this.length - 1 === i) {
        joinedString += `${ourCharracter}`;
      } else {
        joinedString += `${ourCharracter}${separator}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
