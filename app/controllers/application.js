import Controller from '@ember/controller';

export default Controller.extend({
  // queryParams: ['domain', 'path'],
  // domain: null,
  // path: null,


  // breakpoints: {
  //   // Platform Media Widths
  //   screen: [100, 160, 320, 480, 640, 960, 1280, 1920], // "Standard" resolution widths
  //   // Bootstrap4 "Breakpoint" Widths
  //   bootstrap: [120, 300, 540, 720, 960, 1140, 1380], // 180/240 alternating
  // },

  // aspectRatios: ['21:9', '16:9', '3:2', '4:3', '1:1'],

  // cropTypeSize: 480,

  // selectedWidths: [],
  // selectedRatios: [],
  // breakpointType: '',

  // init() {
  //   this._super(...arguments);
  //   this.set('selectedRatios', this.get('aspectRatios').slice(0));
  // },

  // actions: {
  //   setBreakpointType(type) {
  //     this.set('selectedWidths', this.get(`breakpoints.${type}`));
  //     this.set('breakpointType', type);
  //   },

  //   runCropTypeTest(url) {
  //     const types = ['edges', 'faces', 'entropy', 'focalpoint'];
  //   },

  //   runEntropy(url) {
  //     this.set('entropyResults', []);

  //     const widths = this.get('selectedWidths');
  //     const aspects = this.get('selectedRatios');

  //     const dpr = window.devicePixelRatio || 1;
  //     this.set('dpr', dpr);

  //     const sizes = aspects.map((aspect) => {
  //       const result = {
  //         aspect,
  //         crops: [],
  //       }
  //       const v = aspect.split(':');
  //       const n = v[0] / v[1];
  //       widths.forEach((width) => {
  //         const height = Math.round(width / n);
  //         result.crops.push({
  //           width,
  //           height,
  //           url: `${url}?crop=edges&fit=crop&w=${width}&h=${height}&dpr=${dpr}&auto=format`,
  //         });
  //       });
  //       return result;
  //     });
  //     this.set('entropyResults', sizes);
  //   },
  // },

});
