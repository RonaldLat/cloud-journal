import firebase from 'firebase/app'
import 'firebase/firestore'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAMGLv_oL7DVpylWNpoGSN6cEz0lflvRHc",
    authDomain: "rontodo-5ea3e.firebaseapp.com",
    databaseURL: "https://rontodo-5ea3e.firebaseio.com",
    projectId: "rontodo-5ea3e",
    storageBucket: "rontodo-5ea3e.appspot.com",
    messagingSenderId: "1073167482092",
    appId: "1:1073167482092:web:d1789a9c97ad07ed63b9c9",
    measurementId: "G-LX2QDX7TTJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  let db = firebase.firestore();
  // db.settings({timestampsInSnapshots: true});

  export default db;