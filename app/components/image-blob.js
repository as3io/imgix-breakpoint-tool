import Component from '@ember/component';
import ImageInfo from 'imgix-breakpoint-tool/objects/image-info';

const { round } = Math;

export default Component.extend({
  tagName: 'img',
  attributeBindings: ['alt', 'title'],

  src: '', // The original file source.
  blob: {},

  isLoaded: false,

  click(event) {
    if (this.get('isLoaded')) {
      const offset = this.calcOffset(event);
      this.sendAction('on-click', { offset, event });
    }
  },

  didInsertElement() {
    const blob = this.get('blob');

    const img = this.getOriginalElement();

    const info = ImageInfo.create({
      src: this.get('src'),
      objectURL: URL.createObjectURL(blob),
      bytes: `${blob.size}`, // Send as string for large numbers.
      type: blob.type,
    });

    img.addEventListener('load', () => {
      const { naturalWidth, naturalHeight } = img;
      info.set('width', naturalWidth);
      info.set('height', naturalHeight);
      info.set('element', img);
      this.set('isLoaded', true);
      this.sendAction('on-load', info);
    });
    img.src = info.get('objectURL');
  },

  calcOffset(event) {
    const img = event.target;

    // The difference between the scaled w/h and the client displayed w/h.
    const diffX = round((img.clientWidth - img.width) / 2);
    const diffY = round((img.clientHeight - img.height) / 2);

    // Create new offset by removing these differences.
    const offset = {
      x: event.offsetX - diffX,
      y: event.offsetY - diffY,
    };
    // Ensure the calcs don't go outside the bounds of the actual image.
    ['x', 'y'].forEach((coord) => {
      const dim = 'x' === coord ? 'width' : 'height';
      if (offset[coord] < 0) {
        offset[coord] = 0;
      } else if (offset[coord] > img[dim]) {
        offset[coord] = img[dim];
      }
    });
    return offset;
  },

  getElement() {
    return this.$();
  },

  getOriginalElement() {
    return this.getElement()[0];
  },
});
