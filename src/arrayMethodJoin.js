'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let element of this) {
      if (element === this[this.length - 1]) {
        str += element;
        break;
      }

      if (this[this.length - 1] === undefined) {
        this[this.length - 1] = '';
      }

      if (element === null || element === undefined) {
        element = '';
      }

      if (separator === undefined) {
        str += element + ',';
      } else {
        str += element + String(separator);
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
