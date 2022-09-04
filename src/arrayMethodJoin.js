'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let text = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        text += this[i];
      };

      if (i < (this.length - 1)) {
        text += separator;
      };
    };

    return text;
  };
}

module.exports = applyCustomJoin;
