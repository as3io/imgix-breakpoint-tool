import Route from '@ember/routing/route';
import { resolve } from 'rsvp';

export default Route.extend({
  model() {
    let processed;
    try {
      processed = JSON.parse(localStorage.getItem('processed')) || [];
    } catch (e) {
      processed = [];
    }

    return resolve({ domain: '', path: '', processed });
  },
});
