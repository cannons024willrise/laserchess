<!-- Firebase App + Database -->
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"></script>

<script>
  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCVHWRoVyuDnKRPY4EQbmyeY_rRR56XpEg",
    authDomain: "laserchessnexus-lobby-db-auth.firebaseapp.com",
    databaseURL: "https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "laserchessnexus-lobby-db-auth",
    storageBucket: "laserchessnexus-lobby-db-auth.firebasestorage.app",
    messagingSenderId: "1054469827964",
    appId: "1:1054469827964:web:0fe70a1fddb5b5d27588f9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Reference the entire lobby
  const lobbyRef = db.ref('lobby'); // <-- notice we reference 'lobby' instead of 'lobby/rooms'

  // Listen for the whole lobby in real-time
  lobbyRef.on('value', (snapshot) => {
    const lobbyData = snapshot.val();
    console.log('Entire Lobby:', lobbyData);

    if (lobbyData) {
      // Loop through all rooms
      Object.keys(lobbyData.rooms || {}).forEach(roomId => {
        const room = lobbyData.rooms[roomId];
        console.log(`Room ID: ${roomId}`, room);
      });
    } else {
      console.log('Lobby is empty');
    }
  });
</script>
