'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sentence;

    if (this[0] === null) {
      sentence = '';
    } else {
      sentence = this[0] + '';
    }

    if (this.length === 0) {
      return '';
    }

    if (separator || separator !== undefined || separator === '') {
      for (let i = 1; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          sentence = sentence + separator + '';
        } else {
          sentence = sentence + separator + this[i];
        }
      }
    } else {
      for (let i = 1; i < this.length; i++) {
        sentence = sentence + ',' + this[i];
      }
    }

    return sentence;
    // write code here
  };
}
module.exports = applyCustomJoin;
