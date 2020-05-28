'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let result = '';
    let joint = '';

    if (separator === undefined) {
      joint = ',';
    } else if (separator === null) {
      joint = 'null';
    } else {
      joint = separator.toString();
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += '' + joint;
      } else if (i !== this.length - 1 && this.length !== 1) {
        result += this[i] + joint;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
