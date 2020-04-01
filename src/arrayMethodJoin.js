'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let newSeparator = separator;

    switch (separator) {
      case undefined: newSeparator = ','; break;
      case null: newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i < this.length - 1) {
        if (this[i] !== null && this[i] !== undefined) {
          str += this[i] + newSeparator;
        } else {
          str += '' + newSeparator;
        }
      } else {
        str += this[i];
      }
    }

    return str;
  };
};

module.exports = applyCustomJoin;
