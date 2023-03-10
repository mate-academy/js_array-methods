'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let final = '';
    const joinSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = ''; // code doesn't pass tests if I skip this iteration
      }

      final += element;

      if (i !== this.length - 1) {
        final += joinSeparator;
      };
    };

    return final;
  };
}

module.exports = applyCustomJoin;
