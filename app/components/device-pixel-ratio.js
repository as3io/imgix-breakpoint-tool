import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  didInsertElement() {
    this.set('value', window.devicePixelRatio);
  },
});
