const fs = require('fs');
const fileNamesOfType = require('./filenames-of-type');

module.exports = function(partialsDir) {
  const extension = 'hbs';
  return fileNamesOfType(extension, partialsDir).reduce((prev, current) => {
    prev[current] = fs.readFileSync(
      `${partialsDir}/${current}.${extension}`, 'utf8'
    );

    return prev;
  }, {});
};
