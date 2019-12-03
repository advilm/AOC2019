const { resolve } = require('path');

const outputs = {};
const walker = require('walk').walk('./src');

walker.on('file', async (root, stats, next) => {
  if (stats.name.startsWith('Part')) {
    if (!outputs[root.split('\\')[1]]) outputs[root.split('\\')[1]] = {};
    outputs[root.split('\\')[1]][stats.name.slice(0, -3)] = new (require(`${resolve(root)}/${stats.name}`))().result;
  }
  next();
});

walker.on('end', () => {
  var display = '';
  Object.keys(outputs).sort().map(x => display += `${x.replace('-', ' ')} | Part 1: ${outputs[x]['Part-1']}, Part 2: ${outputs[x]['Part-2']}\n`);
  console.log(display);
});
