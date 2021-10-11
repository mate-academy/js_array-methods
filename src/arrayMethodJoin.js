'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return `${this[this.length - 1]}`;
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === undefined || element === null) {
        element = '';
      }

      if (i !== this.length - 1) {
        result += `${element}${separator}`;
      } else {
        result += element;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
