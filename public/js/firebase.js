let firebaseConfig = {
  apiKey: "AIzaSyCnV7ansn1Ewp_p7WNT8SfrSywrRYiiitI",
  authDomain: "blog-db-48d42.firebaseapp.com",
  projectId: "blog-db-48d42",
  storageBucket: "blog-db-48d42.firebasestorage.app",
  messagingSenderId: "162503675610",
  appId: "1:162503675610:web:e6d2746a4a3d627c36dfe3",
  measurementId: "G-9DS6SNDVWT"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
