
  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCVHWRoVyuDnKRPY4EQbmyeY_rRR56XpEg",
    authDomain: "laserchessnexus-lobby-db-auth.firebaseapp.com",
    databaseURL: "https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "laserchessnexus-lobby-db-auth",
    storageBucket: "laserchessnexus-lobby-db-auth.firebasestorage.app",
    messagingSenderId: "1054469827964",
    appId: "1:1054469827964:web:0fe70a1fddb5b5d27588f9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Reference the top-level lobby node
  const lobbyRef = db.ref('lobby');

  // Real-time listener for the whole lobby
  lobbyRef.on('value', (snapshot) => {
    console.clear(); // optional, clears previous logs
    const lobbyData = snapshot.val();
    console.log('RAW LOBBY DATA:', lobbyData); // logs the entire lobby object
  });


