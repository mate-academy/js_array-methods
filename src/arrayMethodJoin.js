'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this === []) {
      return '';
    }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        string += this[i];
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        string += '' + (separator + '');
        continue;
      }
      string += this[i] + (separator + '');
    }

    return string;
  };
}

/* console.log(applyCustomJoin()); */

module.exports = applyCustomJoin;
