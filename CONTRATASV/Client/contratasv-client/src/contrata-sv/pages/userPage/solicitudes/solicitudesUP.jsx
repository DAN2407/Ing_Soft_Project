import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faUser, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sample = [
  {
    id: 1,
    title: 'Solicitud para: Ofrezco servicio de plomería en el área metropolitana de San Salvador',
    cliente: 'Juan Pérez',
    salario: '₡250 / hora',
    inicio: '01/12/2025',
    fin: '05/12/2025',
    contacto: '+503 7000-0000',
    estado: 'Pendiente',
  },
  {
    id: 2,
    title: 'Solicitud para: Reparación eléctrica doméstica',
    cliente: 'María López',
    salario: '₡300 / hora',
    inicio: '03/12/2025',
    fin: '07/12/2025',
    contacto: '+503 7001-1111',
    estado: 'Pendiente',
  },
];

const SolicitudCardModern = ({ s }) => (
  <article className="w-full rounded-2xl p-5 md:p-6 shadow-md hover:shadow-2xl transition transform bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700">
    <div className="flex flex-col sm:flex-row gap-4 items-start">
      <div className="flex-none">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-700 text-white flex items-center justify-center font-semibold">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">{s.title}</h3>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-slate-600 dark:text-slate-300">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Cliente</div>
            <div className="font-medium text-slate-800 dark:text-slate-200">{s.cliente}</div>
          </div>

          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Fechas</div>
            <div className="font-medium text-slate-800 dark:text-slate-200">{s.inicio} — {s.fin}</div>
          </div>

          <div className="hidden sm:block">
            <div className="text-xs text-slate-500 dark:text-slate-400">Contacto</div>
            <div className="font-medium text-slate-800 dark:text-slate-200">{s.contacto}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white ${s.estado === 'Pendiente' ? 'bg-emerald-600' : 'bg-red-600'}`}>
          {s.estado}
        </span>

        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm shadow-sm">
            <FontAwesomeIcon icon={faPen} />
            Crear contrato
          </button>

          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm shadow-sm">
            <FontAwesomeIcon icon={faTrash} />
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </article>
);

const SolicitudesUser = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 text-slate-900 dark:text-slate-100">
      <section className="max-w-5xl mx-auto">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100">Solicitudes</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">Revisa y gestiona las solicitudes recibidas.</p>
          </div>

          <div className="flex gap-2">
            <Link to="/client-page/requests/pending" className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold">Pendientes</Link>
            <Link to="/client-page/requests/declined" className="px-4 py-2 rounded-md bg-white dark:bg-slate-800 border dark:border-slate-700 text-sm dark:text-slate-100">Rechazadas</Link>
          </div>
        </header>

        <div className="grid gap-6">
          {sample.map(s => <SolicitudCardModern key={s.id} s={s} />)}
        </div>
      </section>
    </main>
  );
};

export default SolicitudesUser;