'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let newSeparator = separator;

    if (newSeparator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let word = this[i];

      if (word === null || word === undefined) {
        word = '';
      }

      if (i === this.length - 1) {
        string += word;
      } else {
        string += word + newSeparator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
