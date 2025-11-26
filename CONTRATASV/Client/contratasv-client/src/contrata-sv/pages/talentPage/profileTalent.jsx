import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ProfileTalent = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);

                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No se encontró token. Inicia sesión.');
                    setUser(null);
                    setLoading(false);
                    return;
                }

                const response = await axios.get('http://localhost:3000/api/users/profile', {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                    // withCredentials removido porque usamos Authorization header
                });

                // soportar { user: {...} } o respuesta directa {...}
                const userData = response.data.user || response.data;
                setUser(userData);
                setError(null);
                
            } catch (err) {
                console.error('Error fetching user data:', err);
                console.error('Server response:', err.response && err.response.data);

                if (err.response) {
                    const serverMsg = err.response.data.msg || err.response.data.error || JSON.stringify(err.response.data);
                    setError(serverMsg);
                } else {
                    setError(err.message || 'Error al obtener datos del usuario.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    // Estado de carga
    if (loading) {
        return (
            <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center">
                <div className="text-xl animate-pulse">Cargando perfil...</div>
            </main>
        );
    }

    return (
        <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
            <section className="flex flex-col items-center justify-center snap-y pt-8">
                <div className="flex flex-col rounded-lg shadow-lg pt-4 bg-transparent">
                    <div className="flex items-center justify-center pt-10 flex-col">
                        <img 
                            src={user?.profileImage || "https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg"} 
                            alt="Profile" 
                            className="rounded-full w-32"
                        />
                        <h1 className="text-slate-900 dark:text-slate-100 font-semibold text-xl mt-5">
                            {user?.name || "Usuario"}
                        </h1>
                        <h1 className="text-slate-500 dark:text-slate-300 text-sm">
                            {user?.location || "Ubicación no disponible"}
                        </h1>
                    </div>

                    <div className="flex justify-between p-4">
                        <div className="flex flex-col object-center">
                            <h1 className="uppercase text-slate-500 dark:text-slate-300">Información de contacto</h1>
                            <h2 className="text-slate-900 dark:text-slate-100 font-semibold text-xl">
                                Número de contacto: <span className="text-blue-800 dark:text-blue-400">
                                    {user?.phone || "No disponible"}
                                </span>
                            </h2>
                            <h2 className="text-slate-900 dark:text-slate-100 font-semibold text-xl">
                                Correo Electrónico: <span className="text-blue-800 dark:text-blue-400">
                                    {user?.email || "No disponible"}
                                </span>
                            </h2>
                        </div>
                        <button className="w-14 h-14 self-center rounded-full bg-blue-800 hover:bg-blue-500 text-white hover:text-black">
                            <FontAwesomeIcon icon={faPen} className="cursor-pointer"/>
                        </button>
                    </div>
                </div>
                
                <div className="flex flex-col rounded-lg shadow-lg pt-8 sm:w-5/12 w-6/12 bg-transparent">
                    <div className="flex items-center justify-center pt-5 flex-col">
                        <h1 className="text-slate-900 dark:text-slate-100 font-semibold text-xl mt-5">Acerca de mi</h1>
                    </div>
                    <div className="flex justify-between p-4 w-auto h-auto">
                        <div className="flex flex-col object-center">
                            <p className="text-slate-700 dark:text-slate-300 text-justify">
                                {user?.about || "Información no disponible en este momento."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mostrar error si existe */}
                {error && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        Error: {error}
                    </div>
                )}
            </section>
        </main>
    );
}   

export default ProfileTalent;