import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  classNames: ['form-inline'],

  actions: {
    clear() {
      this.sendAction('on-clear');
    },
  },
});
