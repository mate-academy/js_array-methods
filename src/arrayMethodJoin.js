'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let newStr = '';
    let separatorAsString = '';

    if (separator === null) {
      separatorAsString = 'null';
    } else {
      separatorAsString = separator.toString();
    }

    for (const item of this) {
      if (item === undefined || item === null) {
        str += '';
      } else {
        str += item.toString();
      }

      str += separatorAsString;
    }

    if (separatorAsString !== '') {
      newStr = str.slice(0, -separatorAsString.length);
    } else {
      newStr = str;
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
