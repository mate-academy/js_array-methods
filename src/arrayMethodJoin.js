'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let resultString = '';
    let firstSymbol = true;

    for (let charachter of this) {
      if (charachter === null || charachter === undefined) {
        charachter = '';
      }

      if (firstSymbol) {
        resultString += charachter;
        firstSymbol = false;
        continue;
      }

      resultString += `${separator}` + charachter;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
