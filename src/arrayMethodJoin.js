'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (this[i] === null || this[i] === undefined) {
        item = '';
      }

      if (i < this.length - 1) {
        newString = newString + item + separator;
      } else {
        newString += item;
      }
    };

    return newString;
  };
}

module.exports = applyCustomJoin;
