
var get = function(object, array) {
  var o = object;
  for(var i in array) {
    if(!o) return null;
    o = o[array[i]];
  }
  return o;
};

i18n = function(label) {
  i18n._dep.depend();
  if(typeof label !== 'string') return '';
  var array = label.split('.');
  return get(i18n._maps[i18n._language], array) || get(i18n._maps[i18n._default], array) || '';
} 

if(Meteor.isClient) {
  Handlebars.registerHelper('i18n', function(x) {
    return i18n(x);
  });
};

i18n._maps = {};

i18n._default = 'en';
i18n._language = '';
i18n._dep = new Deps.Dependency();

i18n.setLanguage = function(language) {
  i18n._language = language;
  i18n._dep.changed();
};
i18n.setDefaultLanguage = function(language) {
  i18n._default = 'language';
  i18n._dep.changed();
};
i18n.getLanguage = function() {
  i18n._dep.depend();
  return i18n._language;
};

i18n.map = function(language, map) {
  if(!i18n._maps[language]) i18n._maps[language] = {};
  _.extend(i18n._maps[language], map);
  i18n._dep.changed();
};





