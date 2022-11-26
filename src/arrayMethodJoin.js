'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const sep = separator !== null ? separator : 'null';

    // joining the array excluding the last element
    for (let i = 0; i < this.length - 1; i++) {
      result += (this[i] != null ? this[i] : '') + sep;
    }

    // adding the last element
    // this approach is crucial if the joined arrays are too large
    if (this[this.length - 1] != null) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
