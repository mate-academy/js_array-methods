'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';

    if (typeof separator === 'undefined') {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toString();

        if (i === this.length - 1) {
          string += this[i];
        } else {
          string += this[i] + ',';
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }
        this[i] = this[i].toString();

        if (i === this.length - 1) {
          string += this[i];
        } else {
          string += this[i] + separator;
        }
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
