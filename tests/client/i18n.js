Tinytest.add('i18n direct call with params', function (test) {
  config();
  var convertedString = i18n('items', 'foo','bar');
  test.equal(convertedString, 'purchased foo and bar');
});

Tinytest.add('i18n helper1', function (test) {
  config();
  UI.insert(UI.renderWithData(Template.testI18nTemplate, {key: "hello"}), document.body);

  var convertedString = $('#translated-string').html();
  test.equal(convertedString, 'world');
});

Tinytest.add('i18n helper with params', function (test) {
  config();
  UI.insert(UI.renderWithData(Template.testI18nTemplateWithParams, {key: "items", param1: 'foo', param2: 'bar'}), document.body);
  var convertedString = $('#translated-string-with-params').html();
  test.equal(convertedString, 'purchased foo and bar');
});

function config(){
  i18n.setLanguage('en_US');
  i18n.map('en', {
    hello: 'world',
    items: 'purchased {$1} and {$2}',
    store: {
      purchase: 'buy now',
      basket: 'basket',
    },
    'shipping.options': 'shipping'
  });
}