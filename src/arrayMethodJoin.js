'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedItems = '';
    let separatorChar = separator;

    if (typeof separatorChar === 'undefined') {
      separatorChar = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined
        || this[i] === null) {
        joinedItems += '';
      } else {
        joinedItems += this[i];
      }

      if (i !== this.length - 1) {
        joinedItems += separatorChar;
      }
    }

    return joinedItems;
  };
}

module.exports = applyCustomJoin;
