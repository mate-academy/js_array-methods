'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let index = 0; index < this.length; index++) {
      const element = this[index] === null
      || this[index] === undefined ? '' : this[index];
      const splitter = index !== this.length - 1 ? separator : '';

      joinedString += element;
      joinedString += splitter;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
