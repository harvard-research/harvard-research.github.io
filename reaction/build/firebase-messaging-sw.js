importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var firebaseConfig = {
    apiKey: "AIzaSyCZPlNpVnYwUzkENxRQ4_t0_gulkUoh19g",
    authDomain: "covid19-c8864.firebaseapp.com",
    databaseURL: "https://covid19-c8864.firebaseio.com",
    projectId: "covid19-c8864",
    storageBucket: "covid19-c8864.appspot.com",
    messagingSenderId: "848569204691",
    appId: "1:848569204691:web:11902404f5387163557926",
    measurementId: "G-WWPVFZSH0N"
    };
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//     .then(function(registration) {
//       console.log('Registration successful, scope is:', registration.scope);
//     }).catch(function(err) {
//       console.log('Service worker registration failed, error:', err);
//     });
//   }