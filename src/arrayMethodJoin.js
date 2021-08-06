'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResultString = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }
      joinResultString += element;

      if (i !== this.length - 1) {
        joinResultString += separator;
      }
    }

    return joinResultString;
  };
}

module.exports = applyCustomJoin;
