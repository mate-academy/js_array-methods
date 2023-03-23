'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newProto = '';
    let separatorNew = separator;

    if (this.length === 0) {
      return newProto;
    }

    if (separatorNew === undefined) {
      separatorNew = ',';
    }

    if (separatorNew === null) {
      separatorNew = 'null';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      let item = this[i];

      if ((item === null) || (item === undefined)) {
        item = '';
      }

      if (i !== this.length - 1) {
        newProto += item + separatorNew;
      } else {
        newProto += item;
      }
    }

    return newProto;
  };
}

module.exports = applyCustomJoin;
