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
        resultJoin += separator;
      }

      const elem = this[counter];

      const next = elem === null || elem === undefined
        ? ''
        : elem;

      resultJoin += next;
      counter++;
    }

    return resultJoin;
  };
}

module.exports = applyCustomJoin;
