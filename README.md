# Internationalization for Meteor

A simple (The simplest possible? Perhaps) i18n package for Meteor.

# API



## `i18n(label)`

Get your localized text in Javascript.

Example: `i18n('store.purchase');`.



## `{{i18n label}}`

Get your localized text in Handlebars.

Example: `{{i18n "store.purchase"}}`.



## `i18n.map(language, map)`

Add new text map.

Example:

    i18n.map('en', {
      hello: 'world',
      store: {
        purchase: 'buy now',
        basket: 'basket',
      },
      'shipping.options': 'shipping',
    });



## `i18n.setLanguage(language)`

Set your current language.

Example: `i18n.setLanguage('en_US')`.



## `i18n.setDefaultLanguage(language)`

Set your default language. This is the base language, if there is no translation to the currently chosen one,
default language will be used instead.

Example: `i18n.setDefaultLanguage('en_US')`.



## `i18n.getLanguage()`

Get the current language code.
