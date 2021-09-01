'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let retStr = '';

    if (typeof separator === 'string'
       || typeof separator === 'object'
       || separator == null) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] !== null && this[i] !== undefined) {
          retStr += this[i];
        }

        if (i !== this.length - 1) {
          retStr += separator;
        }
      }
    };

    return retStr;
  };
}

module.exports = applyCustomJoin;
