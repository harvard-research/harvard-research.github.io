// importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-analytics.js");
// importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js");
// importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-firestore.js");

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCZPlNpVnYwUzkENxRQ4_t0_gulkUoh19g",
//     authDomain: "covid19-c8864.firebaseapp.com",
//     databaseURL: "https://covid19-c8864.firebaseio.com",
//     projectId: "covid19-c8864",
//     storageBucket: "covid19-c8864.appspot.com",
//     messagingSenderId: "848569204691",
//     appId: "1:848569204691:web:11902404f5387163557926",
//     measurementId: "G-WWPVFZSH0N"
//     };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
// console.log('[firebase-messaging-sw.js] Received background message ', payload);
// // Customize notification here
// const notificationTitle = 'Background Message Title';
// const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
// };

// return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

  
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
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

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        // icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});