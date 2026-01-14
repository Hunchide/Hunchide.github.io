/* global Fluid */

Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.billboard();
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerParallaxEvent();
  Fluid.events.registerScrollDownArrowEvent();
  Fluid.events.registerScrollTopArrowEvent();
  Fluid.events.registerImageLoadedEvent();
};

Fluid.boot.refresh = function() {
  Fluid.plugins.fancyBox();
  Fluid.plugins.codeWidget();
  Fluid.events.refresh();
};

document.addEventListener('DOMContentLoaded', function() {
  if (typeof CONFIG !== 'undefined' && CONFIG.lazyload && CONFIG.lazyload.enable) {
    CONFIG.lazyload.loading_img = '/blog/img/loading.gif';
  }
  Fluid.boot.registerEvents();
});
