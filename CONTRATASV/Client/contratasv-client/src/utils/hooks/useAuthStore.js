import { API } from '../../api/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/index.js';
import { useNavigate } from 'react-router-dom';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await API.post('/auth/login',{ email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('user', JSON.stringify(data.user) );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister = async({name, lastname, email, password, role, dui, phone, birthdate, residence, description}) => {
        dispatch( onChecking() );
        try {
            const { data } = await API.post('/users',{name, lastname, email, password, role, dui, phone, birthdate, residence, description});
            localStorage.setItem('token', data.token );
            localStorage.setItem('user', JSON.stringify(data.user) );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        } catch (error) {
            dispatch( onLogout( error.response?.data?.msg || '--' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }
    

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
        navigate('/');
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user, 

        //* Métodos
        startLogin,
        startLogout,
        startRegister,
    }

}