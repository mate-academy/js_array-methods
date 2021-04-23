'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let glue = separator;

    if (separator === undefined) {
      glue = ',';
    }

    let result = this[0];

    if (String(result) === 'null' || String(result) === 'undefined') {
      result = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (String(this[i]) === 'null' || String(this[i]) === 'undefined') {
        result += glue + '';
      } else {
        result += glue + String(this[i]);
      }
    }

    return String(result);
  };
}

module.exports = applyCustomJoin;
