'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    // if (this.length < 0) {
    //   return this;
    // }
    let sep = separator;
    let joinedText = '';

    if (separator === null) {
      sep = 'null';
    } else if (separator === undefined) {
      sep = ',';
    }

    if (this.length === 1) {
      joinedText += this[0];

      return joinedText;
    } else if (this.length > 1) {
      switch (this[0]) {
        case null:
          joinedText += '';
          break;

        default:
          joinedText += this[0];
          break;
      }
    }

    if (this.length > 1) {
      for (let i = 1; i < this.length; i++) {
        let elem = this[i];

        switch (this[i]) {
          case null:
            elem = '';
            break;

          case undefined:
            elem = '';
            break;

          default:
            elem = this[i];
            break;
        }
        joinedText += (sep + elem);
        elem = '';
      }
    }

    return joinedText;
  };
}

module.exports = applyCustomJoin;
