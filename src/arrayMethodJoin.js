'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (arguments.length !== 0 && separator !== undefined) {
      let resultStr = '';

      for (let i = 0; i < this.length; i++) {
        const item = (this[i] === undefined || this[i] === null)
          ? '' : this[i];

        if (i === this.length - 1) {
          resultStr += item;
        } else {
          resultStr += item + `` + separator;
        }
      }

      return resultStr;
    }

    return this.toString();
  };
}

module.exports = applyCustomJoin;
