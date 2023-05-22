'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    let workingSeparator = separator;

    if (workingSeparator === null) {
      workingSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i !== this.length - 1) {
        string += element + workingSeparator;
      } else {
        string += element;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
