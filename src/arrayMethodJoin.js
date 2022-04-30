'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const separatorValue = separator;
    let str = '';

    if (separatorValue === undefined) {
      str += this[0];

      for (let i = 1; i < this.length; i++) {
        str += ',' + this[i];
      };

      return str;
    }

    if (separatorValue === '') {
      str += this[0];

      for (let i = 1; i < this.length; i++) {
        str += this[i];
      }

      return str;
    }

    if (separatorValue) {
      if (this.length === 0) {
        return str;
      } else if (this[0] === null) {
      } else {
        str += this[0];
      }

      for (let i = 1; i < this.length; i++) {
        if (this[i] === undefined || this[i] === null) {
          str += separatorValue;
        } else {
          str += separatorValue + this[i];
        }
      }

      return str;
    }

    if (separatorValue === null) {
      str += this[0];

      for (let i = 1; i < this.length; i++) {
        str += String(separatorValue) + this[i];
      };

      return str;
    };
  };
}

module.exports = applyCustomJoin;
