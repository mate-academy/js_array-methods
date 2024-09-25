'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let changedString = '';
    const lastInArray = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        changedString += `${separator}`;
      } else {
        changedString += this[i] + `${separator}`;
      }
    }

    if (lastInArray !== null && lastInArray !== undefined) {
      changedString += lastInArray;
    }

    return changedString;
  };
}

module.exports = applyCustomJoin;
