'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    this.forEach((item, index) => {
      if (index < this.length - 1) {
        if (item !== null && item !== undefined) {
          str = str + item + separator;
        } else {
          str = str + '' + separator;
        }
      } else {
        str = str + item;
      }
    });

    return str;
  };
}

module.exports = applyCustomJoin;
