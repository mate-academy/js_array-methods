'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';

    if (!this.length) {
      return '';
    }

    if (separator === undefined) {
      for (const par of this) {
        if (par === this[this.length - 1]) {
          string += par;

          return string;
        }
        string += par + ',';
      }
    }

    for (const par of this) {
      if (par === this[this.length - 1]) {
        string += par;

        return string;
      } else if (par === undefined || par === null) {
        string += ',';
      } else {
        if (separator === null) {
          string += par + 'null';
        } else {
          string += par + separator;
        }
      }
    }
  };
}

module.exports = applyCustomJoin;
