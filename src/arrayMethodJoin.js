'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      let el = this[i];

      el = (el === null || el === undefined) ? '' : `${el}`;
      string += (i === this.length - 1) ? el : el + separator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
