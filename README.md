Notes for updating to Meteor 0.9.0
----------------------------------

This package is now called `anti:i18n`.



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

### Replacing variables in translations with values

It's also possible to put variables in your translations and replace them with values.

If the `store.purchase` translation looked like this: `'You have bought ${1} apples'

Calling the i18n method/helper with an additional argument like so:

`i18n('store.purchase', 20)` or `{{i18n 'store.purchase' 20}}` will result in this translation: `'You have bought 20 apples'`.

You can use as many variables as you want in your translations as long as they follow this pattern, the numbers of the integer inside of ${} will correspond with the number of arguments. These variables correspond with the same variables you give to the functions.






