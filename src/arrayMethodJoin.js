'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoin = '';
    let changedSeparator = separator;

    if (this.length === 0) {
      return resultOfJoin;
    }

    if (separator === null) {
      changedSeparator = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      (this[i] === null || this[i] === undefined)
        ? resultOfJoin += '' + changedSeparator
        : resultOfJoin += this[i] + changedSeparator;
    }

    return resultOfJoin + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
