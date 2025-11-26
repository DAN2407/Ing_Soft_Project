import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 dark:bg-slate-900 text-white dark:text-slate-300 text-xs sm:text-sm md:text-base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <span className="font-medium">© 2025 CONTRATASV LLC.</span>
                    <span className="text-slate-200 dark:text-slate-400 hidden sm:inline">Todos los derechos reservados</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-slate-200 dark:text-slate-300 justify-center sm:justify-end">
                    <a href="/terminos" className="hover:underline px-1">Términos</a>
                    <span className="hidden sm:inline">|</span>
                    <a href="/privacidad" className="hover:underline px-1">Privacidad</a>
                    <a href="/contacto" className="ml-0 sm:ml-4 hover:underline px-1">Contacto</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;