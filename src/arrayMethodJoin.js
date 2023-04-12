'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let str = isUndefinedOrNull(this[0]) ? '' : String(this[0]);

    for (let i = 1; i < this.length; i++) {
      str += typeof separator === 'undefined' ? ',' : String(separator);

      str += isUndefinedOrNull(this[i]) ? '' : String(this[i]);
    }

    return str;
  };
}

function isUndefinedOrNull(obj) {
  return typeof obj === 'undefined' || obj === null;
}

module.exports = applyCustomJoin;
