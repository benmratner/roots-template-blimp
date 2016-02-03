const handlebars = require('handlebars');

module.exports = function() {
  const args = Array.prototype.slice.call(arguments);

  const href = args[0];
  const currentPath = args[1].data.root._path;
  const text = args[1].fn(this);
  var classes = args[1].hash.class;

  if (href === '/' && currentPath === '/index.html') {
    classes += ' active';

  }

  if (currentPath.startsWith(href) && href !== '/') {
    classes += ' active';
  }

  return new handlebars.SafeString(
    `<a href="${href}" class="${classes}">${text}</a>`
  );
};
