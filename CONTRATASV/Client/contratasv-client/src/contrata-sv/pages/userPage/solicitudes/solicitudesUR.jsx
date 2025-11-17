import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sampleRejected = [
  {
    id: 11,
    title: 'Solicitud rechazada: Ofrezco servicio de plomería',
    cliente: 'Carlos Méndez',
    inicio: '10/11/2025',
    fin: '12/11/2025',
    direccion: 'Col. Centro, San Salvador',
    estado: 'Cancelada',
  },
];

const SolicitudRowModern = ({ s }) => (
  <article className="w-full rounded-2xl p-5 md:p-6 shadow-md hover:shadow-2xl transition transform bg-transparent border border-transparent">
    <div className="flex flex-col sm:flex-row gap-4 items-start">
      <div className="flex-none">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-emerald-500 to-green-700 text-white flex items-center justify-center font-semibold">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-semibold text-slate-900">{s.title}</h3>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-slate-600">
          <div>
            <div className="text-xs text-slate-500">Cliente</div>
            <div className="font-medium text-slate-800">{s.cliente}</div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Fechas</div>
            <div className="font-medium text-slate-800">{s.inicio} — {s.fin}</div>
          </div>

          <div className="sm:col-span-1">
            <div className="text-xs text-slate-500">Dirección</div>
            <div className="font-medium text-slate-800">{s.direccion}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-red-600">
          {s.estado}
        </span>
      </div>
    </div>
  </article>
);

const SolicitudesUserR = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 p-6">
      <section className="max-w-5xl mx-auto">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Solicitudes rechazadas</h1>
            <p className="text-sm text-slate-500">Historial de solicitudes canceladas o rechazadas.</p>
          </div>

          <div className="flex gap-2">
            <Link to="/client-page/requests/pending" className="px-4 py-2 rounded-md bg-white border text-sm">Pendientes</Link>
            <Link to="/client-page/requests/declined" className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold">Rechazadas</Link>
          </div>
        </header>

        <div className="grid gap-6">
          {sampleRejected.map(s => <SolicitudRowModern key={s.id} s={s} />)}
        </div>
      </section>
    </main>
  );
};

export default SolicitudesUserR;