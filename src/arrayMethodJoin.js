// @@ -1,11 +1,28 @@

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
        str += this[i];
      }

      if (i !== this.length - 1) {
        str += addition;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
