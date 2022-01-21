'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrJoined = '';
    let tempElement = '';

    if (this[0] !== undefined && this[0] !== null) {
      arrJoined = this[0].toString();
    }

    for (let i = 1; i < this.length; i++) {
      tempElement = '';

      if (this[i] !== undefined && this[i] !== null) {
        tempElement = this[i].toString();
      }

      arrJoined += separator + tempElement;
    }

    return arrJoined;
  };
}

module.exports = applyCustomJoin;
