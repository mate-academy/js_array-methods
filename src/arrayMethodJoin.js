'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let defaultSeparator = ',';

    if (typeof separator !== 'undefined') {
      defaultSeparator = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] != null) {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += defaultSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
