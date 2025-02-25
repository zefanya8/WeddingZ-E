// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZgAhmcp0ZVs57L6ca7ZsDjfJt8AhA6bo",
  authDomain: "weddingz-e.firebaseapp.com",
  projectId: "weddingz-e",
  storageBucket: "weddingz-e.firebasestorage.app",
  messagingSenderId: "894008721767",
  appId: "1:894008721767:web:5fa2f45c3ab7c462052fc2"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();