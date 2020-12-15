'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';
    let separNew = separator;

    if (arguments.length === 0 || separator === undefined) {
      separNew = ',';
    }

    if (separator === null) {
      separNew = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (this[i] === undefined || this[i] === null) {
        item = '';
      }

      if (i === this.length - 1) {
        str = str + item;
      }

      if (i !== this.length - 1) {
        str = str + item + separNew;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
