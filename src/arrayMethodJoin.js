'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null || this[i] === undefined)
        && i !== this.length - 1) {
        result += ('' + separator);
      } else if ((this[i] === null || this[i] === undefined)
      && i === this.length - 1) {
        result += '';
      } else if (i !== this.length - 1) {
        result += (String(this[i]) + separator);
      } else {
        result += String(this[i]);
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
