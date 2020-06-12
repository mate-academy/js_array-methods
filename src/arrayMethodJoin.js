'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let stringFinish = '';

    if (this.length === 0) {
      return stringFinish;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (separator === undefined) {
        stringFinish = stringFinish + this[i] + ',';
      } else if (this[i] === null || this[i] === undefined) {
        this[i] = separator; stringFinish = stringFinish + this[i];
      } else {
        stringFinish = stringFinish + this[i] + separator;
      }
    };

    return stringFinish + this[this.length - 1];
  };
};

module.exports = applyCustomJoin;
