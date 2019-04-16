'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    return String(this.length === 0
      ? ''
      : this.map(el => el === undefined || el === null
        ? ''
        : el)
        .reduce((result, curent) => result + String(separator) + curent));
  };
}

module.exports = applyCustomJoin;
