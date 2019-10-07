'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {

  [].__proto__.join2 = function(separator = ',') {

    let result = '';
    const separate = String(separator);

    for (let i = 0; i < this.length; i++) {

      if (this[i] === null || this[i] === undefined) {
        result += separate;
      } else {
        result += this[i] + separate;
      }
    }

    if (separate === null) {
      return result;
    } else {
      return result.slice(0, result.length - separate.length);
    }
  }
}

module.exports = applyCustomJoin;
