'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let thisSeparator = separator;
    let thisResult = '';

    if (separator === undefined) {
      thisSeparator = ',';
    }

    for (const i of this) {
      if (i === undefined || i === null) {
        thisResult += thisSeparator;
      } else if (i === this[this.length - 1]) {
        thisResult += i;
      } else {
        thisResult += '' + i + thisSeparator;
      }
    }

    return thisResult;
  };
}

module.exports = applyCustomJoin;
