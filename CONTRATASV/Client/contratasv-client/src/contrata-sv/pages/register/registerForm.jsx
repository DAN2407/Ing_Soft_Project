import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore, useForm } from '../../../utils/hooks/index.js';
import Swal from 'sweetalert2';
import { BACK_ROLES, ROLES } from '../../../utils/constants/index.js';

const registerFormFields = {
  registerName: '',
  registerLastName: '',
  registerEmail: '',
  registerDui: '',
  registerPhone: '',
  registerBirthDate: '',
  registerResidence: '',
  registerDescription: '',
  registerPassword: '',
  confirmPassword: ''
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/')[2];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const calendarKeyDown = (e) => {
    e.preventDefault();
  }
  
  const duiKeyDown = (e) => {
    if(registerDui.length >= 9){
      e.preventDefault();
    }
  }
  
  const phoneKeyDown = (e) => {
    if(registerPhone.length >= 8){
      e.preventDefault();
    }
  }

  const { startRegister, errorMessage } = useAuthStore();
  const { registerName, registerLastName, registerEmail, registerPassword, confirmPassword, registerDui, registerPhone, registerBirthDate, registerResidence, registerDescription, onInputChange:onRegisterInputChange } = useForm( registerFormFields );
  
  const min = new Date('1950-01-01');
  const max = new Date('2002-11-25');
  
  const registerSubmit = ( event ) => {
    event.preventDefault();
    
    let errorMsg = '';
  
    const duiValidation = registerDui.length !== 9;
    const phoneValidation = registerPhone.length !== 8;
    const passwordValidation = registerPassword !== confirmPassword;
    const birthDateValidation = !(new Date(registerBirthDate) > min && max < new Date(registerBirthDate));
    
    if(birthDateValidation) {
      errorMsg += 'La fecha de nacimiento debe ser coherente.';
    }
  
    if(phoneValidation) {
      errorMsg += '<br>El número de teléfono debe tener 8 dígitos.';
    }
  
    if(duiValidation) {
      errorMsg += '<br>El DUI debe tener 9 dígitos.';
    }
    
    if(passwordValidation) {
      errorMsg += '<br>Las contraseñas deben coincidir.';
    }
    
    if(birthDateValidation || phoneValidation || duiValidation || passwordValidation) {
      Swal.fire('Error en registro', errorMsg, 'error');
      return;
    }
    
    startRegister({
      name: registerName,
      lastname: registerLastName,
      email: registerEmail,
      password: registerPassword,
      role: ROLES[location],
      dui: registerDui,
      phone: registerPhone,
      birthdate: registerBirthDate,
      residence: registerResidence,
      description: registerResidence
    });
  }

  useEffect(() => {
    if ( errorMessage !== undefined && errorMessage !== 'SUCCESS') {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
    if( errorMessage === 'SUCCESS' ){
      const user = JSON.parse(localStorage.getItem('user'));
      Swal.fire('¡Bienvenido a ContrataSV!', '', 'success').then(()=>{
        navigate(`/${BACK_ROLES[user?.role?.name]}-page`);
      });
    }
  }, [errorMessage])


  return(
    <main className="flex justify-center items-center bg-slate-200">
      <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
        <form onSubmit={ registerSubmit }>
          <h2 className="text-green-700 text-4xl font-semibold my-4">Cuéntanos un poco más acerca de ti</h2>
          <div className="flex flex-row">
            <div id="firstName" className="w-1/2 mr-1">
                <label className="text-sm">Primer nombre</label><br/>
                <input
                  name="registerName"
                  value={ registerName }
                  onChange={ onRegisterInputChange }
                  type="text"
                  id="name"
                  required="required"
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
            <div id="lastName" className="w-1/2 mr-1">
                <label className="text-sm">Segundo nombre</label><br/>
                <input
                  name="registerLastName"
                  value={ registerLastName }
                  onChange={ onRegisterInputChange }
                  type="text"
                  id="lastName"
                  required="required"
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
          </div>
  
          <div className="flex flex-row flex-wrap mt-2">
            <div className="sm:w-1/3 w-full sm:pr-2 pr-0">
              <label className="text-sm">Fecha de Nacimiento</label><br/>
              <input
                name="registerBirthDate"
                value={ registerBirthDate }
                onChange={ onRegisterInputChange }
                onKeyDown={ calendarKeyDown }
                type="date"
                id="birthDate"
                required="required"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
            <div className="sm:w-1/3 w-1/2 sm:mt-0 mt-2 pr-2">
              <label className="mt-2 text-sm">Número de DUI</label><br/>
              <input
                name="registerDui"
                value={ registerDui }
                onChange={ onRegisterInputChange }
                onKeyDown={ duiKeyDown }
                type="number"
                id="documentNumber"
                placeholder="#########"
                required="required"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
            <div id="lastName" className="sm:w-1/3 w-1/2 sm:mt-0 mt-2">
              <label className="mt-2 text-sm">Número de teléfono</label><br/>
              <input
                name="registerPhone"
                value={ registerPhone }
                onChange={ onRegisterInputChange }
                onKeyDown={ phoneKeyDown }
                type="number"
                id="phoneNumber"
                placeholder="########"
                required="required"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
          </div>

          <div className="mt-2">
            <label className="mt-2 text-sm">Dirección</label><br/>
            <input
              name="registerResidence"
              value={ registerResidence }
              onChange={ onRegisterInputChange }
              type="text"
              id="residence"
              required="required"
              className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
          </div>
  
          <div className="mt-2">
            <label className="mt-2 text-sm">Descripción</label><br/>
            <textarea
              name="registerDescription"
              value={ registerDescription }
              onChange={ onRegisterInputChange }
              id="description"
              required="required"
              className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
          </div>
  
          <div className="mt-2">
            <label className="mt-2 text-sm">Correo electrónico</label><br/>
            <input
              name="registerEmail"
              value={ registerEmail }
              onChange={ onRegisterInputChange }
              type="email"
              id="email"
              required="required"
              className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
          </div>
  
          <div className="flex flex-row mt-2">
            <div id="firstName" className="w-1/2 mr-1">
              <label className="mt-2 text-sm">Contraseña</label><br/>
              <div className="relative">
                <input
                  name="registerPassword"
                  value={ registerPassword }
                  onChange={ onRegisterInputChange }
                  type={ showPassword ? "text" : "password" }
                  id="password"
                  required="required"
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm pr-10"/>
                <button
                  type="button"
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-2 top-2 text-slate-600 p-1"
                >
                  {showPassword
                    ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-5.523 0-10-4.477-10-10 0-1.085.173-2.13.49-3.107M3 3l18 18" /></svg>
                    : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  }
                </button>
              </div>
            </div>
            <div id="lastName" className="w-1/2 mr-1">
              <label className="mt-2 text-sm">Confirmar contraseña</label><br/>
              <div className="relative">
                <input
                  name="confirmPassword"
                  value={ confirmPassword }
                  onChange={ onRegisterInputChange }
                  type={ showConfirm ? "text" : "password" }
                  id="confirmPassword"
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm pr-10"/>
                <button
                  type="button"
                  aria-label={showConfirm ? "Ocultar confirmación" : "Mostrar confirmación"}
                  onClick={() => setShowConfirm(v => !v)}
                  className="absolute right-2 top-2 text-slate-600 p-1"
                >
                  {showConfirm
                    ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-5.523 0-10-4.477-10-10 0-1.085.173-2.13.49-3.107M3 3l18 18" /></svg>
                    : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  }
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 bg-green-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-green-600 hover:outline outline-2 outline-green-600 outline-offset-2 text-sm"
          > Registrarse </button><br/>
          <p className="text-lg my-2">¿Ya posees una cuenta? <a href="/login" className="text-green-600">Iniciar sesión</a></p>
        </form>
      </div>
    </main>
  )
}

export default RegisterForm