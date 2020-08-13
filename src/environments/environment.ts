// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:3000/api',
  socket: {
    url: 'http://localhost:3000',
    join: 'join',
    events: 'events',
    messages: 'messages',
  },
  stripe: {
    publicKey: 'pk_test_FzN5OUiOST5VIu355GlgISHh',
  },
  plaid: {
    clientId: '5c9d1715c90ab1001505f20d',
    publicKey: '0b96ac63e35cbd0630d9bb6f3459f5',
  },
  googleInvisibleRecaptchaKey: '6Lc-jeQUAAAAAHXIPnT8llpjt3r_mpZ9_p0-me2L',
  googleApiKey: 'AIzaSyB5fITwebnKaPmHI-rAGpPNPG7xhIXwbSA',
  googleOauthClientId: '447253768879-ieo9k6qiuj2oablpffgvga88mnma3qd0.apps.googleusercontent.com',
  googleConversionTrackingCode: 'AW-992880081',
  googleReviewUrl: 'https://bit.ly/3dLElpp',
  localStorage: {
    prefix: 'jobhub',
    accessToken: 'access_token',
    customerSignupWizard: 'customer_signup_wizard',
  },
  logRocketAppId: 'seb2rp/jd-landscaping'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
