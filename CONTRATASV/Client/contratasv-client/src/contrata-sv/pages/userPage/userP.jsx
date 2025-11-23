import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserP = () => {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
        <div className="px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden pt-20">
          <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl xl:text-6xl">
              <span className="block text-green-500  xl:inline">Encuentre Rápido</span>
              <br />
              <span className="block text-green-500 xl:inline">Trabaje Rápido</span>
            </h1>
            <p className="paragraph sm:block text-slate-600 dark:text-slate-300">
            Olvida el pasado, encuentra a los indicados aquí y en este lugar.
            </p>
          </div>
          <div className=" sm:block col-span-12 lg:col-span-6">
            <div className="w-full flex items-center justify-center">
              <img className="rounded-lg shadow-lg border border-transparent dark:border-slate-700 max-w-full h-auto" src="https://lobbyfix.com/wp-content/uploads/2021/09/facility-management-1024x799.jpg" alt="work" />
            </div>
          </div>
        </div>
      </main>
    );
}

export default UserP;
