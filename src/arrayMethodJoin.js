'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let editMassive = '';
    const statusSeparator = separator !== undefined;

    for (let i = 0; i < this.length; i++) {
      const statusThisUnd = this[i] !== undefined;
      const statusThisNull = this[i] !== null;
      const statusThis = statusThisUnd && statusThisNull;

      if (statusThis) {
        editMassive = `${editMassive}${this[i]}`;

        if (i !== this.length - 1 && statusSeparator) {
          editMassive = `${editMassive}${separator}`;
        }
      }

      if (i !== this.length - 1 && (!statusSeparator || !statusThis)) {
        editMassive = `${editMassive},`;
      }
    }

    return editMassive;
  };
}

module.exports = applyCustomJoin;
