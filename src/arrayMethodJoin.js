'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    this.forEach(item => {
      if (this.indexOf(item) < this.length - 1) {
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
