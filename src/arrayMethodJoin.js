'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const newSeperator = '' + separator;

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === undefined) {
        item = '';
      }

      if (item === null) {
        item = '';
      }

      if (i === this.length - 1) {
        str += item;
        break;
      }
      str += item + newSeperator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
