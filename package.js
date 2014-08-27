Package.describe({
  name:     'anti:i18n',
  version:  '0.4.3',
  summary:  'Internalization: simplest package',
  git:      'https://github.com/anticoders/meteor-i18n.git',
});

Package.on_use(function (api, where) {
  api.versionsFrom('0.9.0');
  api.use(['underscore', 'ui', 'deps'], ['client', 'server']);
  api.export('i18n', ['client', 'server']);
  api.add_files('i18n.js', ['client', 'server']);
});

// Package.on_test(function(api){
//   api.use(['tinytest','handlebars','test-helpers','templating', 'test-helpers', 'jquery'], ['client', 'server']);
//   api.add_files(['tests/shared/i18n.js']);
//   api.add_files(['tests/client/i18n.js', 'tests/client/i18n.html'], ['client']);

// });

