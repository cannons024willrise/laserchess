// lobby.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCVHWRoVyuDnKRPY4EQbmyeY_rRR56XpEg",
  authDomain: "laserchessnexus-lobby-db-auth.firebaseapp.com",
  databaseURL: "https://laserchessnexus-lobby-db-auth-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "laserchessnexus-lobby-db-auth",
  storageBucket: "laserchessnexus-lobby-db-auth.firebasestorage.app",
  messagingSenderId: "1054469827964",
  appId: "1:1054469827964:web:0fe70a1fddb5b5d27588f9",
  measurementId: "G-F0PHDZYB4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const lobbyRef = ref(db, 'lobby/rooms');
const lobbyBody = document.getElementById('lobby-body');
const emptyRow = document.getElementById('lobby-empty-row');

export function listenLobby() {
  onValue(lobbyRef, (snapshot) => {
    const rooms = snapshot.val();
    console.log('Current Lobby Rooms:', rooms);

    // Clear table except for the empty row
    lobbyBody.innerHTML = '';

    if (!rooms) {
      lobbyBody.appendChild(emptyRow);
      return;
    }

    // Populate lobby table
    Object.keys(rooms).forEach((roomId) => {
      const room = rooms[roomId];
      if (!room.players) return;

      Object.keys(room.players).forEach((playerId) => {
        const player = room.players[playerId];
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.className = 'px-4 py-3 text-gray-200';
        tdId.textContent = playerId;

        const tdSide = document.createElement('td');
        tdSide.className = 'px-4 py-3 text-gray-200';
        tdSide.textContent = player.side ? 'Red' : 'Blue';

        tr.appendChild(tdId);
        tr.appendChild(tdSide);
        lobbyBody.appendChild(tr);
      });
    });
  });
}
