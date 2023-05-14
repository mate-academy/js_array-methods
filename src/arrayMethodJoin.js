'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';

    let workingSeparator = separator;

    if (workingSeparator === null) {
      workingSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i === this.length - 1) {
        stringFromArray += element;
      } else {
        stringFromArray += element + workingSeparator;
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
