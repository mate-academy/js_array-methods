'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorInString;

    switch (separator) {
      case undefined:
        separatorInString = ',';
        break;

      case null:
        separatorInString = 'null';
        break;

      default:
        separatorInString = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i !== this.length - 1) {
        result += this[i] + separatorInString;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
