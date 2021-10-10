'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    // eslint-disable-next-line no-unused-vars
    let result = '';
    const length = this.length;

    if (length === 0) {
      return '';
    }

    if (length === 1) {
      return `${this[length - 1]}`;
    }

    for (let i = 0; i < length; i++) {
      let element = this[i];

      if (element === undefined || element === null) {
        element = '';
      }

      if (i !== length - 1) {
        result += `${element}${separator}`;
      } else {
        result += element;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
