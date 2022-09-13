'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    // write code here
    let str = ``;

    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const itemIsNullUndefine = (item === null || item === undefined);
      const elToJoin = itemIsNullUndefine ? '' : item;

      str += `${elToJoin}`;

      if (i !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
