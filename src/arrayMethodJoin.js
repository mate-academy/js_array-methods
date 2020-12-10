'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    let sep = separator;

    if (separator == null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i !== 0) {
        res += sep + element;
      } else {
        res += element;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
