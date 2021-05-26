'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    let delimiter;

    switch (separator) {
      case undefined :
        delimiter = ',';
        break;

      case null :
        delimiter = 'null';
        break;

      default :
        delimiter = '' + separator;
    }

    const numberOfSliceSymbols = delimiter.length;

    for (const i of this) {
      if (i == null || i === undefined) {
        str += delimiter;
      } else {
        str += i + delimiter;
      }
    }

    if (delimiter === '') {
      return str;
    } else {
      return str.slice(0, str.length - numberOfSliceSymbols);
    }
  };
}

module.exports = applyCustomJoin;
