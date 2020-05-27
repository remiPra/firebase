importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");
var firebaseConfig = {
    apiKey: "AIzaSyACBEl4RcIkJB7oy5X-zrOAcECPDvTH4hw",
    authDomain: "simply-notify-68b52.firebaseapp.com",
    databaseURL: "https://simply-notify-68b52.firebaseio.com",
    projectId: "simply-notify-68b52",
    storageBucket: "simply-notify-68b52.appspot.com",
    messagingSenderId: "838544611655",
    appId: "1:838544611655:web:ac89b5c2177b35eb8b1462",
    measurementId: "G-X58YBQG1EB"
  };
  firebase.initializeApp(firebaseConfig);
 
  const messaging = firebase.messaging();
firebase.initializeApp({
    messagingSenderId: "BOGkHZhVVxt7dwG_Ma8bBRdkFnMMY7NHdZpe7n800HUsLaf6i7EJGmrDk5C9pYVdCa6eTsVG-cwZAFK6GZsJAJk"
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register  ('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }


messaging.setBackgroundMessageHandler(payload => {
    const notification = JSON.parse(payload.data.notification);
    const notificationTitle = notification.title;
    const notificationOptions = {
      body: notification.body
    };
    //Show the notification :)
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
  
