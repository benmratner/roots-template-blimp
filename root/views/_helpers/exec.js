const handlebars = require('handlebars');

module.exports = function(fn) {
  const args = Array.prototype.slice.call(arguments);
  return new handlebars.SafeString(fn.apply(this, args.slice(1, args.length - 1)));
};
