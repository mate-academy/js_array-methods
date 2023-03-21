'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (separator === null) {
      // eslint-disable-next-line no-param-reassign
      separator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i < this.length - 1) {
          string += separator;
        }

        continue;
      }

      if (i < this.length - 1) {
        string += this[i] + separator;
      }

      if (i === this.length - 1) {
        string += this[i].toString();
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
