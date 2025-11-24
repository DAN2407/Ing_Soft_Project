import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6">
            <div className="mb-6 w-full flex justify-center overflow-auto">
                <picture>
                    {/* imagen para modo oscuro */}
                    <source
                        srcSet="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
                        media="(prefers-color-scheme: dark)"
                    />
                    {/* imagen para modo claro; mantiene tamaño original (width/height auto) */}
                    <img
                        src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
                        alt="Página no encontrada"
                        style={{ width: 'auto', height: 'auto', display: 'block' }}
                    />
                </picture>
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate(-1)}
            >
                Regresar
            </button>
        </main>
    );
}

export default Error;
