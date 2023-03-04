'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let final = '';
    let joinSeparator = separator;

    if (joinSeparator === undefined) {
      joinSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
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
