// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    // ***********************************************************************************************************************
    // * TODO(DEVELOPER): Update values according to: Firebase Console > Overview > Add Firebase to your web app. *
    // ***********************************************************************************************************************
    apiKey: "AIzaSyDiaUHTfCGomUhMqxHhbcKbt689iN4oGvk",
    authDomain: "stockthai-82c36.firebaseapp.com",
    databaseURL: "https://stockthai-82c36.firebaseio.com",
    projectId: "stockthai-82c36",
    storageBucket: "stockthai-82c36.appspot.com",
    messagingSenderId: "199355221052"
  },
  newsapi: {
    apiKey: "9eda5f1baac14ccb9458904447bba0f6"
  },
  quandl: {
    apiKey: "pms_xMk9Ly8vj_FTJxsb"
  }
};
