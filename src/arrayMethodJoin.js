'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let rezult = '';
    const long = this.length;

    for (let i = 0; i < this.length; i++) {
      switch (long > 0) {
        case this[this.length - 1] === undefined && i === long - 1:
          rezult += '';
          break;

        case (long - 1) === i || long <= 1:
          rezult += this[i];
          break;

        case separator === undefined:
          rezult += this[i] + ',';
          break;

        case separator === null:
          rezult += this[i] + 'null';
          break;

        case this[i] === null || this[i] === undefined:
          rezult += ',';
          break;

        default:
          rezult += this[i] + separator;
          break;
      }
    }

    return rezult;
  };
}

module.exports = applyCustomJoin;
