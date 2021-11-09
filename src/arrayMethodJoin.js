'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      const condition = this[i] === undefined || this[i] === null;

      if (i === this.length - 1) {
        string = condition ? string : string + this[i];
      } else {
        string = condition ? string + separator : string + this[i] + separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
