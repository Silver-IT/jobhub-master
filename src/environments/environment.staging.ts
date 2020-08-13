export const environment = {
  production: true,
  api: 'https://jobhub-api.herokuapp.com/api',
  socket: {
    url: 'https://jobhub-api.herokuapp.com',
    join: 'join',
    events: 'events',
    messages: 'messages',
  },
  googleInvisibleRecaptchaKey: '6LdLi-QUAAAAAIW0IidDsfIr2etRqaGoj4x0cgrS', // TODO: change this to real site_key
  stripe: {
    publicKey: 'pk_test_FzN5OUiOST5VIu355GlgISHh',
  },
  plaid: {
    clientId: '5c9d1715c90ab1001505f20d',
    publicKey: '0b96ac63e35cbd0630d9bb6f3459f5',
  },
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
