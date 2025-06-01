// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj4N3x89n7tbHHQfRi5kyeM5F8yQCocGQ",
  authDomain: "khet-c6b0f.firebaseapp.com",
  projectId: "khet-c6b0f",
  storageBucket: "khet-c6b0f.firebasestorage.app",
  messagingSenderId: "866179433994",
  appId: "1:866179433994:web:a9162c242fbc24dd7e41f3",
  measurementId: "G-T4246JW0MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);