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
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        if (
          (!this[i]) && (this[i] !== 0)
            && (this[i] !== false)
            && (!isNaN(this[i]))
        ) {
          this[i] = '';
        }

        if (this[i] === undefined) {
          this[i] = '';
        }

        result = result + this[i] + separator;
      }

      result = result + valuesArray[valuesArray.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
