import * as firebase from 'firebase';
require ("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyBWM9LPVhvTeRbo2Bfgfb6FhW4igdkNHPU",
  authDomain: "wily-app-f6b5b.firebaseapp.com",
  projectId: "wily-app-f6b5b",
  storageBucket: "wily-app-f6b5b.appspot.com",
  messagingSenderId: "146504455768",
  appId: "1:146504455768:web:f247f41602312c0dae9c2d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();