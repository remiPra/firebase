const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");

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

  // messaging.getToken().then(token => {
  //   tokenString.innerHTML = "Token Is : " + token;
  //   console.log(token)
  // })
    
  messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
    console.log(token)
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("No permission to send push", err);
  });

  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    const { title, ...options } = payload.notification;
  });
  
