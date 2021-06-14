'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    for (let k = 0; k < this.length; k++) {
      if (k) {
        if (separator === '') {
          result += '';
        } else if (separator === null) {
          result += 'null';
        } else if (!separator || separator === undefined) {
          result += ',';
        } else {
          result += separator;
        }
      }

      if (this[k] === null || this[k] === undefined) {
        result += '';
      } else if (this[k] === 'null') {
        result += 'null';
      } else {
        result += this[k];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
