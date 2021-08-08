'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';

    for (const element of this) {
      if (element === null || element === undefined) {
        joined += separator;
        continue;
      }
      joined += element;

      if (this.indexOf(element) !== this.length - 1) {
        joined += separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
