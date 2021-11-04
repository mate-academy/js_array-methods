'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const termSep = separator;
    const arrLeghts = this.length;

    if (arrLeghts === 0) {
      return result;
    }

    for (let i = 0; i < arrLeghts; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i !== arrLeghts - 1) {
        result += termSep;
      }
    }

    return result;
  };
}
module.exports = applyCustomJoin;
