'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoin = '';
    const separatorToString = String(separator);

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      resultOfJoin += `${this[i]}${separatorToString}`;
    }

    if (this[this.length - 1] !== undefined) {
      resultOfJoin += `${this[this.length - 1]}`;
    }

    return resultOfJoin;
  };
}

module.exports = applyCustomJoin;
