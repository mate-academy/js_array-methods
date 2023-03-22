'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newProto = '';
    let item = '';

    if ((separator !== undefined) && (this.length === 0)) {
      return newProto;
    }

    if (separator !== undefined) {
      for (let i = 0; i <= this.length - 2; i++) {
        if ((this[i] === null)
         || (this[i] === undefined)) {
          item = '';
        } else {
          item = this[i];
        };
        newProto += `${item}` + separator;
      }

      if ((this[this.length - 1] !== null)
       && (this[this.length - 1] !== undefined)) {
        newProto += `${this[this.length - 1]}`;
      }
    } else {
      for (let i = 0; i <= this.length - 2; i++) {
        newProto += `${this[i]}` + ',';
      }
      newProto += `${this[this.length - 1]}`;
    }

    return newProto;
  };
}

module.exports = applyCustomJoin;
