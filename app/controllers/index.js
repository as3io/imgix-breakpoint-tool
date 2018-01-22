import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  _domain: computed('model.domain', function() {
    return `https://${this.get('model.domain').replace('https://', '').replace('http://', '').trim().replace(/\/+$/g, '')}/`;
  }),

  _path: computed('model.path', function() {
    return this.get('model.path').trim().replace(/^\/+/g, '');
  }),

  _src: computed('_domain', '_path', function() {
    return `${this.get('_domain')}${this.get('_path')}`;
  }),

  actions: {
    retrieveImage(src) {
      const queryParams = { src };
      this.transitionToRoute('image', { queryParams });
    },
    clearPrevious() {
      this.set('model.processed', []);
      localStorage.removeItem('processed')
    },
  },
});
