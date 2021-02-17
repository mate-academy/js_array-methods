'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const valuesArray = [...this];

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if ((this[i] === undefined) || (this[i] === null)) {
        this[i] = '';
      }

      result = result + this[i] + separator;
    }

    result = result + valuesArray[valuesArray.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
