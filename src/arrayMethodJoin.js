'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const length = this.length;
    let resultJoin = '';
    let counter = 0;

    while (counter < length) {
      if (counter > 0) {
        resultJoin += `${separator}`;
      }

      let next = '';
      const elem = this[counter];

      next = elem === null || elem === undefined ? '' : elem;
      resultJoin += `${next}`;
      counter++;
    }

    return resultJoin;
  };
}

const source = [0, 1, 2, 3];

source.join(null);

module.exports = applyCustomJoin;
