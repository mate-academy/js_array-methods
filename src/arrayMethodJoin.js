'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      let elem = this[i];
      if (elem === null || elem === undefined) {
        elem = '';
      }

      if (i === this.length - 1) {
        string += elem;
      } else {
        string += elem + String(separator);
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
