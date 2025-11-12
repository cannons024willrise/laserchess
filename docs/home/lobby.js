// lobby.js — assumes Firebase is initialized in homeauthcheck.js
(function() {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      console.warn("lobby.js: User not signed in yet. Waiting...");
      return; // listener will fire again when user signs in
    }

    console.log("lobby.js: Auth ready as", user.email);

    const db = firebase.database();
    const lobbyRef = db.ref("Lobby");

    // Real-time listener — now safe because auth is confirmed
    lobbyRef.on("value", snapshot => {
      const lobbyData = snapshot.val();
      console.clear();
      console.log("RAW LOBBY DATA:", lobbyData);

      if (lobbyData) {
        Object.keys(lobbyData).forEach(playerKey => {
          console.log(`Player: ${playerKey}`, lobbyData[playerKey]);
        });
      } else {
        console.log("Lobby is empty");
      }
    });
  });
})();

