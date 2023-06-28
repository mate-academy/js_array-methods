'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    if ((this[0] !== null)
        && (this[0] !== undefined)) {
      finalString += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      finalString += String(separator);

      if ((this[i] === null)
          || (this[i] === undefined)) {
        continue;
      }

      finalString += this[i];
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
