'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';

    if (this.length === 0) {
      return string;
    }

    if (this.length === 1) {
      string += this[0];

      return string;
    }

    for (let i = 0; i <= this.length - 1; i++) {
      if ((this[i] === undefined || this[i] === null)
      && (typeof separator === 'string' || separator === undefined)) {
        if (i < this.length - 1) {
          string += ',';
        }
        continue;
      }

      if (separator === null) {
        if (i < this.length - 1) {
          string += this[i] + 'null';
        } else {
          string += this[i];
        }
        continue;
      }

      if (separator === undefined) {
        if (i < this.length - 1) {
          string += this[i] + ',';
        } else {
          string += this[i];
        }
        continue;
      }

      if (typeof separator === 'object') {
        if (i < this.length - 1) {
          string += this[i] + separator;
        } else {
          string += this[i];
        }
        continue;
      }

      if (typeof separator !== 'string' && separator !== undefined) {
        string += this[i];
        continue;
      }

      if (i < this.length - 1) {
        string += this[i] + separator;
      } else {
        string += this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
