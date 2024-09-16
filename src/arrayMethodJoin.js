'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let sep;

    if (separator === undefined) {
      sep = ',';
    } else {
      sep = separator;
    }

    if (this.length === 0) {
      return result;
    }

    if (this.length === 1) {
      return `${this[0]}`;
    }

    if (this.length > 1) {
      if (this[0] == null || this[0] === undefined) {
        result = `${sep}`;
      } else {
        result = `${this[0]}${sep}`;
      }

      for (let k = 1; k < this.length; k++) {
        if (k === (this.length - 1)) {
          if (this[k] == null || this[k] === undefined) {
            return result;
          } else {
            result += `${this[k]}`;
          }
        } else {
          if (this[k] == null || this[k] === undefined) {
            result += `${sep}`;
          } else {
            result += `${this[k]}${sep}`;
          }
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
