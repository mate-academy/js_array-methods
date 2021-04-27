'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newSeparator = separator;

    if (newSeparator === undefined) {
      newSeparator = ',';
    }
    newSeparator = newSeparator + '';

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined'
        || typeof this[i] === 'object') {
        this[i] = '';
      }

      if (i === this.length - 1) {
        string += this[i];
      } else {
        string += this[i] + newSeparator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
