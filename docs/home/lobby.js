firebase.auth().onAuthStateChanged(user => {
  if (!user) return;

  console.log("lobby.js: Auth ready as", user.email);

  // Attach the listener only once
  lobbyRef.once('value').then(snapshot => {
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







