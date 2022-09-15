'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code her
    let devider = separator;

    if (devider === undefined) {
      devider = ',';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i === (this.length - 1)) {
        if (this[i] === undefined) {
          break;
        }
        result = result + this[i];
        break;
      }

      if (this[i] === undefined || this[i] === null) {
        result = result + devider;
        continue;
      }

      result = result + this[i] + devider;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
