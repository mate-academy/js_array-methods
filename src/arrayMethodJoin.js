'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const thisArrLength = this.length;
    let strFromArr = '';
    let strSeparator = '';

    if (separator === undefined) {
      return String(this);
    } else {
      strSeparator = String(separator);
    }

    for (let i = 0; i < thisArrLength; i++) {
      if (i === 0) {
        switch (this[i]) {
          case null:
          case undefined:
            strFromArr += '';
            break;
          default:
            strFromArr += this[i];
        }
        continue;
      }

      switch (this[i]) {
        case null:
        case undefined:
          strFromArr += strSeparator + '';
          break;
        default:
          strFromArr += strSeparator + this[i];
      }
    }

    return strFromArr;
  };
}

module.exports = applyCustomJoin;
