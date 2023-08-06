'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultJoin = '';
    const separatorItem = (() => {
      switch (separator) {
        case '':
          return '';
        case null:
          return 'null';
        case undefined:
          return ',';
        default:
          return separator;
      }
    })();

    let returnItem;

    for (let i = 0; i < this.length; i++) {
      returnItem = (this[i] === undefined || this[i] === null) ? '' : this[i];
      if (i === 0) {
        resultJoin = `${returnItem}`;
      } else {
        resultJoin = `${resultJoin}${separatorItem}${returnItem}`;
      }
    }

    return resultJoin;
  };
}

module.exports = applyCustomJoin;
