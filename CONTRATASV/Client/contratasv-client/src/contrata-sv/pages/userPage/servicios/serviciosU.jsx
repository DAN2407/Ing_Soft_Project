import React, { useState, useMemo, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPhone, faCalendarAlt, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FiltersService from './filters.jsx';

const sampleOffers = [
    {
        id: 1,
        title: 'Ofrezco servicio de plomería en el área metropolitana de San Salvador',
        profession: 'Plomero',
        client: 'Juan Pérez',
        salary: '$150',
        startDate: '2025-12-01',
        endDate: '2026-01-01',
        contact: '+503 7777-1111',
        status: 'Pendiente'
    },
    {
        id: 2,
        title: 'Instalación eléctrica doméstica',
        profession: 'Electricista',
        client: 'María López',
        salary: '$200',
        startDate: '2025-12-10',
        endDate: '2026-02-10',
        contact: '+503 7777-2222',
        status: 'Aceptado'
    },
    {
        id: 3,
        title: 'Jardinería y mantenimiento de áreas verdes',
        profession: 'Jardinero',
        client: 'Carlos Gómez',
        salary: '$120',
        startDate: '2025-11-30',
        endDate: '2026-03-30',
        contact: '+503 7777-3333',
        status: 'Rechazado'
    },
    {
        id: 4,
        title: 'Limpieza profunda de oficinas y locales',
        profession: 'Personal de limpieza',
        client: 'Ana Martínez',
        salary: '$180',
        startDate: '2025-12-05',
        endDate: '2026-01-20',
        contact: '+503 7777-4444',
        status: 'Pendiente'
    },
    {
        id: 5,
        title: 'Servicio de pintura interior y exterior',
        profession: 'Pintor',
        client: 'Óscar Ramírez',
        salary: '$250',
        startDate: '2025-12-15',
        endDate: '2026-03-15',
        contact: '+503 7777-5555',
        status: 'Aceptado'
    },
    {
        id: 6,
        title: 'Reparación y mantenimiento de computadoras',
        profession: 'Técnico en computación',
        client: 'Beatriz Núñez',
        salary: '$90',
        startDate: '2025-11-25',
        endDate: '2026-02-25',
        contact: '+503 7777-6666',
        status: 'Pendiente'
    },
    {
        id: 7,
        title: 'Servicio de mudanzas locales',
        profession: 'Mudanzas / Transportista',
        client: 'Luis Hernández',
        salary: '$300',
        startDate: '2025-12-20',
        endDate: '2026-01-05',
        contact: '+503 7777-7777',
        status: 'Aceptado'
    },
    {
        id: 8,
        title: 'Clases particulares de matemáticas',
        profession: 'Profesor particular',
        client: 'María-Juana',
        salary: '$50',
        startDate: '2025-11-10',
        endDate: '2026-04-10',
        contact: '+503 7777-8888',
        status: 'Rechazado'
    }
];

const normalize = (s = '') =>
  s
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const OfferCard = ({ offer, onViewDetails }) => (
    <article className="rounded-2xl shadow-md hover:shadow-2xl transition p-6 bg-white dark:bg-slate-800">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="flex-none">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white font-bold text-lg">
                    OF
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">{offer.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Cliente:{' '}
                    <span className="font-medium text-slate-800 dark:text-slate-200">{offer.client}</span>
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Profesión:{' '}
                    <span className="font-medium text-slate-800 dark:text-slate-200">{offer.profession}</span>
                </p>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-emerald-500" />
                        <div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Fechas</div>
                            <div className="text-sm text-slate-800 dark:text-slate-200">
                                {offer.startDate} — {offer.endDate}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <FontAwesomeIcon icon={faPhone} className="text-emerald-400" />
                        <div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Contacto</div>
                            <div className="text-sm text-slate-800 dark:text-slate-200">{offer.contact}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex gap-2 flex-wrap">
                <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm"
                    onClick={() => onViewDetails(offer)}
                >
                    <FontAwesomeIcon icon={faEye} />
                    Ver detalles
                </button>

                <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-slate-700 dark:text-slate-100 border dark:border-slate-700 text-sm hover:shadow-sm"
                    onClick={() => console.log('Programar oferta', offer.id)}
                >
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    Programar
                </button>
            </div>

            <div className="flex items-center gap-3">
                <button
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-700 hover:bg-green-800 text-white text-sm"
                    onClick={() => console.log('Crear Solicitud para oferta', offer.id)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                    Crear Solicitud
                </button>
            </div>
        </div>
    </article>
);

const Modal = ({ offer, onClose }) => {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);

    if (!offer) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
        >
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            <div className="relative max-w-3xl w-full mx-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 z-10">
                <button
                    className="absolute top-4 right-4 text-slate-600 dark:text-slate-200 hover:text-slate-900"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{offer.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{offer.profession} — Cliente: <span className="font-medium text-slate-800 dark:text-slate-200">{offer.client}</span></p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Fechas</div>
                        <div className="text-sm text-slate-800 dark:text-slate-200">{offer.startDate} — {offer.endDate}</div>
                    </div>

                    <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Contacto</div>
                        <div className="text-sm text-slate-800 dark:text-slate-200">{offer.contact}</div>
                    </div>
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    <div className="font-medium text-slate-800 dark:text-slate-200 mb-1">Descripción</div>
                    <div>
                        {offer.description || 'No hay descripción disponible para esta oferta.'}
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        className="flex-1 px-4 py-2 rounded-md bg-green-700 hover:bg-green-800 text-white text-sm"
                        onClick={() => console.log('Crear Solicitud', offer.id)}
                    >
                        Crear Solicitud
                    </button>
                </div>
            </div>
        </div>
    );
};

const ServiciosUser = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [offers] = useState(sampleOffers);
    const [sortOrder, setSortOrder] = useState('A-Z');
    const [statusFilter, setStatusFilter] = useState('Todos');
    const [selectedOffer, setSelectedOffer] = useState(null);

    useEffect(() => {
        const t = setTimeout(() => setDebouncedQuery(query), 300);
        return () => clearTimeout(t);
    }, [query]);

    const filteredOffers = useMemo(() => {
        const q = normalize(debouncedQuery.trim());
        let result = offers.filter(o => {
            if (statusFilter !== 'Todos' && o.status !== statusFilter) return false;
            const hay = [
                normalize(o.title),
                normalize(o.client),
                normalize(o.contact),
                normalize(o.status),
                normalize(o.profession)
            ].some(field => field.includes(q));
            return q === '' ? true : hay;
        });

        result.sort((a, b) => {
            const ta = normalize(a.title);
            const tb = normalize(b.title);
            if (ta === tb) return 0;
            if (sortOrder === 'A-Z') return ta < tb ? -1 : 1;
            return ta > tb ? -1 : 1;
        });

        return result;
    }, [debouncedQuery, offers, sortOrder, statusFilter]);

    const handleViewDetails = (offer) => {
        setSelectedOffer(offer);
    };

    const handleCloseModal = () => {
        setSelectedOffer(null);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 text-slate-900 dark:text-slate-100">
            <section className="max-w-6xl mx-auto">
                <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                            Ofertas
                        </h1>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                            Busca y administra las ofertas. Usa filtros para ordenar o seleccionar por estado.
                        </p>
                    </div>

                    <div className="w-full sm:w-auto">
                        <input
                            className="bg-gray-300 dark:bg-slate-700 dark:text-slate-100 focus:ring-1 focus:ring-green-600 p-3 w-full sm:w-80 rounded"
                            type="text"
                            placeholder="Buscar por servicio, profesión, cliente, contacto o estado"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </header>

                <div className="mb-6">
                    <FiltersService
                        sort={sortOrder}
                        status={statusFilter}
                        onSortChange={setSortOrder}
                        onStatusChange={setStatusFilter}
                    />
                </div>

                <div className="grid gap-6">
                    {filteredOffers.length === 0 && (
                        <div className="col-span-full rounded-2xl p-8 text-center bg-white dark:bg-slate-800">
                            <p className="text-slate-600 dark:text-slate-300">No se encontraron ofertas.</p>
                        </div>
                    )}

                    {filteredOffers.map((o) => (
                        <OfferCard key={o.id} offer={o} onViewDetails={handleViewDetails} />
                    ))}
                </div>
            </section>

            {selectedOffer && (
                <Modal offer={selectedOffer} onClose={handleCloseModal} />
            )}
        </main>
    );
}

export default ServiciosUser;