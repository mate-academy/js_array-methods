'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let delimiter = separator;
    const exceptions = [null, undefined];

    if (delimiter === null) {
      delimiter = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      const elem = this[i];

      if (!exceptions.includes(this[i])) {
        string += elem;
      }

      if (this[i] !== this[this.length - 1]) {
        string += delimiter;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
