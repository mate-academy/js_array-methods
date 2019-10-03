'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let separatorCopy = separator;
    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        this[i] = '';
      }
      if (separatorCopy === undefined) {
        separatorCopy = ',';
      }
      if (i === this.length - 1) {
        string = string + this[i];
      } else {
        string = string + this[i] + separatorCopy;
      }
    }
    return string;
  };
}

module.exports = applyCustomJoin;
