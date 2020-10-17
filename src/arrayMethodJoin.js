'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  // eslint-disable-next-line space-before-function-paren
  [].__proto__.join2 = function (separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let str = '';

    for (let i = 0; i < this.length - 1; i++) {
      let cur = this[i];

      if (cur === null || cur === undefined) {
        cur = '';
      }

      str += `${cur}${separator}`;
    }

    str += this[this.length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
