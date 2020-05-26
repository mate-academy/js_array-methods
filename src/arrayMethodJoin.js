'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let glue = separator;

    if (glue === undefined) {
      glue = ',';
    }

    let gluedString = '';

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      gluedString += this[0];

      return gluedString;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null | this[i] === undefined) {
        gluedString += glue;
      } else {
        gluedString += this[i];
        gluedString += glue;
      }
    }

    gluedString += this[this.length - 1];

    return gluedString;
  };
}

module.exports = applyCustomJoin;
