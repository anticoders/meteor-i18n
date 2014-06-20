Package.describe({
  summary: "Internalization: minimal and best package"
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.use(['underscore', 'ui', 'deps'], ['client', 'server']);
    api.export('i18n', ['client', 'server']);
  }
  api.add_files('i18n.js', ['client', 'server']);
});

Package.on_test(function(api){
  api.use(['tinytest','just-i18n','handlebars','test-helpers','templating', 'test-helpers', 'jquery'], ['client', 'server']);
  api.add_files(['tests/shared/i18n.js']);
  api.add_files(['tests/client/i18n.js', 'tests/client/i18n.html'], ['client']);

});

