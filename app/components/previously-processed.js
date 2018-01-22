import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['card'],
  url: null,

  didInsertElement() {
    const parser = document.createElement('a');
    parser.href = this.get('url');
    this.set('parsed', parser);

    const { protocol, host, pathname } = parser;
    const slashes = '//';

    this.set('thumbnail', `${protocol}${slashes}${host}${pathname}?crop=edges&w=100&h=100&fit=crop`);
  },

  actions: {
    fetch() {
      this.sendAction('on-fetch', this.get('url'));
    },
  },
});
