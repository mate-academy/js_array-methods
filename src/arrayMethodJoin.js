'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    const last = this.length - 1;

    let newSeparator = separator;

    if (separator === undefined) {
      newSeparator = ',';
    }

    if (separator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      str += this[i];

      if (i === last) {
        break;
      }

      str += newSeparator;
    }

    return str;
  };
};

module.exports = applyCustomJoin;
