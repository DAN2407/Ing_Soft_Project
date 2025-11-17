import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faCirclePlus, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sampleOffers = [
  {
    id: 1,
    title: 'Plomería especializada - reparaciones y montaje',
    salary: '$150 - $300',
    category: 'Plomería',
    excerpt:
      'Reparación de lavados, tuberías, instalación de fregaderos y lavadoras. Materiales por cuenta del cliente; herramientas propias.',
    updated: '2 horas',
    status: 'active',
  },
  {
    id: 2,
    title: 'Instalación eléctrica doméstica',
    salary: '$200 - $400',
    category: 'Electricidad',
    excerpt:
      'Instalaciones, arreglo de circuitos, cambio de interruptores y verificación de sistemas. Presupuesto previo.',
    updated: '1 día',
    status: 'active',
  },
  {
    id: 3,
    title: 'Diseño gráfico - identidad visual',
    salary: '$100 - $250',
    category: 'Diseño',
    excerpt:
      'Creación de marca, logos y piezas para redes. Entrego archivos editables y guía de uso de marca.',
    updated: '3 días',
    status: 'active',
  },
];

const OfferCard = ({ offer, onArchive }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-[0_10px_30px_rgba(2,6,23,0.08)] overflow-hidden hover:shadow-lg transform transition hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row p-5 gap-4">
        <div className="flex-none flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-lg font-bold shadow-md">
            OF
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-slate-900 truncate">{offer.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2 items-center">
                <span className="text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">{offer.category}</span>
                <span className="text-sm px-2 py-1 rounded-full bg-slate-100 text-slate-700">{offer.salary}</span>
                <span className="text-xs text-slate-400">• actualizado {offer.updated}</span>
              </div>
            </div>

            <div className="flex-shrink-0 flex gap-2 items-center">
              <div className="hidden sm:block text-xs text-slate-400">{offer.status === 'active' ? 'Activa' : 'Archivada'}</div>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-600 line-clamp-3">{offer.excerpt}</p>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => onArchive(offer.id)}
                title="Archivar oferta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm transition"
              >
                <FontAwesomeIcon icon={faBoxArchive} />
                Archivar
              </button>

              <Link
                to={`/talentPage/actividades/ofertas/editar/${offer.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition"
                title="Editar oferta"
              >
                <FontAwesomeIcon icon={faPen} />
                Editar
              </Link>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <Link to={`/talentPage/actividades/ofertas/ver/${offer.id}`} className="inline-flex items-center gap-2 hover:text-blue-600 text-sm">
                <FontAwesomeIcon icon={faEye} />
                Ver detalles
              </Link>
              <span className="text-xs text-slate-400">ID #{offer.id}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
    </article>
  );
};

const OfferPage = () => {
  const [offers, setOffers] = useState(sampleOffers);

  const handleArchive = (id) => {
    const found = offers.find((o) => o.id === id);
    if (!found) return;
    const ok = window.confirm(`¿Deseas archivar la oferta "${found.title}"?`);
    if (!ok) return;
    setOffers((prev) => prev.map((o) => (o.id === id ? { ...o, status: 'archived' } : o)));
    alert('Oferta archivada');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Mis Ofertas</h1>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">Administra tus ofertas publicadas. Archiva u edita desde aquí.</p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <Link to="/contratist-page/activities/offers/archived" className="text-sm px-4 py-2 rounded-md bg-white border hover:shadow-sm text-center">
              Ver archivadas
            </Link>

            <Link
              to="/talentPage/actividades/ofertas/nueva"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              Nueva oferta
            </Link>
          </div>
        </header>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onArchive={handleArchive} />
          ))}
        </section>

        <div className="mt-6 flex justify-end">
          <Link
            to="/talentPage/actividades/ofertas/nueva"
            className="hidden md:inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-3 rounded-full shadow-lg transition"
            aria-label="Agregar oferta"
          >
            <FontAwesomeIcon icon={faCirclePlus} />
            Agregar oferta
          </Link>
        </div>
      </div>

      <Link
        to="/talentPage/actividades/ofertas/nueva"
        className="fixed bottom-6 right-6 md:hidden inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 shadow-xl text-white"
        aria-label="Agregar oferta"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </Link>
    </main>
  );
};

export default OfferPage;