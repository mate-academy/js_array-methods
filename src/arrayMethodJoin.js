'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separ = separator;

    if (separ === undefined) {
      separ = ',';
    }

    if (separ === null) {
      separ = 'null';
    }

    if (this.length === 0) {
      return '';
    }

    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        separ = '';
      }

      joinedString += this[i] === null || this[i] === undefined
        ? '' + separ
        : this[i] + separ;
    }

    // joinedString += this[this.length - 1] === null
    // || this[this.length - 1] === undefined
    //   ? ''
    //   : this[this.length - 1];

    return joinedString;
  };
}

applyCustomJoin([0, 1, 2, 3]);

module.exports = applyCustomJoin;
