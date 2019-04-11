'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(symbol) {
    let length = this.length;
    // if recieved empty array , returns empty string
    let result = length
      ? `${this[0]}`
      : '';

    // typeof argument is undefined returns join by ','
    let joiner = symbol !== undefined
      ? `${symbol}`
      : ',';

    for (let i = 1; i < length; i++) {
      // i = 1 we dont need to touch first elem!
      if (typeof this[i] === 'undefined' || this[i] === null) {
        result += joiner;
      } else {
        result += `${joiner}${this[i]}`;
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
