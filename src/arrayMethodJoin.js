'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayJoin = '';

    if (!this.length) {
      return arrayJoin;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        arrayJoin += separator;
      } else if (i === this.length - 1) {
        arrayJoin += String(this[i]);

        return arrayJoin;
      } else {
        arrayJoin += String(this[i]) + separator;
      }
    }

    return arrayJoin;
  };
}

module.exports = applyCustomJoin;
