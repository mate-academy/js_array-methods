'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separator1 = separator;

    if (separator1 === undefined) {
      separator1 = ',';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i !== this.length - 1) {
          result += separator1;
        }
      } else {
        result += this[i];

        if (i !== this.length - 1) {
          result += separator1;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
