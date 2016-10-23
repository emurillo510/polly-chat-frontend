/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-hello-there',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
  // Deny everything by default
  'default-src': "'none'",

  // Allow scripts at https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js
  'script-src': ["'self'", "https://polly-bot-server.herokuapp.com/app" ],

  // Allow fonts to be loaded from http://fonts.gstatic.com
  'font-src': ["'self'", "https://polly-bot-server.herokuapp.com/app"],

  // Allow data (xhr/websocket) from api.mixpanel.com and custom-api.local
  'connect-src': ["'self'", "https://polly-bot-server.herokuapp.com/app" ],

  // Allow images from the origin itself (i.e. current domain)
  'img-src': "'self'", 

  // Allow CSS loaded from https://fonts.googleapis.com
  'style-src': ["'self'", "https://fonts.googleapis.com", "https://polly-bot-server.herokuapp.com/app"],

  // Omit `media-src` from policy
  // Browser will fallback to default-src for media resources (which is 'none', see above)
  'media-src': null
}

  return ENV;
};
