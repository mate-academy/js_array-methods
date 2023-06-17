'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatorSttring = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        separatorSttring += this[i];
      }

      if (i !== this.length - 1) {
        separatorSttring += separator;
      }
    }

    return separatorSttring;
  };
}

module.exports = applyCustomJoin;
