import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faComments, faCalendarCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sampleContracts = [
  {
    id: 201,
    title: 'Reparación integral de baño',
    client: 'Empresa ACME',
    salary: '$250',
    start: '2025-10-01',
    end: '2025-10-10',
    phone: '+503 7123-4567',
    status: 'En progreso',
  },
  {
    id: 202,
    title: 'Instalación eléctrica hogar',
    client: 'María López',
    salary: '$180',
    start: '2025-09-20',
    end: '2025-09-25',
    phone: '+503 7890-1234',
    status: 'Pendiente',
  },
];

const ContractCard = ({ c, onCancel }) => {
  return (
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
                <div className="text-sm font-medium text-blue-600">{c.status}</div>
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
              <FontAwesomeIcon icon={faCircleInfo} className="text-indigo-500" />
              <div>
                <div className="text-xs text-slate-500">Fin</div>
                <div className="text-sm text-slate-800">{c.end}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faComments} className="text-green-500" />
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

            <button
              onClick={() => onCancel(c.id)}
              className="ml-auto inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-sm text-sm transition"
              aria-label={`Cancelar contrato ${c.id}`}
            >
              <FontAwesomeIcon icon={faTrash} />
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
    </article>
  );
};

const ContracsPageAct = () => {
  const [contracts, setContracts] = useState(sampleContracts);

  const handleCancel = (id) => {
    const c = contracts.find(x => x.id === id);
    if (!c) return;
    if (!window.confirm(`¿Cancelar el contrato "${c.title}" con ${c.client}?`)) return;
    // Simular estado o llamada API
    setContracts(prev => prev.filter(x => x.id !== id));
    alert('Contrato cancelado');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 py-12">
      <section className="max-w-6xl mx-auto px-4">
        <header className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Contratos activos</h1>
            <p className="mt-1 text-sm text-slate-600">Gestiona tus contratos, comunícate con clientes y controla entregas desde aquí.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contratist-page/actividades/contratos/historial" className="px-4 py-2 rounded-md bg-white border hover:shadow-sm text-sm">
              Ver historial
            </Link>
            <Link to="/contratist-page/actividades/ofertas/nueva" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm">
              Nueva oferta
            </Link>
          </div>
        </header>

        <div className="grid gap-6">
          {contracts.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <p className="text-slate-600">No tienes contratos activos por el momento.</p>
              <div className="mt-4">
                <Link to="/contratist-page/actividades/ofertas" className="inline-flex px-4 py-2 bg-blue-600 text-white rounded-lg">Ver ofertas</Link>
              </div>
            </div>
          ) : (
            contracts.map(c => <ContractCard key={c.id} c={c} onCancel={handleCancel} />)
          )}
        </div>
      </section>
    </main>
  );
};

export default ContracsPageAct;