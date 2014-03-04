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

## Advanced options

### `i18n.showMissing(missing)`

Decide whether to show a warning when there's no translation in the current and default language.

- `false`: Display nothing (default).
- `true`: Display the placeholder in default format, `[<%= label %>]`.
- *String*: Display the placeholder in custom format. The given string will be used as underscore template with the following parameters:
    - `label`
    - `language`
    - `defaultLanguage`

Example: `i18n.showMissing('[no translation for "<%= label %>" in <%= language %>]');`






