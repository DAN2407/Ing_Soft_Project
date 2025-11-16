import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faCirclePlus, faPen, faEye, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
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
      <div className="flex p-6 gap-6">
        <div className="flex-none w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-xl font-bold shadow-md">
          OF
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{offer.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2 items-center">
                <span className="text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">{offer.category}</span>
                <span className="text-sm px-2 py-1 rounded-full bg-slate-100 text-slate-700">{offer.salary}</span>
                <span className="text-xs text-slate-400">• actualizado {offer.updated}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onArchive(offer.id)}
                title="Archivar oferta"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm transition"
              >
                <FontAwesomeIcon icon={faBoxArchive} />
                Archivar
              </button>

              <div className="relative">
                <Link
                  to={`/talentPage/actividades/ofertas/editar/${offer.id}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition"
                  title="Editar oferta"
                >
                  <FontAwesomeIcon icon={faPen} />
                  Editar
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600 line-clamp-3">{offer.excerpt}</p>

          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <Link to={`/talentPage/actividades/ofertas/ver/${offer.id}`} className="inline-flex items-center gap-2 hover:text-blue-600">
                <FontAwesomeIcon icon={faEye} />
                Ver detalles
              </Link>
              <span className="text-xs text-slate-400">ID #{offer.id}</span>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition text-xs text-slate-400">
              {offer.status === 'active' ? 'Activa' : 'Archivada'}
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
    // aquí podrías llamar al API para archivar
    alert('Oferta archivada');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Mis Ofertas</h1>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Administra tus ofertas publicadas. Usa el botón "Archivar" para ocultar una oferta y "Editar" para actualizar los datos.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contratist-page/activities/offers/archived" className="text-sm px-4 py-2 rounded-md bg-white border hover:shadow-sm">
              Ver archivadas
            </Link>

            <Link
              to="/talentPage/actividades/ofertas/nueva"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              Nueva oferta
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onArchive={handleArchive} />
          ))}
        </section>

        <div className="mt-8 flex justify-end">
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

      {/* floating add button for mobile */}
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