'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i !== 0) {
        res += separator + element.toString();
      } else {
        res += element;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
