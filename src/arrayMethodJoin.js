'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResultString = '';

    if (this.length < 0) {
      return joinResultString;
    }

    let workSeparator = separator;

    if (workSeparator === null) {
      workSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (separator !== undefined && this.length > 1 && i !== this.length - 1) {
        element += workSeparator;
      }
      joinResultString += element;
    }

    return joinResultString;
  };
}

module.exports = applyCustomJoin;
