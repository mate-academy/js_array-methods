'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';
    let elementSeparator = separator + '';

    if (separator === undefined) {
      elementSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i === this.length - 1) {
        joinedString += element;
      } else {
        joinedString += element + elementSeparator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
