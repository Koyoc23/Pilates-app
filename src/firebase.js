// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Configuración de tu aplicación web en Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB2UjwSYZgjt8DknK5Jjlo9thNyc1HL0_c",
    authDomain: "pilates-app-93c4f.firebaseapp.com",
    projectId: "pilates-app-93c4f",
    storageBucket: "pilates-app-93c4f.firebasestorage.app",
    messagingSenderId: "505128533145",
    appId: "1:505128533145:web:e83f066b51400d15d60c08"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Autenticación y el proveedor de Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };