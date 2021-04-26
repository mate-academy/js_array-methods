'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const i of this) {
      if (i !== undefined && i !== null) {
        str += i + '' + separator;
      } else {
        str += ',';
      }
    }
    str = str.substring(0, str.length - (separator + '').length);

    return str;
  };
}

module.exports = applyCustomJoin;
