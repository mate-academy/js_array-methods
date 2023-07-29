'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const newSeperator = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += String(this[i]);
      }

      if (i !== this.length - 1) {
        result += newSeperator;
      }
    }

    return result;
  };
}
module.exports = applyCustomJoin;
