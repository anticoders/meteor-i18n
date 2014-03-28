/*
  just-i18n package for Meteor.js
  author: Hubert OG <hubert@orlikarnia.com>
*/

var maps = {};
var defaultLanguage = 'en';
var language = '';
var dep = new Deps.Dependency();
var missingTemplate = '';
var showMissing = false;

/*
  Get the value for the given key
*/
i18n = function(label) {
  dep.depend();
  if(typeof label !== 'string') return '';
  return (maps[language] && maps[language][label]) ||
         (maps[defaultLanguage] && maps[defaultLanguage][label]) ||
         (showMissing && _.template(missingTemplate, {language: language, defaultLanguage: defaultLanguage, label: label})) ||
         '';
};

/*
  Register handlebars helper
*/
if(Meteor.isClient) {
  if(UI) {
    UI.registerHelper('i18n', function (x) {
      return i18n(x);
    });
  } else if(Handlebars) {
    Handlebars.registerHelper('i18n', function (x) {
      return i18n(x);
    });
  }
}

/*
  Settings
*/
i18n.setLanguage = function(lng) {
  language = lng;
  dep.changed();
};

i18n.setDefaultLanguage = function(lng) {
  defaultLanguage = lng;
  dep.changed();
};

i18n.getLanguage = function() {
  dep.depend();
  return language;
};

i18n.showMissing = function(template) {
  if(template) {
    if(typeof template === 'string') {
      missingTemplate = template;
    } else {
      missingTemplate = '[<%= label %>]';
    }
    showMissing = true;
  } else {
    missingTemplate = '';
    showMissing = false;
  }
};

/*
  Register map
*/
i18n.map = function(language, map) {
  if(!maps[language]) maps[language] = {};
  registerMap(language, '', false, map);
  dep.changed();
};

var registerMap = function(language, prefix, dot, map) {
  if(typeof map === 'string') {
    maps[language][prefix] = map;
  } else if(typeof map === 'object') {
    if(dot) prefix = prefix + '.';
    _.each(map, function(value, key) {
      registerMap(language, prefix + key, true, value);
    });
  }
};

