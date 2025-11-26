import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ActP = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">Panel de Actividades</h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            to="/contratist-page/activities/offers/active"
            aria-label="Ver ofertas para clientes"
            className="relative group block rounded-2xl bg-white dark:bg-slate-800 shadow-[0_10px_30px_rgba(2,6,23,0.08)] dark:shadow-[0_10px_30px_rgba(2,6,23,0.6)] overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="p-6 sm:p-8 xl:p-10 flex items-start gap-6">
              <div className="flex-none w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 text-white shadow-md">
                <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Ofertas para clientes</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Revisa las propuestas y responde rápido para cerrar trabajos. Filtra por presupuesto y distancia.
                </p>
              </div>
            </div>

            {/* subtle blue accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-600 opacity-95"></div>

            {/* hover ripple */}
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-white/0 dark:from-transparent dark:to-slate-900/0 opacity-0 group-hover:opacity-5 transition-opacity"></span>
          </Link>

          <Link
            to="/contratist-page/activities/contracts/active"
            aria-label="Ver tus contratos activos"
            className="relative group block rounded-2xl bg-white dark:bg-slate-800 shadow-[0_10px_30px_rgba(2,6,23,0.08)] dark:shadow-[0_10px_30px_rgba(2,6,23,0.6)] overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="p-6 sm:p-8 xl:p-10 flex items-start gap-6">
              <div className="flex-none w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-500 dark:from-indigo-700 dark:to-blue-600 text-white shadow-md">
                <FontAwesomeIcon icon={faFileSignature} className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Tus contratos activos</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Gestiona los trabajos en curso, entrega avances y comunícate con el cliente desde la plataforma.
                </p>
              </div>
            </div>

            {/* subtle indigo-blue accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-blue-500 dark:from-indigo-700 dark:to-blue-600 opacity-95"></div>

            <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-white/0 dark:from-transparent dark:to-slate-900/0 opacity-0 group-hover:opacity-5 transition-opacity"></span>
          </Link>
        </div>

        {/* extras: ayuda rápida */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm dark:shadow-none flex flex-col">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Consejos rápidos</h4>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-2">Responde a las ofertas rápido para aumentar tus posibilidades.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm dark:shadow-none flex flex-col">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Perfil</h4>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-2">Mantén tu portafolio actualizado y añade precios estimados.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm dark:shadow-none flex flex-col">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Soporte</h4>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-2">Contacta soporte si tienes problemas con pagos o contratos.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActP;