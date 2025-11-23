import React from 'react';

const TalentP = () => {
    return (
      <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
        <section>
          <div className="px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden mt-20">
            <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl xl:text-6xl">
                <span className="block text-green-500 dark:text-green-400 xl:inline">Encuentre Rápido</span>
                <br></br>
                <span className="block text-green-500 dark:text-green-400 xl:inline">Trabaje Rápido</span>
              </h1>
              <p className="paragraph sm:block text-slate-700 dark:text-slate-300">
              Olvida el pasado, encuentra a los indicados aquí y en este lugar.
              </p>
            </div>
            <div className=" sm:block col-span-12 lg:col-span-6">
              <div className="w-full">
                <img className="aos-init aos-animate " src="https://lobbyfix.com/wp-content/uploads/2021/09/facility-management-1024x799.jpg" alt="work" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

export default TalentP;