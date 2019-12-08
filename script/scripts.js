var firebaseConfig = {
    apiKey: "AIzaSyBBPKoZg3ax0Ktlm0mNVqR5ZFPpwQ-g57w",
    authDomain: "my-personal-github-page.firebaseapp.com",
    databaseURL: "https://my-personal-github-page.firebaseio.com",
    projectId: "my-personal-github-page",
    storageBucket: "my-personal-github-page.appspot.com",
    messagingSenderId: "452557093962",
    appId: "1:452557093962:web:0ee0126a29890065b0fab3",
    measurementId: "G-YZT10S4LPY"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var time = new Date();
  firebase.analytics().logEvent('test_notification at: ' + time);