'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let result = '';
    const copySource = [...this];

    if (copySource.length === 0) {
      return '';
    }

    if (copySource.length === 1) {
      sep = '';
    }

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < copySource.length; i++) {
      if (copySource[i] === null || copySource[i] === undefined) {
        copySource[i] = '';
      }

      if (i === copySource.length - 1) {
        result += copySource[i];
        break;
      }
      result += copySource[i] + sep;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
