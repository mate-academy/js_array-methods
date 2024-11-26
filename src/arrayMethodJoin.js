'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const stringSeparator = String(separator);

    if (!this.length) {
      return string;
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null || this[i] === undefined)) {
        string += stringSeparator;
      } else if (i !== this.length - 1) {
        string += this[i] + stringSeparator;
      } else {
        string += this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
