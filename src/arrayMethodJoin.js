'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (separator === null) {
      separator = 'null';
    }

    if (separator instanceof Object) {
      separator = '[object Object]';
    }

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }

      str += this[i] + separator;
    }

    return separator === '' ? str : str.slice(0, -separator.length);
  };
}

module.exports = applyCustomJoin;
