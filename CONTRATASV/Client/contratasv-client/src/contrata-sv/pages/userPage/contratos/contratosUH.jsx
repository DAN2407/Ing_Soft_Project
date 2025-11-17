import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhone, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sampleHistory = [
  {
    id: 501,
    title: 'Remodelación cocina',
    client: 'Constructora Sol',
    salary: '$400',
    start: '2024-05-10',
    end: '2024-06-01',
    phone: '+503 7000-1111',
    status: 'Finalizado',
  },
  {
    id: 502,
    title: 'Instalación paneles solares',
    client: 'Hogar Verde',
    salary: '$1,200',
    start: '2024-02-01',
    end: '2024-03-15',
    phone: '+503 7000-2222',
    status: 'Cancelado',
  },
];

const HistoryCardUser = ({ c }) => (
  <article className="rounded-2xl shadow-md hover:shadow-2xl p-6 transition bg-transparent">
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
      <div className="flex-none">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white font-bold">
          H
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate">{c.title}</h3>
        <p className="text-sm text-slate-600 mt-1">Cliente: <span className="font-medium text-slate-800 dark:text-slate-200">{c.client}</span></p>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-emerald-500" />
            <div>
              <div className="text-xs text-slate-500">Fechas</div>
              <div className="text-sm text-slate-800 dark:text-slate-200">{c.start} — {c.end}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-emerald-400" />
            <div>
              <div className="text-xs text-slate-500">Contacto</div>
              <div className="text-sm text-slate-800 dark:text-slate-200">{c.phone}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-start sm:justify-end">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${c.status === 'Finalizado' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
              {c.status}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between gap-3">
      <Link to={`/client-page/contracts/${c.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm">
        <FontAwesomeIcon icon={faEye} />
        Ver contrato
      </Link>

      <div className="text-sm text-slate-500">ID #{c.id}</div>
    </div>
  </article>
);

const ContratosUserHistorial = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 p-6">
      <section className="max-w-6xl mx-auto">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Historial de contratos</h1>
            <p className="text-sm text-slate-600">Contratos finalizados o cancelados.</p>
          </div>

          <div className="flex gap-3">
            <Link to="/client-page/contracts/active" className="px-4 py-2 rounded-md bg-white border text-sm">Activas</Link>
            <Link to="/client-page/contracts/history" className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold">Historial</Link>
          </div>
        </header>

        <div className="grid gap-6">
          {sampleHistory.map(c => (
            <HistoryCardUser key={c.id} c={c} />
          ))}

          {sampleHistory.length === 0 && (
            <div className="col-span-full rounded-2xl p-8 text-center">
              <p className="text-slate-600">No hay contratos en el historial.</p>
              <div className="mt-4">
                <Link to="/client-page/contracts/active" className="inline-flex px-4 py-2 bg-emerald-600 text-white rounded-lg">Ver activos</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ContratosUserHistorial;