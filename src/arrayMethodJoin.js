'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrJoined = '';

    for (let i = 0; i < this.length; i++) {
      arrJoined += [undefined, null].includes(this[i])
        ? ''
        : this[i];
      arrJoined += separator;
    }

    return arrJoined.slice(0, arrJoined.length - String(separator).length);
  };
}

module.exports = applyCustomJoin;
