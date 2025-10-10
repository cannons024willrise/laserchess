<!-- Firebase + Matchmaking Script -->
  <script>
   // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAj4N3x89n7tbHHQfRi5kyeM5F8yQCocGQ",
    authDomain: "khet-c6b0f.firebaseapp.com",
    databaseURL: "https://khet-c6b0f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "khet-c6b0f",
    storageBucket: "khet-c6b0f.firebasedatabase.app",
    messagingSenderId: "866179433994",
    appId: "1:866179433994:web:a9162c242fbc24dd7e41f3",
    measurementId: "G-T4246JW0MH"
  };

 

document.addEventListener("DOMContentLoaded", () => {
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  auth.onAuthStateChanged(user => {
    if (!user) {
      //window.location.replace("https://laserchess.pages.dev/Auth/login");
    } else {
      document.getElementById("userEmail").textContent = user.email;
    }
  });
