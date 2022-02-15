'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let masive = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        masive += `` + separator;
      } else {
        masive += `${this[i]}` + separator;
      }
    }

    if (this[this.length - 1] === undefined) {
      return `${masive}`;
    }

    return `${masive}` + `${this[this.length - 1]}`;
  };
};

module.exports = applyCustomJoin;
