import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faCirclePlus, faPen, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

// helper para tiempo relativo
const timeAgo = (dateValue, now = Date.now()) => {
  if (!dateValue) return 'hace un momento';
  const d = typeof dateValue === 'string' ? new Date(dateValue) : new Date(dateValue);
  if (isNaN(d)) return 'hace un momento';
  const sec = Math.floor((now - d.getTime()) / 1000);
  if (sec < 60) return 'hace unos segundos';
  const min = Math.floor(sec / 60);
  if (min < 60) return `hace ${min} ${min === 1 ? 'minuto' : 'minutos'}`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `hace ${hr} ${hr === 1 ? 'hora' : 'horas'}`;
  const days = Math.floor(hr / 24);
  if (days < 30) return `hace ${days} ${days === 1 ? 'día' : 'días'}`;
  const months = Math.floor(days / 30);
  if (months < 12) return `hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
  const years = Math.floor(months / 12);
  return `hace ${years} ${years === 1 ? 'año' : 'años'}`;
};

const OfferCard = ({ offer, onArchive, onView, now }) => {
  return (
    <article className="group bg-white dark:bg-slate-800 rounded-2xl shadow-[0_10px_30px_rgba(2,6,23,0.08)] dark:shadow-[0_10px_30px_rgba(2,6,23,0.6)] overflow-hidden hover:shadow-lg transform transition hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row p-5 gap-4">
        <div className="flex-none flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-lg font-bold shadow-md">
            OF
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">{offer.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2 items-center">
                <span className="text-sm px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-medium">{offer.category}</span>
                <span className="text-sm px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">{offer.salary}</span>
                <span className="text-xs text-slate-400 dark:text-slate-400">• actualizado {timeAgo(offer.updatedAt || offer._raw?.updatedAt || offer.updated, now)}</span>
              </div>
            </div>

            <div className="flex-shrink-0 flex gap-2 items-center">
              <div className="hidden sm:block text-xs text-slate-400 dark:text-slate-300">{offer.status === 'active' ? 'Activa' : 'Archivada'}</div>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{offer.excerpt}</p>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => onArchive(offer.id || offer._id)}
                title="Archivar oferta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm transition"
              >
                <FontAwesomeIcon icon={faBoxArchive} />
                Archivar
              </button>

              <Link
                to={`/talentPage/actividades/ofertas/editar/${offer.id || offer._id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition"
                title="Editar oferta"
              >
                <FontAwesomeIcon icon={faPen} />
                Editar
              </Link>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <button
                onClick={() => onView(offer)}
                className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                title="Ver detalles"
              >
                <FontAwesomeIcon icon={faEye} />
                Ver detalles
              </button>
              <span className="text-xs text-slate-400 dark:text-slate-300">ID #{offer.id || offer._id}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
    </article>
  );
};

const OfferPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [professionMap, setProfessionMap] = useState({});
  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState({
    title: '',
    description: '',
    profession: '',
    payment: ''
  });
  const [creating, setCreating] = useState(false);
  const base = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api';

  // fetch profesiones para mostrar nombre en vez de id
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch(`${base}/professions`, { signal: controller.signal });
        if (!res.ok) return;
        const data = await res.json();
        // asume data puede ser { total, professions } o un array
        const list = Array.isArray(data) ? data : (data.professions || data);
        const map = {};
        (list || []).forEach(p => {
          if (!p) return;
          const id = p._id || p.id || p._uid || String(p);
          const name = p.name || p.title || String(p);
          map[id] = name;
        });
        setProfessionMap(map);
      } catch (e) {
        /* ignore */
      }
    })();
    return () => controller.abort();
  }, [base]);

  // estado que hace re-render periódicamente para actualizar "hace X"
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 60 * 1000); // cada 1 minuto
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(`${base}/offers`, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // getOffers devuelve { total, offers }
        const remote = data.offers || data;
        const mapped = (remote || []).map(o => ({
          id: o._id || o.id,
          title: o.title || '',
          salary: o.payment || o.salary || '',
          // category: (o.profession && (o.profession.name || o.profession)) || 'N/A',
          // intentar resolver nombre: si profession es objeto con name -> usarlo;
          // si es id -> buscar en professionMap y usar nombre si existe
          category: (() => {
            if (!o.profession) return 'N/A';
            if (typeof o.profession === 'string') return professionMap[o.profession] || o.profession;
            if (typeof o.profession === 'object') return o.profession.name || professionMap[o.profession._id] || 'N/A';
            return 'N/A';
          })(),
          excerpt: o.description || o.excerpt || '',
          // guarda la fecha original en updatedAt para calcular relativo
          updatedAt: o.updatedAt || o.updated || o.updated_at || o.updatedAt || null,
          // forzar siempre activo
          status: 'active',
          _raw: o
        }));
        setOffers(mapped);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Error al obtener ofertas');
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedOffer(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navigate = useNavigate();

  const handleArchive = (id) => {
    const found = offers.find((o) => (o.id || o._raw?._id) === id || o._id === id);
    if (!found) return;
    const ok = window.confirm(`¿Deseas archivar la oferta "${found.title}"?`);
    if (!ok) return;

    // construir objeto simple para la lista de archivadas
    const archivedItem = {
      id: found.id || found._raw?._id || Date.now(),
      title: found.title || (found._raw && (found._raw.title || 'Sin título')),
      salary: found.salary || found._raw?.payment || found._raw?.salary || '',
      category: found.category || (found._raw?.profession?.name || found._raw?.profession) || 'N/A',
      excerpt: found.excerpt || found._raw?.description || '',
      updated: timeAgo(found.updatedAt || found._raw?.updatedAt || found.updated, Date.now()),
      _raw: found._raw || null
    };

    // guardar en localStorage (puede contener anteriores archivadas)
    const stored = JSON.parse(localStorage.getItem('archivedOffers') || '[]');
    stored.unshift(archivedItem);
    localStorage.setItem('archivedOffers', JSON.stringify(stored));

    // quitar de la lista activa en UI
    setOffers((prev) => prev.filter((o) => (o.id || o._raw?._id) !== id && o._id !== id));

    // navegar a la página de archivadas
    navigate('/contratist-page/activities/offers/archived');
  };

  const handleView = (offer) => {
    setSelectedOffer(offer);
  };

  const closeModal = () => setSelectedOffer(null);

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setCreateForm((s) => ({ ...s, [name]: value }));
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    if (!createForm.title.trim()) return alert('Título requerido');
    setCreating(true);
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('jwt') || localStorage.getItem('x-token') || null;
      console.log('Token enviado:', token);
      if (!token) {
        setCreating(false);
        return alert('No has iniciado sesión. Inicia sesión para crear ofertas.');
      }

      const res = await fetch(`${base}/offers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'x-token': token
        },
        body: JSON.stringify({
          title: createForm.title,
          description: createForm.description,
          profession: createForm.profession || undefined,
          payment: createForm.payment || undefined
        })
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }

      const newOffer = await res.json();
      const added = {
        id: newOffer._id || newOffer.id || Date.now(),
        title: newOffer.title || createForm.title,
        salary: newOffer.payment || newOffer.salary || createForm.payment,
        category:
          (newOffer.profession && (newOffer.profession.name || newOffer.profession)) ||
          professionMap[newOffer.profession] ||
          (createForm.profession || 'N/A'),
        excerpt: newOffer.description || createForm.description || '',
        updatedAt: newOffer.updatedAt || newOffer.updated || Date.now(),
        status: 'active',
        _raw: newOffer
      };
      setOffers((prev) => [added, ...(prev || [])]);
      setShowCreate(false);
      setCreateForm({ title: '', description: '', profession: '', payment: '' });
    } catch (err) {
      alert('Error al crear oferta: ' + (err.message || JSON.stringify(err)));
    } finally {
      setCreating(false);
    }
  };

  const closeCreate = () => {
    setShowCreate(false);
    setCreateForm({ title: '', description: '', profession: '', payment: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8 text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100">Mis Ofertas</h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-xl">Administra tus ofertas publicadas. Archiva u edita desde aquí.</p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <Link to="/contratist-page/activities/offers/archived" className="text-sm px-4 py-2 rounded-md bg-white dark:bg-slate-800 border hover:shadow-sm text-center dark:border-slate-700">
              Ver archivadas
            </Link>

            <button
              onClick={() => setShowCreate(true)}
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
              aria-label="Nueva oferta (abrir modal)"
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              Nueva oferta
            </button>
          </div>
        </header>

        {loading ? (
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl text-center">Cargando ofertas...</div>
        ) : error ? (
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl text-center text-red-600">Error: {error}</div>
        ) : offers.length === 0 ? (
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl text-center">No hay ofertas publicadas.</div>
        ) : (
          <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.id || offer._raw?._id} offer={offer} onArchive={handleArchive} onView={handleView} now={now} />
            ))}
          </section>
        )}

        
      </div>

      <Link
        to="/talentPage/actividades/ofertas/nueva"
        className="fixed bottom-6 right-6 md:hidden inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 shadow-xl text-white"
        aria-label="Agregar oferta"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </Link>

      {/* Modal de detalles */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
          <div className="relative max-w-3xl w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-auto max-h-[90vh]">
            <div className="p-4 border-b dark:border-slate-700 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{selectedOffer.title}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">ID: {selectedOffer.id || selectedOffer._raw?._id} • {timeAgo(selectedOffer.updatedAt || selectedOffer._raw?.updatedAt || selectedOffer.updated, now)}</p>
              </div>
              <button onClick={closeModal} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="p-6 space-y-4 text-slate-700 dark:text-slate-200">
              <div>
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">Descripción</h3>
                <p className="mt-1 text-sm">{selectedOffer._raw?.description || selectedOffer.excerpt || '—'}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-300">Categoría / Profesión</h4>
                  <p className="mt-1 text-sm">{selectedOffer._raw?.profession?.name || selectedOffer.category || (typeof selectedOffer._raw?.profession === 'string' ? selectedOffer._raw.profession : '—')}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-300">Forma de pago</h4>
                  <p className="mt-1 text-sm">{selectedOffer._raw?.payment || selectedOffer.salary || '—'}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-600 dark:text-slate-300">Metadatos</h4>
                <ul className="mt-1 text-sm space-y-1">
                  <li>Estado: {selectedOffer.status === 'active' ? 'Activa' : 'Archivada'}</li>
                  <li>Creado: {selectedOffer._raw?.createdAt || '—'}</li>
                  <li>Actualizado: {selectedOffer._raw?.updatedAt || selectedOffer.updated || '—'}</li>
                  <li>Autor: {selectedOffer._raw?.user?.name || selectedOffer._raw?.user || '—'}</li>
                </ul>
              </div>

              <div className="flex justify-end gap-2">
                <Link to={`/talentPage/actividades/ofertas/editar/${selectedOffer.id || selectedOffer._raw?._id}`} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
                  Editar
                </Link>
                <button onClick={closeModal} className="inline-flex items-center px-4 py-2 border rounded-md">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de creación */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeCreate} />
          <form
            onSubmit={handleCreateSubmit}
            className="relative max-w-2xl w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-auto max-h-[90vh] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Crear nueva oferta</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Rellena los datos y guarda.</p>
              </div>
              <button type="button" onClick={closeCreate} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <div>
                <label className="block text-sm font-medium">Título</label>
                <input name="title" value={createForm.title} onChange={handleCreateChange} className="mt-1 w-full rounded-md border px-3 py-2" required />
              </div>

              <div>
                <label className="block text-sm font-medium">Descripción</label>
                <textarea name="description" value={createForm.description} onChange={handleCreateChange} className="mt-1 w-full rounded-md border px-3 py-2" rows={4} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Categoría / Profesión</label>
                  <select name="profession" value={createForm.profession} onChange={handleCreateChange} className="mt-1 w-full rounded-md border px-3 py-2">
                    <option value="">Seleccionar (o dejar vacío)</option>
                    {Object.entries(professionMap).map(([id, name]) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium">Forma de pago / Salario</label>
                  <input name="payment" value={createForm.payment} onChange={handleCreateChange} className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button type="button" onClick={closeCreate} className="px-4 py-2 border rounded-md">Cancelar</button>
                <button type="submit" disabled={creating} className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  {creating ? 'Creando...' : 'Crear oferta'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default OfferPage;