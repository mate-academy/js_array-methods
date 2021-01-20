'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let createdString = '';

    if (this.length !== 0) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          createdString += '';
        } else {
          createdString += this[i];
        }

        if (i < this.length - 1) {
          if (separator !== undefined) {
            createdString += separator;
          } else {
            createdString += ',';
          }
        }
      }
    }

    return createdString;
  };
}

module.exports = applyCustomJoin;
