'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strFromArr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        strFromArr += this[i];
        return strFromArr;
      }
      strFromArr += (this[i] + `${separator}`);
    }

    return strFromArr;
  };
}

module.exports = applyCustomJoin;
