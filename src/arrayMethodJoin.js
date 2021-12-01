'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        str += this[i] + ',';

        if (i + 1 === this.length) {}
      } else if (separator === null) {
        str += this[i] + 'null';
      } else if (this[i] === null || this[i] === undefined) {
        str += ',';
      } else {
        str += this[i] + separator;
      };
    }

    if (separator === '' && separator !== null) {
      return str;
    } else if (separator === null) {
      return str.slice(0, -4);
    } else if (typeof separator === 'object') {
      return str.slice(0, -15);
    } else {
      return str.slice(0, -1);
    }
  };
}

module.exports = applyCustomJoin;
