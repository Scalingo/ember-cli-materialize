import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-btn-link', 'Integration | Component | md btn link', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#md-btn-link 'index'}}
      template block text
    {{/md-btn-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
