import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleInfo, faComments, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sampleHistory = [
  {
    id: 301,
    title: 'Remodelación cocina',
    client: 'Constructora Sol',
    salary: '$400',
    start: '2024-05-10',
    end: '2024-06-01',
    phone: '+503 7000-1111',
    status: 'Finalizado',
  },
  {
    id: 302,
    title: 'Instalación paneles solares',
    client: 'Hogar Verde',
    salary: '$1,200',
    start: '2024-02-01',
    end: '2024-03-15',
    phone: '+503 7000-2222',
    status: 'Cancelado',
  },
];

const HistoryCard = ({ c }) => (
  <article className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(2,6,23,0.08)] overflow-hidden transform transition hover:-translate-y-1">
    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-4">
      <div className="flex-none w-full md:w-44 flex items-center justify-center">
        <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex flex-col items-center justify-center shadow-md">
          <div className="text-lg font-bold">CT</div>
          <div className="text-xs mt-1">#{c.id}</div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
            <p className="text-sm text-slate-500 mt-1">Cliente: <span className="font-medium text-slate-700">{c.client}</span></p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm text-slate-500">Salario</div>
              <div className="font-semibold text-slate-800">{c.salary}</div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-sm text-slate-500">Estado</div>
              <div className={`text-sm font-medium ${c.status === 'Finalizado' ? 'text-blue-600' : 'text-red-600'}`}>{c.status}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarCheck} className="text-blue-500" />
            <div>
              <div className="text-xs text-slate-500">Inicio</div>
              <div className="text-sm text-slate-800">{c.start}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleInfo} className="text-blue-400" />
            <div>
              <div className="text-xs text-slate-500">Fin</div>
              <div className="text-sm text-slate-800">{c.end}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faComments} className="text-blue-500" />
            <div>
              <div className="text-xs text-slate-500">Contacto</div>
              <div className="text-sm text-slate-800">{c.phone}</div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to={`/contratist-page/contract/${c.id}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm text-sm transition"
            aria-label={`Ver contrato ${c.id}`}
          >
            <FontAwesomeIcon icon={faEye} />
            Ver detalles
          </Link>

          <Link
            to={`/contratist-page/chat/${c.id}`}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-lg text-sm hover:shadow-sm transition"
            aria-label={`Mensajes contrato ${c.id}`}
          >
            <FontAwesomeIcon icon={faComments} />
            Mensajes
          </Link>
        </div>
      </div>
    </div>

    <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
  </article>
);

const ContracsHistorial = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <section className="max-w-6xl mx-auto px-4">
        <header className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Historial de contratos</h1>
            <p className="mt-1 text-sm text-slate-600">Revisa tus contratos finalizados o cancelados.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contratist-page/activities/contracts/active" className="px-4 py-2 rounded-md bg-white border hover:shadow-sm text-sm">
              Ver activos
            </Link>
          </div>
        </header>

        <div className="grid gap-6">
          {sampleHistory.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <p className="text-slate-600">No hay contratos en el historial.</p>
              <div className="mt-4">
                <Link to="/contratist-page/actividades/ofertas" className="inline-flex px-4 py-2 bg-blue-600 text-white rounded-lg">Ver ofertas</Link>
              </div>
            </div>
          ) : (
            sampleHistory.map(c => <HistoryCard key={c.id} c={c} />)
          )}
        </div>
      </section>

      <footer className=" bg-gray-600 text-white fixed inset-x-0 bottom-0 p-2 text-xs flex justify-between">
        <div>
          <p>© Copyright 2022 CONTRATASV LLC. All rights reserved</p>
        </div>
        <div className=" space-x-1"></div>
      </footer>
    </main>
  );
};

export default ContracsHistorial;