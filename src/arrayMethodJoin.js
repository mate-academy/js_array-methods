'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join2 = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      join2 += element;

      if (i !== this.length - 1) {
        join2 += separator;
      }
    }

    return join2;
  };
}

module.exports = applyCustomJoin;
