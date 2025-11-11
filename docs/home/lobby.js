
  const firebaseConfig = {
    apiKey: "AIzaSyCVHWRoVyuDnKRPY4EQbmyeY_rRR56XpEg",
    authDomain: "laserchessnexus-lobby-db-auth.firebaseapp.com",
    databaseURL: "https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "laserchessnexus-lobby-db-auth",
    storageBucket: "laserchessnexus-lobby-db-auth.firebasestorage.app",
    messagingSenderId: "1054469827964",
    appId: "1:1054469827964:web:0fe70a1fddb5b5d27588f9"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Correct reference (capital L)
  const lobbyRef = db.ref('Lobby');

  lobbyRef.on('value', snapshot => {
    const lobbyData = snapshot.val();
    console.clear();
    console.log('RAW LOBBY DATA:', lobbyData);

    if (lobbyData) {
      Object.keys(lobbyData).forEach(playerKey => {
        console.log(`Player: ${playerKey}`, lobbyData[playerKey]);
      });
    } else {
      console.log('Lobby is empty');
    }
  });



