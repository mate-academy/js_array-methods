'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        str += '';
      } else {
        str += this[i];
      }

      if (i !== this.length - 1) {
        str += String(separator);
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
