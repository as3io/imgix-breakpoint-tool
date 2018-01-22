import Service from '@ember/service';
import fetch from 'fetch';
import { reject } from 'rsvp';
import ImageResponse from 'imgix-breakpoint-tool/objects/image-response';

export default Service.extend({

  /**
   *
   * @param {object} params
   * @return {Promise}
   */
  fetch({ src, cache = true, accepts = 'image/webp,image/*,*/*;q=0.8' } = {}) {
    if (!src) return reject(new Error('No image source was found in the request.'));
    const headers = {
      'accepts': accepts || '*/*',
    };
    if (!cache) {
      headers['cache-control'] = 'no-cache';
      headers['pragma'] = 'no-cache';
    }

    return fetch(src, { headers }).then((response) => {
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return response.blob();
    }).then((blob) => {
      return ImageResponse.create({ src, blob });
    });
  },
});
