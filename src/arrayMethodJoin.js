'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const element of this) {
      if (element !== undefined && element !== null) {
        str += element + '' + separator;
      } else {
        str += separator;
      }
    }
    str = str.substring(0, str.length - (separator + '').length);

    return str;
  };
}

module.exports = applyCustomJoin;
