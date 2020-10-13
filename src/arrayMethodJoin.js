'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length === 0) {
      return str;
    } else if (this.length === 1) {
      str = String(this[0]);

      return str;
    } else {
      switch (separator) {
        case undefined: {
          this.forEach((element, index) => {
            const sep = ',';

            if (element === null || element === undefined) {
              if (index === this.length - 1) {
                str += `${''}`;
              } else {
                str += `${''}${sep}`;
              }
            } else {
              if (index === this.length - 1) {
                str += `${String(element)}`;
              } else {
                str += `${String(element)}${sep}`;
              }
            }
          });

          return str.trim();
        }

        case null: {
          this.forEach((element, index) => {
            if (index === this.length - 1) {
              str += `${String(element)}`;
            } else {
              str += `${String(element)}${String(separator)}`;
            }
          });

          return str.trim();
        }

        case '': {
          this.forEach(element => {
            if (element === null || element === undefined) {
              str += `${''}`;
            } else {
              str += `${String(element)}`;
            }
          });

          return str.trim();
        }

        case ' ': {
          this.forEach((element, index) => {
            if (element === null || element === undefined) {
              if (index === this.length - 1) {
                str += `${''}`;
              } else {
                str += `${''}${' '}`;
              }
            } else {
              if (index === this.length - 1) {
                str += `${String(element)}`;
              } else {
                str += `${String(element)}${' '}`;
              }
            }
          });

          return str.trim();
        }

        default: {
          this.forEach((element, index) => {
            if (element === null || element === undefined) {
              if (index === this.length - 1) {
                str += `${''}`;
              } else {
                str += `${''}${separator}`;
              }
            } else {
              if (index === this.length - 1) {
                str += `${String(element)}`;
              } else {
                str += `${String(element)}${separator}`;
              }
            }
          });

          return str.trim();
        }
      }
    }
  };
};

module.exports = applyCustomJoin;
