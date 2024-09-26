'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let elem = this[i];

      if (elem === undefined || elem === null || elem === []) {
        elem = '';
      }

      if (i === this.length - 1) {
        result = result + elem;
      } else {
        result = result + elem + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
