'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let joined = '';
    if (!separator) {
      for (let i = 0; i < this.length; i++) {
        joined += this[i] + ',';
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        joined += this[i] + separator;
      }
    }
    const result = joined.substring(0, joined.length - 1);
    return result;
  };
}

module.exports = applyCustomJoin;
