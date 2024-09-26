'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedArr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedArr += ',';
        continue;
      }

      if (Object.is(this[i]) || this[i] === '') {
        continue;
      }

      if (separator === undefined) {
        // eslint-disable-next-line no-param-reassign
        separator = ',';
      }

      if (i === this.length - 1) {
        joinedArr += `${this[i]}`;
        break;
      }
      joinedArr += `${this[i]}${separator}`;
    }

    return joinedArr;
  };
}

module.exports = applyCustomJoin;
