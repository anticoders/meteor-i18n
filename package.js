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


