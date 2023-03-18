'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const joinOperator = separator === null ? 'null' : separator;

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result = this.length - 1 === i
          ? result + ''
          : result + '' + joinOperator;
      } else {
        result = this.length - 1 === i
          ? result + this[i]
          : result + this[i] + joinOperator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
