import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('device-pixel-ratio', 'Integration | Component | device pixel ratio', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{device-pixel-ratio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#device-pixel-ratio}}
      template block text
    {{/device-pixel-ratio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
