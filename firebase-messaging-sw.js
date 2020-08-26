
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
    var dataFromServer = JSON.parse(payload.data.notification);

    const notificationOptions = {
        body: dataFromServer.body,
        icon: dataFromServer.icon,
        image: dataFromServer.image,
        data: { url: dataFromServer.data.url },

    };

    return self.registration.showNotification(
        dataFromServer.title,
        notificationOptions,
    );
});

// // Notification click event listener
// self.addEventListener('notificationclick', e => {
//     // Close the notification popout
//     e.notification.close();
//     // Get all the Window clients
//     e.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
//       // If a Window tab matching the targeted URL already exists, focus that;
//       const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === e.notification.data.url ? (windowClient.focus(), true) : false);
//       // Otherwise, open a new tab to the applicable URL and focus it.
//       if (!hadWindowToFocus) clients.openWindow(e.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null);
//     }));
//   });