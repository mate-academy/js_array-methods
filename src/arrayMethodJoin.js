'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newSeparator = separator;
    let newString = '';

    if (separator === undefined) {
      newSeparator = ',';
    };

    if (separator === null) {
      newSeparator = 'null';
    };

    if (this.length === 0) {
      return '';
    };

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        newString += this[i];
        return newString;
      };
      newString += this[i] === null || this[i] === undefined
        ? ','
        : this[i] + newSeparator;
    };
  };
}

module.exports = applyCustomJoin;
