'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    const paste = (separator === undefined) ? ',' : `${separator}`;

    for (let i = 0; i < this.length; i++) {
      let el = this[i];

      el = (el === null || el === undefined) ? '' : `${el}`;
      string += (i === this.length - 1) ? el : el + paste;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
