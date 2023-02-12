'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strJoin = '';

    if (this.length === 0) {
      return '';
    }

    let fixedSeparator = separator;

    if (separator === null) {
      fixedSeparator = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      let element = this[i];

      if (element === undefined || element === null) {
        element = '';
      }

      strJoin += element + fixedSeparator;
    }

    if (this[this.length - 1]) {
      strJoin += this[this.length - 1];
    }

    return strJoin;
  };
}

module.exports = applyCustomJoin;
