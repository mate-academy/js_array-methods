'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let delimiter = separator;
    const exceptions = [null, undefined];

    if (delimiter === undefined) {
      delimiter = ',';
    }

    if (delimiter === null) {
      delimiter = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === this[this.length - 1] && this[i] === undefined) {
        return string;
      }

      if (exceptions.includes(this[i])) {
        string += delimiter;
        continue;
      }

      if (this[i] === this[this.length - 1]) {
        string += this[i];

        return string;
      }

      const elem = this[i] + delimiter;

      string += elem;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
