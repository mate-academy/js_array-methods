'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedItems = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        break;
      }

      if (this[i] === undefined || this[i] === null) {
        joinedItems += separator;
        continue;
      }

      if (i === this.length - 1) {
        joinedItems += this[i];
        break;
      }

      joinedItems += this[i] + '' + separator;
    }

    return joinedItems;
  };
}

module.exports = applyCustomJoin;
