const fileNamesOfType = require('./filenames-of-type');

module.exports = function(helpersDir) {
  return fileNamesOfType('js', helpersDir).reduce((prev, current) => {
    prev[current] = require(`${helpersDir}/${current}`);
    return prev;
  }, {});
};
