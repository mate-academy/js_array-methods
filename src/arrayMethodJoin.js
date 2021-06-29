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

      switch (i) {
        case this.length - 1:
          newString += this[i];
          break;

        default:
          newString += this[i] + `${element}`;
          break;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
