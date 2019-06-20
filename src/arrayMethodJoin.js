'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let myJoinArray = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        myJoinArray += this[i];
      }
      if (this.length - 1 === i) {
        myJoinArray += this[i];
        return myJoinArray;
      }
      myJoinArray += (this[i] + `${separator}`);
    }

    return myJoinArray;
  };
}

module.exports = applyCustomJoin;
