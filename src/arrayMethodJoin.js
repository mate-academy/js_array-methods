'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        newString += separator;
        continue;
      } else {
        if (separator === null) {
          if (this.length - 2 >= i) {
            newString += this[i] + 'null';
          } else {
            newString += this[i];
          }
        } else if (separator === '') {
          if (this.length - 2 >= i) {
            newString += this[i];
          } else {
            newString += this[i];
          }
        } else if (separator === undefined) {
          if (this.length - 2 >= i) {
            newString += this[i] + ',';
          } else {
            newString += this[i];
          }
        } else {
          if (this.length - 2 >= i) {
            newString += this[i] + separator;
          } else {
            newString += this[i];
          }
        }
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
