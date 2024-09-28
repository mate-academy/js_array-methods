'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newSep = '';

    switch (separator) {
      case undefined:
        newSep = ',';
        break;

      case null:
        newSep = 'null';
        break;

      default:
        if (typeof (separator) === 'object') {
          newSep = separator.toString();
        } else {
          newSep = separator;
        }
    }

    for (let item of this) {
      if (item === null || item === undefined) {
        item = '';
      }

      result += item + newSep;
    }

    if (newSep.length !== 0) {
      result = result.slice(0, -1 * newSep.length);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
