'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let title = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        title += separator;
      };

      if (this[i] !== null
        && this[i] !== undefined) {
        title += this[i];
      };
    };

    return title;
  };
}

module.exports = applyCustomJoin;
