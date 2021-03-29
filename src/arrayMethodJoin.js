'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let strElements = '';
    let separatorNew = separator;

    if (this.length === 0) {
      return strElements;
    }

    if (separator === undefined) {
      separatorNew = ',';
    }

    if (this.length > 1) {
      for (let i = 0; i <= this.length - 2; i++) {
        if (this[i] !== null && this[i] !== undefined) {
          strElements += this[i];
        }

        strElements += `${separatorNew}`;
      }

      strElements += this[this.length - 1];

      return `${strElements}`;
    } else {
      strElements = this[0];

      return `${strElements}`;
    }
  };
};

module.exports = applyCustomJoin;
