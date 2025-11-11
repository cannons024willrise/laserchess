
// lobby.js — assumes Firebase is already initialized in homeauthcheck.js
const db = firebase.database(); // Reuse the default app

// Reference the Lobby node (note the capital L)
const lobbyRef = db.ref('Lobby');

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




