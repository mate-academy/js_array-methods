'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let element = '';
    let innerSeparator = separator;

    if (separator === null) {
      innerSeparator = 'null';
    } else if (separator === undefined) {
      innerSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      element = this[i];

      if (this[i] === null || this[i] === undefined) {
        element = '';
      }

      str += element;

      if (this.length > 0 && i < this.length - 1) {
        str += innerSeparator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
