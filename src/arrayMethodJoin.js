'use strict';

/**
 * Implement method join
 */
function applyCustomJoin(...data) {
  [].__proto__.join2 = function(separator = ',') {
    let joinedIntoString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedIntoString += '';
      } else if (this[i] !== ' ') {
        joinedIntoString += this[i];
      }

      if (i !== this.length - 1) {
        joinedIntoString += separator;
      }
    }

    return joinedIntoString;
  };
};

module.exports = applyCustomJoin;
