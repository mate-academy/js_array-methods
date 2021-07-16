'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorLocal = separator;

    if (!isFinite(separatorLocal)
    && (separatorLocal !== '-')
    && typeof separatorLocal !== 'object') {
      separatorLocal = ',';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      let word = this[i];

      if (word === null || typeof word === 'undefined') {
        word = '';
      };

      result += word;

      if (i !== this.length - 1) {
        result += separatorLocal;
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
