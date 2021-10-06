'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const result = new Array(0);
    let result1 = '';

    if (this.length === 0) {
      return '';
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        if (this === []) {
          return '';
        } else if (separator === null) {
          result[i] = this[i].toString() + 'null';
        } else if (separator === undefined) {
          result[i] = this[i].toString() + ',';
        } else if (this[i] === null) {
          this[i] = '';
          result[i] = this[i].toString() + separator.toString();
        } else if (this[i] === undefined) {
          this[i] = '';
          result[i] = this[i].toString() + separator.toString();
        } else {
          result[i] = this[i].toString() + separator.toString();
        }
      }

      result[result.length] = this[this.length - 1];

      for (const elem of result) {
        result1 += elem.toString();
      }

      return result1;
    }
  };
}

module.exports = applyCustomJoin;
