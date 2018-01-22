/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { join } = require('path');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  const bootstrap = 'node_modules/bootstrap/dist';
  // Bootstrap JS and source maps.
  app.import(join(bootstrap, 'js/bootstrap.bundle.min.js'));
  app.import(join(bootstrap, 'js/bootstrap.bundle.min.js.map'), { destDir: 'assets' });
  app.import(join(bootstrap, 'css/bootstrap.min.css.map'), { destDir: 'assets' });

  // Fraction JS
  app.import('node_modules/fraction.js/fraction.min.js', {
    using: [
      { transformation: 'amd', as: 'fraction.js' }
    ]
  });

  // filesize
  app.import('node_modules/filesize/lib/filesize.js', {
    using: [
      { transformation: 'amd', as: 'filesize' }
    ]
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
