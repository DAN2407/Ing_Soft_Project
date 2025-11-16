import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPen, faTrash, faBoxArchive, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//revisar lo de los llamados de API 
const initialArchived = [
  {
    id: 101,
    title: 'Plomería: reparación de tuberías y duchas',
    salary: '$150 - $300',
    category: 'Plomería',
    excerpt:
      'Reparación de lavabos, tuberías y duchas; instalación de fregaderos y lavadoras. Materiales por cuenta del cliente.',
    updated: 'hace 3 días',
  },
  {
    id: 102,
    title: 'Diseño de identidad visual',
    salary: '$120 - $280',
    category: 'Diseño',
    excerpt:
      'Creación de logotipo, paleta de colores y piezas para redes. Entrega en formatos editables.',
    updated: 'hace 7 días',
  },
];

const OfferPageArc = () => {
  const [offers, setOffers] = useState(initialArchived);
  const [query, setQuery] = useState('');
  const [onlyCategory, setOnlyCategory] = useState('Todas');

  const categories = ['Todas', ...Array.from(new Set(initialArchived.map(o => o.category)))];

  const filtered = offers.filter(o => {
    const matchQuery = (o.title + o.excerpt + o.category).toLowerCase().includes(query.toLowerCase());
    const matchCat = onlyCategory === 'Todas' ? true : o.category === onlyCategory;
    return matchQuery && matchCat;
  });

  const handleRestore = (id) => {
    const item = offers.find(o => o.id === id);
    if (!item) return;
    if (!window.confirm(`¿Desarchivar la oferta "${item.title}"?`)) return;
    // TODO: llamar API para desarchivar
    setOffers(prev => prev.filter(o => o.id !== id));
    alert('Oferta desarchivada');
  };

  const handleDelete = (id) => {
    const item = offers.find(o => o.id === id);
    if (!item) return;
    if (!window.confirm(`Eliminar permanentemente "${item.title}"? Esta acción no se puede deshacer.`)) return;
    // TODO: llamar API para eliminar
    setOffers(prev => prev.filter(o => o.id !== id));
    alert('Oferta eliminada');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ofertas Archivadas</h1>
            <p className="mt-1 text-sm text-slate-600">Aquí se muestran tus ofertas archivadas. Puedes desarchivarlas, editarlas o eliminarlas.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex items-center bg-white rounded-lg shadow-sm px-3 py-2 w-full sm:w-auto">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400" />
              <input
                aria-label="Buscar ofertas archivadas"
                placeholder="Buscar título, categoría o descripción..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="ml-3 outline-none bg-transparent text-sm text-slate-700 w-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={onlyCategory}
                onChange={(e) => setOnlyCategory(e.target.value)}
                className="bg-white px-3 py-2 rounded-lg shadow-sm text-sm border"
                aria-label="Filtrar por categoría"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>

              <Link
                to="/talentPage/actividades/ofertas/nueva"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md text-sm transition"
                aria-label="Agregar oferta"
              >
                <FontAwesomeIcon icon={faCirclePlus} />
                Nueva
              </Link>
            </div>
          </div>
        </div>

        {/* list */}
        <section className="grid gap-6 sm:grid-cols-2">
          {offers.length === 0 ? (
            <div className="col-span-full bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-slate-600">No hay ofertas archivadas.</p>
              <div className="mt-4 flex justify-center">
                <Link to="/talentPage/actividades/ofertas/nueva" className="inline-flex px-4 py-2 bg-emerald-600 text-white rounded-lg">Crear oferta</Link>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="col-span-full bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-slate-600">No se encontraron ofertas archivadas con esos criterios.</p>
              <div className="mt-4 flex justify-center">
                <Link to="/talentPage/actividades/ofertas/activas" className="text-blue-600 hover:underline">Ver ofertas activas</Link>
              </div>
            </div>
          ) : (
            filtered.map(offer => (
              <article key={offer.id} className="relative bg-white rounded-2xl shadow-[0_8px_24px_rgba(2,6,23,0.06)] overflow-hidden hover:shadow-lg transform transition hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      <FontAwesomeIcon icon={faBoxArchive} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">{offer.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2 items-center">
                        <span className="text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">{offer.category}</span>
                        <span className="text-sm px-2 py-1 rounded-full bg-slate-100 text-slate-700">{offer.salary}</span>
                        <span className="text-xs text-slate-400">• {offer.updated}</span>
                      </div>

                      <p className="mt-3 text-sm text-slate-600 line-clamp-3">{offer.excerpt}</p>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleRestore(offer.id)}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border text-sm hover:bg-white/90"
                            aria-label={`Desarchivar ${offer.title}`}
                          >
                            <FontAwesomeIcon icon={faCirclePlus} className="text-blue-600" />
                            Desarchivar
                          </button>

                          <Link
                            to={`/talentPage/actividades/ofertas/editar/${offer.id}`}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
                            aria-label={`Editar ${offer.title}`}
                          >
                            <FontAwesomeIcon icon={faPen} />
                            Editar
                          </Link>
                        </div>

                        <button
                          onClick={() => handleDelete(offer.id)}
                          className="text-sm text-red-600 hover:underline"
                          aria-label={`Eliminar ${offer.title}`}
                        >
                          <FontAwesomeIcon icon={faTrash} className="mr-2" />
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              </article>
            ))
          )}
        </section>

        {/* footer actions */}
        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm text-slate-500">
            Mostrando <span className="font-medium text-slate-700">{filtered.length}</span> ofertas archivadas
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contratist-page/activities/offers/active" className="px-4 py-2 rounded-md bg-white border hover:shadow-sm text-sm">Ver activas</Link>
            <Link to="/talentPage/actividades/ofertas/nueva" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm">Agregar oferta</Link>
          </div>
        </div>
      </div>

      {/* floating add button mobile */}
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

export default OfferPageArc;