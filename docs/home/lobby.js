const db = firebase.database("https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app");
const lobbyRef = db.ref('Lobby');

firebase.auth().onAuthStateChanged(user => {
  if (!user) return;

  console.log("lobby.js: Auth ready as", user.email);

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
});





