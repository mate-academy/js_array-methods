'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let stringJoin = '';
    const joinSeparator = (separator === undefined) ? ',' : separator;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        stringJoin += `${joinSeparator}`;
      } else if (i === this.length - 1) {
        stringJoin += this[i];
      } else {
        stringJoin += `${this[i]}${joinSeparator}`;
      }
    }
    return stringJoin;
  };
}

module.exports = applyCustomJoin;
