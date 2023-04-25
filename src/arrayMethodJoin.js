'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    if (this.length === 0) {
      return '';
    }

    if (this.length === 0) {
      return '';
    }

    if (separator === undefined && this.length >= 2) {
      for (let i = 1; i < this.length; i++) {
        result += `,${this[i]}`;
      }
    } else if (this.length >= 2) {
      for (let i = 1; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          result += ',';
        } else {
          result += `${separator}${this[i]}`;
        }
      }
    }

    if (this[0] === null) {
      return `${result}`;
    } else {
      return `${this[0]}${result}`;
    };
  };
};

module.exports = applyCustomJoin;

// const source = [0, 1, 2, 3];
// applyCustomJoin();
// console.log(source.join2('-'));
