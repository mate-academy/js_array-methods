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

    for (let i = 0; i < this.length - 1; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        strJoin += element;
      }

      strJoin += separator;
    }

    if (this[this.length - 1]) {
      strJoin += this[this.length - 1];
    }

    return strJoin;
  };
}

module.exports = applyCustomJoin;
