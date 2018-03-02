/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "smart-shopping-list",
    short_name: "smart-shopping-list",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#c0ffee",
    theme_color: "#bada55",
    icons: [
      {
        src: '/assets/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
    ],
    ms: {
      tileColor: '#de1e7e'
    }
  };
}
