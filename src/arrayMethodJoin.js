'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorNew = separator;

    if (separatorNew === undefined) {
      separatorNew = ',';
    }

    if (separatorNew === null) {
      separatorNew = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += '';
      } else {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += separatorNew;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
