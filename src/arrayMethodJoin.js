'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let stringJoined = '';
    let separatorCopy = separator;

    if (typeof separatorCopy === 'undefined') {
      separatorCopy = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i !== this.length - 1) {
        stringJoined = stringJoined + this[i] + separatorCopy;
      } else {
        stringJoined = stringJoined + this[i];
      }
    }

    return stringJoined;
  };
}

module.exports = applyCustomJoin;
