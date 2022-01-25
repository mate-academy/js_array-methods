'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let spacer;

    switch (separator) {
      case undefined:
        spacer = ',';
        break;

      case null:
        spacer = 'null';
        break;

      default:
        spacer = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (this.length - 1 === i) {
        result += this[i];
      } else {
        result += this[i] + spacer;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
