<script>
  // Get a reference to the database (using compat version loaded by your CDN scripts)
  const db = firebase.database();

  // Reference to your lobby rooms
  const lobbyRef = db.ref('lobby/rooms');

  // Real-time listener
  lobbyRef.on('value', (snapshot) => {
    console.log('Current Lobby Rooms:', snapshot.val());
  });
</script>
