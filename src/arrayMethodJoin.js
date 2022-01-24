'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrJoined = '';

    arrJoined += [undefined, null].includes(this[0])
      ? ''
      : this[0];

    for (let i = 1; i < this.length; i++) {
      arrJoined += separator;

      arrJoined += [undefined, null].includes(this[i])
        ? ''
        : this[i];
    }

    return arrJoined;
  };
}

module.exports = applyCustomJoin;
