/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import siteConfig from '@generated/docusaurus.config';
import mediumZoom from 'medium-zoom'

const { themeConfig } = siteConfig;

export default (function () {

  const selector = (themeConfig&&themeConfig.zoomSelector) || '.markdown img';

  setTimeout(() => {
    mediumZoom(selector);
  }, 100);


  return {
    onRouteUpdate({ location }) {
      setTimeout(() => {
        mediumZoom(selector);
      }, 100);
    },
  };
})();
