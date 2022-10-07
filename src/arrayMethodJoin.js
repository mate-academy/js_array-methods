'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (!this.length) {
      return '';
    }

    let separ;

    switch (separator) {
      case undefined:
        separ = ',';
        break;

      case '':
        separ = '';
        break;

      case null:
        separ = 'null';
        break;

      default:
        separ = separator;
    }

    let string;

    if (this[0] === null || this[0] === undefined) {
      string = '';
    } else {
      string = this[0].toString();
    }

    if (this.length === 1) {
      return string;
    }

    let item = '';

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        item = separ;
      } else {
        item = separ + this[i].toString();
      }

      string += item;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
