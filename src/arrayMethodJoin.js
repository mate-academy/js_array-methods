'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoin = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === undefined || item === null) {
        item = '';
      }

      if (i !== this.length - 1) {
        resultOfJoin += item + sep;
      } else {
        resultOfJoin += item;
      }
    }

    return resultOfJoin;
  };
}

module.exports = applyCustomJoin;
