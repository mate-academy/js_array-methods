'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const element of this) {
      result += element + separator;
    }

    return result.slice(0, -separator.length); ;
  };
}

module.exports = applyCustomJoin;
