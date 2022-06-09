'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnedNewString = ``;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        returnedNewString += this[i];
      }

      if (i !== this.length - 1) {
        returnedNewString = returnedNewString + `${separator}`;
      }
    };

    return returnedNewString;
  };
}

module.exports = applyCustomJoin;
