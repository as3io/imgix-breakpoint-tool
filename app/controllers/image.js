import Controller from '@ember/controller';

const { round } = Math;

export default Controller.extend({
  queryParams: ['src', 'cache'],
  src: null,
  cache: true,

  actions: {
    setImageInfo(info) {
      this.set('imageInfo', info);
    },
    setFocalPoint({ offset, event }) {
      const img = event.target;

      const x = round((offset.x / img.width) * 100) / 100;
      const y = round((offset.y / img.height) * 100) / 100;

      this.set('focalpoint', {
        x,
        y,
        xPct: round(x * 100),
        yPct: round(y * 100),
      });
    },
    clearFocalPoint() {
      this.set('focalpoint', null);
    },
    setTest(test) {
      this.set('test', test);
    },
  },
});
