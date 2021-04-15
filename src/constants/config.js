const isDevEnv = process.env.NODE_ENV === 'development';

export default {
  // App Details
  appName: '🐰 Cheerio',

  // Build Configuration - eg. Debug or Release?
  isDevEnv,

  // Date Format
  dateFormat: 'Do MMM YYYY',
};
