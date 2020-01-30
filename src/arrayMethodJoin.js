'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let join = '';
    const separatorStr = `${separator}`;

    for (let i = 0; i < this.length; i += 1) {
      if (this[i] === null || this[i] === undefined) {
        join += '' + separatorStr;
      } else if (i !== this.length - 1) {
        join += this[i] + separatorStr;
      } else {
        join += this[i];
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
