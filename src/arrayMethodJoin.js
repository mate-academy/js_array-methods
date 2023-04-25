'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let verifiedSeparator = separator;

    if (typeof separator === 'undefined') {
      verifiedSeparator = ',';
    }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && typeof this[i] !== 'undefined') {
        string += this[i];
      }

      if (i !== this.length - 1) {
        string += verifiedSeparator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
