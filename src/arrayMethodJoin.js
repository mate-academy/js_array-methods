'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let thisResult = '';

    for (const i of this) {
      if (i === undefined || i === null) {
        thisResult += separator;
      } else if (i === this[this.length - 1]) {
        thisResult += i;
      } else {
        thisResult += '' + i + separator;
      }
    }

    return thisResult;
  };
}

module.exports = applyCustomJoin;
