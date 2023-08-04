'use strict';

/**
 * Custom join method
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        string += separator;
      }

      let item = this[i];

      if (item === null || item === undefined) {
        item = '';
      }

      string += item;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
