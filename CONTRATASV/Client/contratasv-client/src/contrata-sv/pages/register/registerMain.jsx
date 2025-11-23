import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterMain = () => {
    const navigate = useNavigate();
    const ClientHandler = () => {
        navigate("/register/client");
    }
    const TalentHandler = () => {
        navigate("/register/contratist");
    }

    return(
    <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
        <div className="w-full flex justify-center px-6">
            <div className="flex flex-col items-center w-full max-w-6xl">
                <div className="flex justify-center mb-8">
                    <h2 className="text-green-600 sm:text-4xl font-extrabold dark:text-green-300">Selecciona el tipo de cuenta</h2>
                </div>
            
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full">
                    <div
                      className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 p-8 cursor-pointer flex flex-col"
                      onClick={ClientHandler}
                      role="button"
                      aria-label="Crear cuenta Cliente"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-sm">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100">CLIENTE</h3>
                                <p className="text-sm text-gray-500 dark:text-slate-300">Contacta expertos y contrata servicios que se ajusten a tus necesidades.</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700 dark:text-slate-300 flex-1">Estás en busca de contactar expertos en su área que puedan cumplir con determinado trabajo.</p>
                        <div className="mt-6 flex justify-end">
                            <span className="text-sm font-semibold text-green-600 dark:text-green-300">Crear cuenta →</span>
                        </div>
                    </div>

                    <div
                      className="bg-gradient-to-br from-blue-600 to-blue-500 text-white dark:from-blue-700 dark:to-blue-600 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 p-8 cursor-pointer flex flex-col"
                      onClick={TalentHandler}
                      role="button"
                      aria-label="Crear cuenta Talento"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shadow-sm ring-1 ring-white/20">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 19v-.5A3.5 3.5 0 019.5 15h5A3.5 3.5 0 0118 18.5V19" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">TALENTO</h3>
                                <p className="text-sm text-blue-100">Ofrece tus servicios y conecta con clientes que valoren tu trabajo.</p>
                            </div>
                        </div>
                        <p className="mt-4 text-blue-50 flex-1">Eres un experto en determinada área y buscas ofrecer tus servicios a clientes que valoren tu trabajo.</p>
                        <div className="mt-6 flex justify-end">
                            <span className="text-sm font-semibold text-white/90">Unirse como talento →</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default RegisterMain;