// lobby.js — uses compat SDK, real-time listener after auth

firebase.auth().onAuthStateChanged(user => {
  if (!user) return; // wait until signed in

  console.log("lobby.js: Auth ready as", user.email);

  // Initialize database with correct region URL
  const db = firebase.database("https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app");
  const lobbyRef = db.ref('Lobby');

  // Real-time listener
  lobbyRef.on('value', snapshot => {
    const lobbyData = snapshot.val();
    console.clear(); // optional: keeps console clean
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







