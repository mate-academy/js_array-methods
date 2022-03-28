'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str_ = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str_ += '';

        if (i === this.length - 1) {
          break;
        }

        if (separator === undefined) {
          str_ += ',';
        } else if (separator !== undefined) {
          str_ += separator;
        }
      } else {
        str_ += this[i];

        if (i === this.length - 1) {
          break;
        }

        if (separator === undefined) {
          str_ += ',';
        } else if (separator !== undefined) {
          str_ += separator;
        }
      }
    }

    return str_;
  };
}

module.exports = applyCustomJoin;
