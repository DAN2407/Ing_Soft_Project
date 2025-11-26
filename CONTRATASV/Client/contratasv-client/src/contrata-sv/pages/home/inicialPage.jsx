//pagina inicial para poner una imagen
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InicialPage = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-20 bg-gradient-to-b from-white via-green-50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen text-slate-900 dark:text-slate-100">
      <section className="w-full">
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl grid grid-cols-12 gap-6 items-center py-8">
          <div className="col-span-12 lg:col-span-6 mt-6 lg:mt-0 px-2 sm:px-4">
            <div className="inline-flex items-center gap-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm mx-auto lg:mx-0">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v6m0 8v6M4 12h6m8 0h6" /></svg>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">CONTRATASV</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 text-center lg:text-left">
              Encuentre Rápido,
              <br />
              Trabaje Rápido
            </h1>

            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Olvida el pasado. Conecta con profesionales verificados y consigue resultados rápidamente.
              Encuentra talento local o ofrece tus servicios en una plataforma confiable.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-white/30 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Verificados</h4>
                <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Perfiles revisados para mayor confianza.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-white/30 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Rápido</h4>
                <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Publica tu trabajo y recibe propuestas en horas.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-white/30 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Seguridad</h4>
                <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Pagos y comunicación protegidos en la plataforma.</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 px-2 sm:px-4">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(2,6,23,0.12)]">
                <img
                  src="https://lobbyfix.com/wp-content/uploads/2021/09/facility-management-1024x799.jpg"
                  alt="Profesionales trabajando"
                  loading="lazy"
                  className="w-full h-auto aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] object-cover brightness-95"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-white/30 dark:border-slate-700 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Garantía de calidad</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">Soporte y mediación en conflictos.</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-white/30 dark:border-slate-700 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Para talento</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">Perfil destacado y oportunidades relevantes.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default InicialPage;

