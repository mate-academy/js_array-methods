'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    };
    let newString = '';
    const newSeparator = String(separator);
    for (let i = 0; i < this.length - 1; i++) {
      let str = String(this[i]);
      if (str === 'null' || str === 'undefined') {
        str = '';
      }
      newString += (str + newSeparator);
    };

    return newString + this[this.length - 1];
  };
};

module.exports = applyCustomJoin;
