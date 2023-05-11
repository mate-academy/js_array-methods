'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let sep = separator;
    const copyArr = [...this];
    const length = this.length;

    if (sep === null) {
      sep = 'null';
    }

    if (length === 0) {
      return '';
    }

    if (length === 1) {
      sep = '';
    }

    for (let i = 0; i < length; i++) {
      if (this[i] === null || this[i] === undefined) {
        copyArr[i] = '';
      }
    }

    for (let i = 0; i < length - 1; i++) {
      str += copyArr[i] + sep;
    }

    str = str + copyArr[length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
