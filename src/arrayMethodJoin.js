'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (const item of this) {
      if (item === null || typeof item === 'undefined') {
        joined += ',';
        continue;
      }

      if (separator === '') {
        joined += item;
        continue;
      }

      if (this.indexOf(item) === this.length - 1) {
        joined += `${item}`;
        break;
      }

      joined += `${item}${separator}`;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
