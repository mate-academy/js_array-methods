'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // const arr = [...this];
    let res = '';
    let separatorCopy = separator;

    for (let i = 0; i < this.length; i++) {
      // if (isNaN(this[i])) {
      //   this[i] = '';
      // }

      if (this[i] === undefined) {
        this[i] = '';
      }

      if (this[i] === null) {
        this[i] = '';
      }

      if (separatorCopy === undefined) {
        separatorCopy = ',';
      }

      if (separatorCopy === null) {
        separatorCopy = 'null';
      }

      if (i !== this.length - 1) {
        res += this[i] + separatorCopy;
      } else {
        res += this[i];
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
