import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  widths: {
    // Platform Media Widths
    screen: [100, 160, 320, 480, 640, 960, 1280, 1920], // "Standard" resolution widths
    // Bootstrap4 "Breakpoint" Widths
    bootstrap: [120, 300, 540, 720, 960, 1140, 1380], // 180/240 alternating
  },

  aspectRatios: ['21:9', '16:9', '3:2', '4:3', '1:1'],

  ratios: computed.map('aspectRatios', function(label) {
    const v = label.split(':');
    const value = v[0] / v[1];
    return { label, value };
  }),

  cropTypes: [
    { type: 'edges', label: 'Edge Detection' },
    { type: 'faces', label: 'Face Detection' },
    { type: 'entropy', label: 'Entropy' },
    { type: 'focalpoint', label: 'Focal Point' },
  ],
});
