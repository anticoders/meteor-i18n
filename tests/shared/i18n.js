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
Tinytest.add('i18n direct call1', function (test) {
  config();
  var convertedString = i18n('hello');
  test.equal(convertedString, 'world');
});

Tinytest.add('i18n direct call2', function (test) {
  config();
  var convertedString = i18n('store.purchase');
  test.equal(convertedString, 'buy now');
});