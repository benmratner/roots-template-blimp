const handlebars = require('handlebars');

module.exports = function(context) {
  console.log('\nDEBUG:', context);

  return new handlebars.SafeString(
    `
    <pre>${JSON.stringify(context, null, 2)}</pre>
    <script>
      window.debug$ = ${JSON.stringify(context)};
      console.dir(_context);
    </script>
    `

  );
};
