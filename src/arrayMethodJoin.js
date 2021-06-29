'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(element = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        newString += this[i];
      } else {
        newString += this[i] + `${element}`;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
