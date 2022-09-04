'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newSep = separator;

    switch (separator) {
      case undefined:
        newSep = ',';
        break;

      case null:
        newSep = 'null';
        break;
    }

    for (let item of this) {
      if (this.length === 1) {
        result += item;

        return result;
      }

      if (item === null || item === undefined) {
        item = '';
      }

      if (typeof (newSep) === 'object') {
        newSep = newSep.toString();
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
