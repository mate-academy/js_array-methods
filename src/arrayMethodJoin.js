'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let output = '';
    let useSeparator = separator;

    if (separator === null) {
      useSeparator = 'null';
    };

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (this[i] === null || this[i] === undefined) {
        item = '';
      };

      if (i !== this.length - 1) {
        // Add separator only if it's not the last item of array
        output += item + useSeparator;
      } else {
        output += item;
      };
    }

    return output;
  };
}

module.exports = applyCustomJoin;
