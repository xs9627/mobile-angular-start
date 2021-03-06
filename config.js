module.exports = function(config) {

  // Output directory
  config.dest = 'www';
  
  // Inject cordova script into html
  config.cordova = true;
  
  // Images minification
  config.minify_images = true;

  // Development web server

  config.server.host = '0.0.0.0';
  config.server.port = process.env.PORT || '8000';
  
  // Set to false to disable it:
  // config.server = false;

  // Weinre Remote debug server
  
  config.weinre.httpPort = 8001;
  config.weinre.boundHost = 'localhost';

  // Set to false to disable it:
   //config.weinre = false;
    
  // 3rd party components
  // config.vendor.js.push('.bower_components/lib/dist/lib.js');
  // config.vendor.fonts.push('.bower_components/font/dist/*');
  config.vendor.js.push('./bower_components/angular-i18n/angular-locale_zh-cn.js');
  config.vendor.js.push('./bower_components/angular-bootstrap/ui-bootstrap-tpls.js');
    config.vendor.js.push('./bower_components/jquery/dist/jquery.min.js');
    config.vendor.js.push('./bower_components/gsap/src/minified/TweenMax.min.js');
    config.vendor.js.push('./bower_components/ScrollMagic/js/jquery.scrollmagic.min.js');
    config.vendor.js.push('./bower_components/ScrollMagic/js/jquery.scrollmagic.debug.js');
  config.vendor.fonts.push('./bower_components/bootstrap/fonts/*');
};