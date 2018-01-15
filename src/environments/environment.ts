// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  apiKey: "AIzaSyBV_sZ3cta1vqu8KfB5rYoCB7nlkngzvUI",
    authDomain: "firestore-crud-of-users.firebaseapp.com",
    databaseURL: "https://firestore-crud-of-users.firebaseio.com",
    projectId: "firestore-crud-of-users",
    storageBucket: "firestore-crud-of-users.appspot.com",
    messagingSenderId: "437414207123"
  }
};
