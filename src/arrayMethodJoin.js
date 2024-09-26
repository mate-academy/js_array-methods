'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const item of this) {
      if (item !== undefined && item !== null) {
        result += item;
      };

      if (this.indexOf(item) !== this.length - 1) {
        result += separator;
      };
    }

    return result;
  };
}

module.exports = applyCustomJoin;
