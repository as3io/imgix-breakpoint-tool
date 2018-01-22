import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  units: inject(),

  originalSrc: '',

  focalpoint: {
    x: null,
    y: null,
  },

  previewWidth: 480,
  selectedRatios: [],

  results: null,

  init() {
    this._super(...arguments);
    this.set('selectedRatios', this.get('units.ratios').slice(0));
  },

  actions: {
    run() {

      const dpr = window.devicePixelRatio;
      const original = this.get('originalSrc');
      const width = 480;
      const fpX = this.get('focalpoint.x') || '';
      const fpY = this.get('focalpoint.y') || '';
      const ratios = this.get('selectedRatios').map((ratio) => {
        const result = { label: ratio.label, crops: [] };
        const height = Math.round(width / ratio.value);
        this.get('units.cropTypes').forEach((crop) => {
          let src = `${original}?w=${width}&h=${height}&crop=${crop.type}&fit=crop&dpr=${dpr}`;

          if (crop.type === 'focalpoint') {
            src = `${src}&fp-x=${fpX}&fp-y=${fpY}`;
          }

          result.crops.push({ label: crop.label, src });
        });
        return result;
      });

      this.sendAction('on-run', {
        component: 'compare-crops/run',
        props: { ratios },
      });
    },
  },
});
