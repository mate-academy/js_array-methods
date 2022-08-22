'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length >= 0) {
      for (let i = 0; i < this.length; i++) {
        if (this.length === 1) {
          str += this[i];
          break;
        }

        if (separator === null) {
          if (this.length - 1 === i) {
            str += this[i];
            break;
          }
          str += this[i] + 'null';
          continue;
        }

        if (separator === '') {
          str += this[i];
          continue;
        }

        if (separator === undefined) {
          if (this.length - 1 === i) {
            str += this[i];
            break;
          }
          str += this[i] + ',';
          continue;
        }

        if (!separator) {
          str += this[i] + ',';
          continue;
        }

        if (this[i] === null || this[i] === undefined) {
          if (this.length - 1 === i) {
            if (this[i] === undefined) {
              break;
            }
          }
          str += separator;
          continue;
        }

        if (this.length - 1 === i) {
          str += this[i];
          break;
        }
        str += this[i] + separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
