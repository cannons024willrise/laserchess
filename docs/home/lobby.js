// lobby.js

// Make sure Firebase compat SDKs are loaded before this script
if (typeof firebase === 'undefined' || !firebase.auth) {
  console.error('Firebase not loaded. Include firebase-app-compat.js, firebase-auth-compat.js, and firebase-database-compat.js first.');
} else {
  const auth = firebase.auth();

  // Wait for user to be authenticated
  auth.onAuthStateChanged(user => {
    if (!user) {
      console.warn('User not signed in yet. Lobby listener will not start.');
      return;
    }

    console.log('lobby.js: Auth ready as', user.email);

    // Connect explicitly to your regional database
    const db = firebase.database("https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app");

    // Reference the Lobby node
    const lobbyRef = db.ref('Lobby');

    // Real-time listener
    lobbyRef.on('value', snapshot => {
      console.clear();
      const lobbyData = snapshot.val();
      console.log('RAW LOBBY DATA:', lobbyData);

      if (lobbyData) {
        Object.keys(lobbyData).forEach(playerKey => {
          console.log(`Player: ${playerKey}`, lobbyData[playerKey]);
        });
      } else {
        console.log('Lobby is empty');
      }
    });
  });
}


