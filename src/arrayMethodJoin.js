'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedItems = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null) {
          joinedItems += '';
        } else {
          joinedItems += this[i];
        }
      } else {
        if (this[i] === null || this[i] === undefined) {
          joinedItems += `${separator}`;
        } else {
          joinedItems += `${this[i]}${separator}`;
        }
      }
    }

    return joinedItems;
  };
}

module.exports = applyCustomJoin;
