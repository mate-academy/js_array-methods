'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += String(separator);
      }

      if (this[i] !== 'null'
      && (String(this[i]) === 'null' || String(this[i]) === 'undefined')) {
        result += '';
      } else {
        result += String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
