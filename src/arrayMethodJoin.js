'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    this.forEach((item, index) => {
      if ((item !== null) && (item !== undefined)) {
        str += item;
      }

      if (index < (this.length - 1)) {
        str += separator;
      };
    });

    return str;
  };
}

module.exports = applyCustomJoin;
