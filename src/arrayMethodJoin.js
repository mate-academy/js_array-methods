'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let stringJoin = '';
    const joinSeparator = (separator === undefined) ? ',' : separator;
    for (let elem = 0; elem < this.length; elem++) {
      if (this[elem] === undefined || this[elem] === null) {
        stringJoin += `${joinSeparator}`;
      } else if (elem === this.length - 1) {
        stringJoin += this[elem];
      } else {
        stringJoin += `${this[elem]}${joinSeparator}`;
      }
    }
    return stringJoin;
  };
}

module.exports = applyCustomJoin;
