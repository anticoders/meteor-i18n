i18n = function(key) {
  i18n._dep.depend();
  if(typeof key !== 'string') return '';
  return getValue(i18n._language, key) || getValue(i18n._default, key) || '';
} 

function getValue (language, key) {
  var map = i18n._maps[language];
  return map !== undefined ? map[key] : false;
}

i18n._maps = {};

i18n._default = 'en';
i18n._language = '';
i18n._dep = new Deps.Dependency();

i18n.setLanguage = function(language) {
  i18n._language = language;
  i18n._dep.changed();
};

i18n.setDefaultLanguage = function(language) {
  i18n._default = language;
  i18n._dep.changed();
};

i18n.getLanguage = function() {
  i18n._dep.depend();
  return i18n._language;
};

i18n.map = function(language, map) {
  var langMap = i18n._maps[language];
  if(! langMap) {
    langMap = i18n._maps[language] = {};
  } 

  flatten(map, langMap)

  i18n._dep.changed();
};

function flatten(srcMap, destMap, prefix) {
  prefix = prefix || "";

  _.each(srcMap, function(value, key){
    if (typeof value === "object") {
      flatten(value, destMap, prefix + key + ".");
    }
    else {
      destMap[prefix + key] = value;
    }
  });
}

if(Meteor.isClient) {
  Handlebars.registerHelper('i18n', function(x) {
    return i18n(x);
  });
};