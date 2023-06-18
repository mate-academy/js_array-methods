'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let addition = separator;

    if (arguments.length === 0 || separator === undefined) {
      addition = ',';
    }

    if (separator === null) {
      addition = 'null';
    }

    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        str += i + 1 !== this.length ? this[i] + addition : this[i];
      } else {
        str += i + 1 !== this.length ? addition : '';
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
