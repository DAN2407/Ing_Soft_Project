import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../../utils/hooks/index.js';
import { useNavigate } from 'react-router-dom';
import { BACK_ROLES } from '../../../utils/constants/index.js';

const loginFormFields = {
  username: '',
  password: '',
}

const Login = () => {
  const navigate = useNavigate();
  
  const { startLogin, errorMessage } = useAuthStore();
  const { username, password, onInputChange:onLoginInputChange } = useForm( loginFormFields );
  
  const loginSubmit = ( event ) => {
    event.preventDefault();
    startLogin({ email: username, password });
  }

  useEffect(() => {
    if ( errorMessage !== undefined && errorMessage !== 'SUCCESS' ) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
    if( errorMessage === 'SUCCESS' ){
      const user = JSON.parse(localStorage.getItem('user'));
      Swal.fire('¡Bienvenido a ContrataSV!', '', 'success').then(()=>{
        navigate(`/${BACK_ROLES[user?.role?.name]}-page`);
      });
    }
  }, [errorMessage])

  // clases para labels flotantes (activas si hay valor)
  const usernameLabelClass = `absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none
    ${username ? '-translate-y-5 scale-75 text-green-600' : ''}`;
  const passwordLabelClass = `absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none
    ${password ? '-translate-y-5 scale-75 text-green-600' : ''}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <section className="w-full max-w-md">
        <form
          className="bg-white rounded-2xl shadow-2xl p-8 transform transition-transform duration-300 hover:-translate-y-1"
          onSubmit={ loginSubmit }
        >
          <header className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-400 flex items-center justify-center shadow-lg mb-3">
              <span className="text-white text-2xl font-extrabold">CV</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-800">CONTRATA<span className="text-green-600">SV</span></h1>
            <p className="text-sm text-gray-500 mt-1">Inicia sesión para continuar</p>
          </header>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* icono email */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-2-4 2M4 6h16v12H4z" />
                </svg>
              </div>

              <input
                type="email"
                name="username"
                value={ username }
                onChange={ onLoginInputChange }
                className="w-full peer pl-11 pr-4 pt-5 pb-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-400 transition-shadow bg-transparent"
                placeholder=" "
                autoComplete="username"
              />
              <label className={usernameLabelClass}>Correo electrónico</label>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* icono lock */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11V7a3 3 0 10-6 0v4M5 11h14v8H5z" />
                </svg>
              </div>

              <input
                type="password"
                name="password"
                value={ password }
                onChange={ onLoginInputChange }
                className="w-full peer pl-11 pr-4 pt-5 pb-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-400 transition-shadow bg-transparent"
                placeholder=" "
                autoComplete="current-password"
              />
              <label className={passwordLabelClass}>Contraseña</label>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 focus:outline-none"
            >
              {/* icono login */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
              </svg>
              Iniciar sesión
            </button>

            <a href="/forgot" className="text-sm text-green-600 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;