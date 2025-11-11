// Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCVHWRoVyuDnKRPY4EQbmyeY_rRR56XpEg",
    authDomain: "laserchessnexus-lobby-db-auth.firebaseapp.com",
    databaseURL: "https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "laserchessnexus-lobby-db-auth",
    storageBucket: "laserchessnexus-lobby-db-auth.firebasestorage.app",
    messagingSenderId: "1054469827964",
    appId: "1:1054469827964:web:0fe70a1fddb5b5d27588f9"
  };

  // Initialize Firebase App
  firebase.initializeApp(firebaseConfig);

  // Reference to your Realtime Database
  const db = firebase.database();

  // Reference to lobby rooms
  const lobbyRef = db.ref('lobby/rooms');

  // Real-time listener
  lobbyRef.on('value', (snapshot) => {
    console.log('Current Lobby Rooms:', snapshot.val());
  });
