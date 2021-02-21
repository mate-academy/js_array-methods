'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = ``;
    let item = separator;

    if (this.length > 0) {
      if (this[0] === null) {
        this[0] = '';
      }

      if (item === undefined) {
        item = `,`;
      }
      result = `${this[0]}`;

      for (let el = 1; el < this.length; el++) {
        if (this[el] === null || this[el] === undefined) {
          this[el] = '';
        }
        result += `${item}${this[el]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
