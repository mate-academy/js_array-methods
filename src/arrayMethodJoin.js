'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (this[i] === undefined || this[i] === null) {
        element = '';
      }

      if (i === this.length - 1) {
        newString += element;
      } else {
        newString += element + `${separator}`;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
