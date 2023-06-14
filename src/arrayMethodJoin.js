'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strFromArr = '';

    for (let i = 0; i < this.length; i++) {
      const lastCheckSeparator = this[this.length - 1] === undefined
      || this[this.length - 1] === null;

      if (this[i] === null || this[i] === undefined) {
        if (lastCheckSeparator) {
          continue;
        }
        strFromArr += separator;
        continue;
      }

      if (i === this.length - 1) {
        strFromArr += `${this[i]}`;
        continue;
      }
      strFromArr += `${this[i]}${separator}`;
    }

    return strFromArr;
  };
}

module.exports = applyCustomJoin;
