'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const length = this.length;

    let seperUsed = separator;

    if ('' + seperUsed === 'undefined') {
      seperUsed = ',';
    }

    for (let i = 0; i < length; i++) {
      if (typeof this[i] === 'undefined'
       || this[i] === null) {
        ; // if equal to just pass, not equal to doesn't work
      } else {
        result += this[i];
      }

      if (i !== length - 1) {
        result += '' + seperUsed;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
