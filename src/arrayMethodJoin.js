'use strict';

function applyCustomJoin() {
  /**
   * @param {string | undefined} separator
   * @returns {string} */
  [].__proto__.join2 = function(separator) {
    let inerSeparator;
    let joined = '';
    let temp = '';

    if (this.length === 0) {
      return joined;
    }

    switch (separator) {
      case null:
        inerSeparator = 'null';
        break;

      case undefined:
        inerSeparator = ',';
        break;

      default:
        inerSeparator = separator;
    }

    for (let i = 0, last = this.length - 1; ; i++) {
      temp = this[i];

      switch (temp) {
        case null:
        case undefined:
          temp = '';
          break;
      }

      joined += temp;

      if (i === last) {
        break;
      }

      joined += inerSeparator;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
