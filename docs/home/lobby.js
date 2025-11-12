// lobby.js — compat style
firebase.auth().onAuthStateChanged(user => {
  if (!user) return; // wait until user is signed in

  console.log("lobby.js: Auth ready as", user.email);

  const db = firebase.database();
  const lobbyRef = db.ref('Lobby'); // ensure the node name matches your DB

  lobbyRef.on('value', snapshot => {
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



