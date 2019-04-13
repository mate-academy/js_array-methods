'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strInsteadArray = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        strInsteadArray += '';
      } else {
        strInsteadArray += '' + this[i];
      }
      if (i < (this.length - 1)) {
        strInsteadArray += '' + separator;
      }
    }
    return strInsteadArray;
  };
}

module.exports = applyCustomJoin;
