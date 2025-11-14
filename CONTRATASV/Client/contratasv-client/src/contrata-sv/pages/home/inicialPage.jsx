//pagina inicial para poner una imagen
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InicialPage = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-20 bg-gradient-to-b from-white via-green-50 to-slate-50 min-h-screen">
      <section className="w-full">
        <div className="px-6 sm:px-8 mx-auto max-w-7xl grid grid-cols-12 gap-6 items-center">
          {/* Left: Texto hero */}
          <div className="col-span-12 lg:col-span-6 mt-8 xl:mt-10 space-y-6 px-4 sm:px-6">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v6m0 8v6M4 12h6m8 0h6" /></svg>
              <span className="text-sm font-medium text-green-700">CONTRATASV</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
              Encuentre Rápido,
              <br />
              Trabaje Rápido
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
              Olvida el pasado. Conecta con profesionales verificados y consigue resultados rápidamente.
              Encuentra talento local o ofrece tus servicios en una plataforma confiable.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-white/30">
                <h4 className="text-sm font-semibold text-slate-800">Verificados</h4>
                <p className="text-xs text-slate-500 mt-1">Perfiles revisados para mayor confianza.</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-white/30">
                <h4 className="text-sm font-semibold text-slate-800">Rápido</h4>
                <p className="text-xs text-slate-500 mt-1">Publica tu trabajo y recibe propuestas en horas.</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-white/30">
                <h4 className="text-sm font-semibold text-slate-800">Seguridad</h4>
                <p className="text-xs text-slate-500 mt-1">Pagos y comunicación protegidos en la plataforma.</p>
              </div>
            </div>
          </div>

          {/* Right: imagen con tarjeta de búsqueda */}
          <div className="col-span-12 lg:col-span-6 px-4 sm:px-6">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(2,6,23,0.12)]">
                <img
                  src="https://lobbyfix.com/wp-content/uploads/2021/09/facility-management-1024x799.jpg"
                  alt="Profesionales trabajando"
                  className="w-full h-96 object-cover sm:h-[32rem] brightness-95"
                />
              </div>

              {/* Card elevated sobre la imagen */}
              
            </div>

            {/* Small testimonial / feature card */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-white/30 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Garantía de calidad</p>
                  <p className="text-xs text-slate-500">Soporte y mediación en conflictos.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-white/30 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Para talento</p>
                  <p className="text-xs text-slate-500">Perfil destacado y oportunidades relevantes.</p>
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

