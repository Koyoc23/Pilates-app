// src/components/Login.jsx

import { useState } from 'react';
// Ajusta la ruta a firebase.js si es necesario
import { auth, provider, signInWithPopup, signOut } from '../firebase';
import './Login.css';

export default function Login() {
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log("¡Éxito! Usuario logueado:", result.user.displayName);
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <div className="login-container">


            {user ? (
                <div className="user-profile">
                    <img
                        src={user.photoURL}
                        alt="Perfil del usuario"
                        className="profile-image"
                    />
                    <p className="welcome-text">Hola, {user.displayName}</p>
                    <button
                        onClick={handleLogout}
                        className="btn-logout"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleLogin}
                    className="btn-login"
                >
                    Iniciar sesión con Google
                </button>
            )}
        </div>
    );
}