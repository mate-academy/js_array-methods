'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let correctSeparator = separator;

    if (separator === null) {
      correctSeparator = 'null';
    }

    let newString = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === undefined || element === null) {
        element = '';
      }

      if (i === this.length - 1) {
        newString += element;
      } else {
        newString += element + correctSeparator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
