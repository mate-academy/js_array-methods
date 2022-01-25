'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoin = '';
    let sepAsist = separator;

    if (separator === null) {
      sepAsist = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item !== undefined && item !== null) {
        resultOfJoin += item;
      }

      if (i !== this.length - 1) {
        resultOfJoin += sepAsist;
      }
    }

    return resultOfJoin;
  };
}

module.exports = applyCustomJoin;
