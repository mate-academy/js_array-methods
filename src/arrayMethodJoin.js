'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let stringArr = '';

    for (let i = 0; i < this.length; i++) {
      let elem = this[i];

      if (elem === null || elem === undefined) {
        elem = '';
      }

      stringArr += elem;

      if (i !== this.length - 1) {
        stringArr += separator;
      }
    }

    return stringArr;
  };
}

module.exports = applyCustomJoin;
