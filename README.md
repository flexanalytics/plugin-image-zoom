# Image Zoom Plugin for Docusaurus 2

## Install and Configure

* npm install ataft/plugin-image-zoom
* Add as a plugin to `docusaurus.config.js`, like this:
``` js
  plugins: [
    'plugin-image-zoom'
  ],
```
* Set the zoomSelector (optional, defaults to '.markdown img') in `docusaurus.config.js`, like this:
``` js
  themeConfig: {
    zoomSelector: '.markdown :not(em) > img',
  },
```
