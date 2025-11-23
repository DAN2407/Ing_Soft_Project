import React from 'react';
import { Link } from 'react-router-dom';

const SolicitudRow = ({ title, cliente = 'HOLA', inicio = '—', fin = '—', direccion = '—', estado = 'Cancelado' }) => (
  <article className="w-full bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-6 flex flex-col sm:flex-row gap-4 items-start">
    <div className="flex-none">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold shadow">
        R
      </div>
    </div>

    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
        <div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Cliente</div>
          <div className="font-medium text-slate-800 dark:text-slate-200">{cliente}</div>
        </div>

        <div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Fechas</div>
          <div className="font-medium text-slate-800 dark:text-slate-200">{inicio} — {fin}</div>
        </div>

        <div className="sm:col-span-2">
          <div className="text-xs text-slate-500 dark:text-slate-400">Dirección</div>
          <div className="font-medium text-slate-800 dark:text-slate-200 truncate">{direccion}</div>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-end gap-3">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-red-600">
        {estado}
      </span>
    </div>
  </article>
);

const SoliR = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 text-slate-900 dark:text-slate-100">
      <section className="max-w-5xl mx-auto">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Solicitudes recibidas</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">Historial de solicitudes rechazadas o canceladas.</p>
          </div>

          <div className="flex gap-2">
            <Link to="/contratist-page/requests/pending" className="px-4 py-2 rounded-md bg-white dark:bg-slate-800 border dark:border-slate-700 text-sm">Pendientes</Link>
            <Link to="/contratist-page/requests/rejected" className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm">Rechazadas</Link>
          </div>
        </header>

        <div className="grid gap-6">
          <SolicitudRow
            title='Has recibido una solicitud de servicio para la oferta: “Ofrezco servicio de plomería en el área metropolitana de San Salvador”'
            cliente="HOLA"
            inicio="01/11/2025"
            fin="03/11/2025"
            direccion="Col. Centro, San Salvador"
            estado="Cancelado"
          />
        </div>
      </section>
    </main>
  );
};

export default SoliR;