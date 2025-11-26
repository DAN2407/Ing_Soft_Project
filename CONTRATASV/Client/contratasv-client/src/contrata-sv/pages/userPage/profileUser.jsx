import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const ProfileUser = () => {
    return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      
        <div className="flex items-center justify-center py-12 px-4">
            <div className="flex flex-col rounded-lg shadow-lg pt-8 bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700">
                <div className="flex items-center justify-center pt-10 flex-col">
                    <img src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg" alt="PFP" className="rounded-full w-32 ring-2 ring-green-600 dark:ring-green-400"/>
                    <h1 className="text-slate-900 dark:text-slate-100 font-semibold text-xl mt-5">DUMMY</h1>
                    <h1 className="text-slate-500 dark:text-slate-300 text-sm">Las Arboledas, Lourdes</h1>
                    
                </div>
            <div className="flex flex-col md:flex-row justify-between p-4 gap-4">
            <div className=" flex flex-col">
                <h1 className=" uppercase text-slate-500 dark:text-slate-400">Información de contacto</h1>
                <div className="mt-3">
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Número de contacto:</p>
                  <p className="text-green-800 dark:text-green-300 font-medium">7689-4785</p>
                </div>

                <div className="mt-3">
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Correo Electrónico:</p>
                  <p className="text-green-800 dark:text-green-300 font-medium">dummytest@test.com</p>
                </div>
            </div>

            <button className="w-14 h-14 self-center rounded-full bg-green-800 hover:bg-green-700 text-white hover:text-white flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faPen} className="cursor-pointer"/>
            </button>
        </div>
            </div>

        </div>
        <footer className=" bg-gray-600 dark:bg-slate-900 text-white fixed inset-x-0 bottom-0 p-2 text-xs flex justify-between">
                    <div>
                        <p>© Copyright 2022 CONTRATASV LLC. All rights reserved</p>
                    </div>
                    <div className=" space-x-1">

                    </div>
        </footer>
    </main>
    );
}   

export default ProfileUser;