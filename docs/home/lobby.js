
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




