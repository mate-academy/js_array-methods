'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultAfterJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultAfterJoin += this[i];
      }

      if (i < this.length - 1) {
        resultAfterJoin += separator;
      }
    };

    return resultAfterJoin;
  };
}

module.exports = applyCustomJoin;
