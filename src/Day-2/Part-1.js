module.exports = class {
  constructor() {
    const arr = require('../../Inputs/Day-2.js').split(',').map(x => Number(x));
    (arr[1] = 12) && (arr[2] = 2);

    for (var asdf = 0; asdf < arr.length; asdf += 4) {
      const item = arr[asdf];
            
      if (item === 99) break;
      
      if (item === 1)  arr[arr.slice(asdf)[3]] = arr[arr.slice(asdf)[1]] + arr[arr.slice(asdf)[2]];
      else if (item === 2) arr[arr.slice(asdf)[3]] = arr[arr.slice(asdf)[1]] * arr[arr.slice(asdf)[2]];
      else { console.log('Err, invalid instruction ', item); break; }
    } 
      
    this.result = arr[0];
  }
};