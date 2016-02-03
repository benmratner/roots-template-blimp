const fs = require('fs');

module.exports = function(ext, dir) {
  const filenames = fs.readdirSync(dir);

  const results = filenames.reduce(function(prev, filename) {
    const matches = new RegExp(`^([^.]+).${ext}$`).exec(filename);

    if (!matches) {
      return prev;
    }

    prev.push(matches[1]);
    return prev;
  }, []);

  return results;
};
