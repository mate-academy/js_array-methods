'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let elem;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        elem = '';
      } else {
        elem = this[i] + '';
      }

      if (i !== 0) {
        result += (separator + elem);
      } else {
        result += elem;
      }
    };

    return result;
  };
};

module.exports = applyCustomJoin;
