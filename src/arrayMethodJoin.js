'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = '';
    let newWord = '';

    if (separator.length > 0) {
      sep = separator;
    }

    for (let i = 1; i < this.length; i++) {
      const element = this[i];

      if (i !== this.length - 1) {
        newWord += element + sep;
        continue;
      }
      newWord += element;
    }

    return newWord;
  };
}

module.exports = applyCustomJoin;
