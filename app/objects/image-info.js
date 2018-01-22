import EmberObject from '@ember/object';
import { computed } from '@ember/object';
import filesize from 'filesize';
import Fraction from 'fraction.js';

const { round } = Math;

export default EmberObject.extend({
  src: '',
  objectURL: '',
  bytes: '0', // Cast as string.
  type: 'image/*',
  width: 0,
  height: 0,
  element: {},

  dimensions: computed('width', 'height', function() {
    return `${this.get('width')}x${this.get('height')}`;
  }),

  filesize: computed('bytes', function() {
    const bytes = this.get('bytes');
    return filesize(bytes);
  }),

  /**
   * The aspect ratio, in "common" format, e.g. 21:9.
   */
  aspectRatio: computed('ratio', function() {
    const frac = Fraction(this.get('ratio'));
    return frac.toFraction().replace('/', ':');
  }),

  /**
   * The aspect ratio, as a non-rounded decimal.
   */
  ratio: computed('width', 'height', function() {
    const height = this.get('height');
    const ratio = height > 0 ? this.get('width') / height : 0;
    return ratio;
  }),

  /**
   * The aspect ratio, as a rounded decimal, e.g. 1.67.
   */
  ratioRounded: computed('ratio', function() {
    return round(this.get('ratio') * 100) / 100;
  }),

  orientation: computed('ratio', function() {
    const ratio = this.get('ratio');
    const offset = .15;
    if (ratio < 1 - offset && ratio > 1) return 'Landscape (Leaning Square)';
    if (ratio > 1 - offset && ratio < 1) return 'Portrait (Leaning Square)';
    if (ratio > 1) return 'Landscape';
    if (ratio < 1) return 'Portrait';
    return 'Square';
  }),
});
