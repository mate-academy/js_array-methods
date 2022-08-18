'use strict';

/**
 * Implement method join
 */

const source = [0, 1, 2, 3];

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
    }

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      sep = '';
    }

    if (separator === null) {
      sep = 'null';
    }

    if (sep === undefined) {
      sep = ',';
    }

    let result = '';

    for (let i = 1; i <= this.length; i++) {
      if (i === this.length) {
        result += this[i - 1];
        break;
      }
      result += this[i - 1] + sep;
    }

    return result;
    // console.log(result);
  };

  source.join2({});
}

applyCustomJoin();
module.exports = applyCustomJoin;
