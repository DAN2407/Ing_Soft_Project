import React from 'react';


const FiltersService = ({ sort = 'A-Z', status = 'Todos', onSortChange = () => {}, onStatusChange = () => {} }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-none p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Orden (segmented) */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Orden</span>
        <div className="inline-flex rounded-lg bg-slate-100 dark:bg-slate-700 p-1">
          <button
            aria-pressed={sort === 'A-Z'}
            onClick={() => onSortChange('A-Z')}
            className={`px-3 py-1 rounded-md text-sm font-semibold transition ${
              sort === 'A-Z'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            A-Z
          </button>
          <button
            aria-pressed={sort === 'Z-A'}
            onClick={() => onSortChange('Z-A')}
            className={`ml-1 px-3 py-1 rounded-md text-sm font-semibold transition ${
              sort === 'Z-A'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            Z-A
          </button>
        </div>
      </div>

      {/* Placeholder para filtros adicionales (responsive) */}
      <div className="w-full sm:w-auto flex justify-end">
        <select
          className="text-sm rounded-lg border border-green-700 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 focus:outline-none"
          aria-label="Más filtros (próximamente)"
          disabled
        >
          <option>Más filtros (próximamente)</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersService;