'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = (this[0] === null || this[0] === undefined)
      ? ''
      : String(this[0]);
    const elementSerarator = separator === null
      ? 'null'
      : separator;

    for (let i = 1; i < this.length; i++) {
      const element = (this[i] === null || this[i] === undefined)
        ? ''
        : this[i];

      resultString += elementSerarator + element;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
