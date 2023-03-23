'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';
    const newSeparator = '' + separator;

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (item !== null && item !== undefined) {
        if (i !== 0) {
          str += newSeparator + item;
        } else {
          str += item;
        }
      } else {
        if (i !== 0) {
          str += newSeparator;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
