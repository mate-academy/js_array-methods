'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      const currentElement = (this[i] === undefined
        || this[i] === null) ? '' : this[i];

      if (i !== this.length - 1) {
        string += `${currentElement}${separator}`;
        continue;
      }

      string += currentElement;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
