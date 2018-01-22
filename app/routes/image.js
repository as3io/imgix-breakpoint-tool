import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  imageStore: inject(),

  queryParams: {
    src: { refreshModel: true },
    cache: { refreshModel: true },
  },

  model({ src, cache } = {}) {
    return this.get('imageStore').fetch({ src, cache });
  },
  afterModel(response) {
    let processed;
    try {
      processed = JSON.parse(localStorage.getItem('processed')) || [];
    } catch (e) {
      processed = [];
    }
    if (!processed.includes(response.src)) {
      processed.push(response.src);
    }
    localStorage.setItem('processed', JSON.stringify(processed));
  },
});
