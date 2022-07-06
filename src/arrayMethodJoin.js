'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = String();

    const stringOfSeparator = (separator === undefined)
      ? ','
      : separator;

    for (let i = 0; i < this.length; i++) {
      const joiningElement = (this[i] === null || this[i] === undefined)
        ? ''
        : this[i];

      const stringEnding = (i === this.length - 1)
        ? ''
        : stringOfSeparator;

      resultString += `${joiningElement}` + `${stringEnding}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
