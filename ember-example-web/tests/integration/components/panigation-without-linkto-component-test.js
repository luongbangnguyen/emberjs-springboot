import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('panigation-without-linkto-component', 'Integration | Component | panigation without linkto component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{panigation-without-linkto-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#panigation-without-linkto-component}}
      template block text
    {{/panigation-without-linkto-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
