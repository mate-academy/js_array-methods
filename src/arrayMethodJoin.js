'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';


    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i < (this.length - 1)) {
        arr += this[i] + x;
      } else {
        arr += this[(this.length - 1)];
      }
    }

    return arr;
  };
};

module.exports = applyCustomJoin;
