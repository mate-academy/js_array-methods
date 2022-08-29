'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const newArr = Array.from(this);
    let result = '';
    let newSep = separator;
    const exp = separator;

    switch (exp) {
      case undefined:
        newSep = ',';
        break;

      case '':
        newSep = '';
        break;

      case null:
        newSep = 'null';
        break;
    }

    for (let item of newArr) {
      if (newArr.length === 1) {
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

    if (newSep.length !== 0 && typeof (newSep) !== 'object') {
      result = result.slice(0, -1 * newSep.length);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
