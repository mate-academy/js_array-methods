'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = separator;

    if (string === null) {
      string = 'null';
    }
    let result = '';
    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }
      if (i !== this.length - 1) {
        result += string;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
