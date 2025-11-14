import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BACK_ROLES, ROLES } from '../../../utils/constants/index.js';
import { useAuthStore } from '../../../utils/hooks/index.js';

const Header = () => {
    let links = [];

    const notSignedInLinks = [
        { name: "Iniciar Sesión", url: "/login" }
    ];

    const clientLinks = [
        { name: "Contratos", url: "/client-page/contracts/active" },
        { name: "Perfil", url: "/client-page/profile" },
        { name: "Servicios", url: "/client-page/services" },
        { name: "Solicitudes", url: "/client-page/requests/pending" },
    ];

    const contratistLinks = [
        { name: "Actividad", url: "/contratist-page/activities" },
        { name: "Perfil", url: "/contratist-page/profile" },
        { name: "Solicitudes", url: "/contratist-page/requests/pending" },
    ];

    const navigate = useNavigate();
    const { startLogout } = useAuthStore();

    const [showMenu, setShowMenu] = useState(false);
    const [user, setUser] = useState(null);

    // lee usuario al montar y escucha cambios de storage (p. ej. login/logout en otra pestaña)
    useEffect(() => {
        const readUser = () => {
            try {
                const raw = localStorage.getItem('user');
                setUser(raw ? JSON.parse(raw) : null);
            } catch {
                setUser(null);
            }
        };
        readUser();

        const onStorage = (e) => {
            if (e.key === 'user') readUser();
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    const roleName = user?.role?.name || null;

    if (roleName === ROLES.client) links = clientLinks;
    else if (roleName === ROLES.contratist) links = contratistLinks;
    else links = notSignedInLinks;

    const EnterHandler = (route) => {
        setShowMenu(false);
        navigate(route);
    };

    const toggleMenu = () => setShowMenu((v) => !v);

    // estilos dependientes del rol (contratista = azul, cliente/otros = verde)
    const primaryBg = roleName === ROLES.contratist ? 'bg-blue-700' : 'bg-green-800';
    const primaryHover = roleName === ROLES.contratist ? 'hover:bg-blue-600' : 'hover:bg-green-700';
    const buttonBg = roleName === ROLES.contratist ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-700 hover:bg-green-800';

    return (
        <nav className={`sticky top-0 left-0 w-full shadow-sm z-50 ${primaryBg}`}>
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3">
                <Link
                    to={roleName ? `/${BACK_ROLES[roleName]}-page` : '/'}
                    className="flex items-center gap-2 text-white text-xl font-extrabold select-none"
                    aria-label="Ir al inicio"
                >
                    <span className="inline-block rounded-full w-9 h-9 flex items-center justify-center bg-white/10 ring-1 ring-white/20">
                        <span className="font-bold">CV</span>
                    </span>
                    <span>CONTRATA<span className="text-green-300">SV</span></span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-2 text-base font-medium text-white">
                    {links.map((link, idx) => (
                        <li
                            key={idx}
                            className={`px-4 py-2 rounded-md transition-colors cursor-pointer ${primaryHover} hover:shadow-sm`}
                            onClick={() => EnterHandler(link.url)}
                            role="button"
                            aria-label={link.name}
                        >
                            {link.name}
                        </li>
                    ))}

                    {roleName ? (
                        <button
                            onClick={() => { startLogout(); setShowMenu(false); }}
                            className={`ml-3 ${buttonBg} text-white font-semibold py-2 px-4 rounded-md shadow-sm transition`}
                            aria-label="Cerrar sesión"
                        >
                            Cerrar sesión
                        </button>
                    ) : (
                        <button
                            onClick={() => EnterHandler('/register')}
                            className="ml-3 bg-white/10 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-white/20 transition"
                            aria-label="Registrarse"
                        >
                            Registrarse
                        </button>
                    )}
                </ul>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none"
                        aria-label="Abrir menú"
                    >
                        <FontAwesomeIcon icon={faBars} className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Mobile sliding panel */}
            <div
                className={`fixed top-0 right-0 h-full w-72 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out ${roleName === ROLES.contratist ? 'bg-blue-700' : 'bg-green-800'} shadow-lg z-50`}
                aria-hidden={!showMenu}
            >
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white font-bold">
                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">CV</div>
                        <div>CONTRATA<span className="text-green-200">SV</span></div>
                    </div>
                    <button onClick={toggleMenu} className="text-white/90 px-2 py-1">Cerrar</button>
                </div>

                <nav className="px-4 mt-6">
                    <ul className="flex flex-col gap-2 text-white">
                        {links.map((link, idx) => (
                            <li
                                key={idx}
                                className="px-3 py-3 rounded-md hover:opacity-90 cursor-pointer transition"
                                onClick={() => EnterHandler(link.url)}
                            >
                                {link.name}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        {roleName ? (
                            <button
                                onClick={() => { startLogout(); setShowMenu(false); }}
                                className="w-full py-3 rounded-md bg-white text-gray-800 font-semibold shadow"
                            >
                                Cerrar sesión
                            </button>
                        ) : (
                            <button
                                onClick={() => EnterHandler('/register')}
                                className="w-full py-3 rounded-md bg-white text-gray-800 font-semibold shadow"
                            >
                                Registrarse
                            </button>
                        )}
                    </div>
                </nav>
            </div>

            {/* Overlay when mobile menu open */}
            {showMenu && <div onClick={() => setShowMenu(false)} className="fixed inset-0 bg-black/30 z-40"></div>}
        </nav>
    );
}

export default Header;