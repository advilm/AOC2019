module.exports = class {
  constructor() {
    this.result = require('../../Inputs/Day-1.js').split('\n').map(x => (x / 3 | 0) - 2).reduce((a, b) => a + b);
  }
};