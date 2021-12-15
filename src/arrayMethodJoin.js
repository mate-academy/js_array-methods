'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case (this.length - 1 && ''):
          str += '';
          break;
        case this.length - 1:
          str += this[i];
          break;

        default:
          if (separator === null) {
            str += this[i] + 'null';
          } else if (this[i] === null || this[i] === undefined) {
            str += separator;
          } else if (this.length === 1) {
            str += this[i];
          } else {
            str += this[i] + separator;
          }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
