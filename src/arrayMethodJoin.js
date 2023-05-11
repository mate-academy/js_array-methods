'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      let element;

      if (typeof this[i] === 'undefined' || this[i] === null) {
        element = '';
      } else {
        element = this[i];
      }

      string += element;

      if (i !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
