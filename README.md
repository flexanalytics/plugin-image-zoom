# Image Zoom Plugin for Docusaurus 2

This plugin uses the [`medium-zoom`](https://github.com/francoischalifour/medium-zoom) library to allow for zoom in/out on images in your documentation.

![](/img/zoom_example.gif)

## Install and Configure

- npm install flexanalytics/plugin-image-zoom
- Add as a plugin to `docusaurus.config.js`, like this:

```js
  plugins: [
    'plugin-image-zoom'
  ],
```

- Configure the plugin in `docusaurus.config.js`, like this:

```js
  themeConfig: {
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },
  },
```

## Excluding Images from using Zoom

If you want to exclude certain images from using the zoom, then you'll need to apply a special tag to the image in your markdown and then use the `imageZoom.selector` option in `themeConfig` to exclude that tag.

For example, in your markdown you could wrap the image in an `<em>` tag, as such:

```md
click on the _![](/img/portal/new.png)_ button...
```

Then, exclude images inside an `<em>` tag, as such:

```js
  themeConfig: {
    imageZoom: {
      selector: '.markdown :not(em) > img',
    },
  },
```

## See `plugin-image-zoom` in action

Check out the [FlexIt Analytics Docs](https://learn.flexitanalytics.com/) website, built 100% with Docusaurus, to see this plugin in action.

## medium-zoom plugin and Using a custom viewport
This plugin uses the [medium-zoom plugin](https://github.com/francoischalifour/medium-zoom), so you can refer to the medium-zoom docs for configuration settings. One common configuration is [Using a Custom Viewport](https://github.com/francoischalifour/medium-zoom/blob/master/docs/container.md). The zoom is by default rendered in the window viewport. You can also render your image in any element of the DOM, or any custom coordinates with the container option.

