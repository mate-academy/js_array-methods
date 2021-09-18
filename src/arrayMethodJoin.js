'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';
    const joinedArr = [...this];
    let newSep = separator;

    if (this.length === 0) {
      return '';
    }

    switch (newSep) {
      case '' :
        for (const el of this) {
          joined += String(el);
        }

        return joined;

      case undefined :
        newSep = ',';
    }

    for (let el = 0; el < this.length - 1; el++) {
      if (this[el] === undefined || this[el] === null) {
        this[el] = '';
      }

      if (this[el] === false) {
        this[el] = 'false';
      }

      if (this[el].toString === 'NaN') {
        this[el] = 'NaN';
      }

      joinedArr[el] = (String(this[el]) + String(newSep));
    }

    for (const el of joinedArr) {
      joined += el;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
