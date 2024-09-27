'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const i of this) {
      let item = i;

      if ((i === undefined) || (i === null)) {
        item = '';
      }

      if (this.indexOf(i) === this.length - 1) {
        result += item;
      } else {
        result += `${item}${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
