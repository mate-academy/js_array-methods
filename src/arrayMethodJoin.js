'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let divider = separator;
    let result = '';

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === '') {
        str = str.concat(`${this[i]}`);
        result = str;
      } else {
        divider = `${separator}`;
        str = str.concat(`${this[i]}${divider}`);
        result = str.slice(0, -divider.length);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
