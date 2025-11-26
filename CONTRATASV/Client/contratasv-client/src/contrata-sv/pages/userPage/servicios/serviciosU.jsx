import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FiltersService from './filters.jsx';

const ServiciosUser = () => {
    return (
          <main className="pt-10 overflow-scroll snap-y bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
              <div className="grid ">
                  <h1 className="text-2xl mt-20 font-bold text-center text-slate-900 dark:text-slate-100">¿Qué deseas buscar?</h1>
                  <input
                    className="bg-gray-300 dark:bg-slate-700 dark:text-slate-100 focus:ring-1 focus:ring-green-600 p-4 mx-auto w-9/12 rounded"
                    type="text"
                    placeholder="Buscar"
                  />
              </div>

              <div className="mt-6">
                <FiltersService />
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-none p-8 m-4 overflow-y-auto">
                    <div className="flex flex-col items-center ml-auto mr-auto">
                        <div className="flex flex-col rounded-lg shadow-lg p-4 bg-transparent">
                            <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">
                              Has recibido una solicitud de servicio para la oferta:
                              <span className="block text-1xl text-green-500 dark:text-green-300">“Ofrezco servicio de plomería en el área metropolitana de San Salvador”</span>
                            </h2>

                            <div className="flex flex-row justify-center pl-6 pr-6 sm:pl-24 sm:pr-24 mt-4">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <div className="grid gap-3 w-full">
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Cliente:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>

                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Salario acordado:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>

                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Inicio de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>

                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Finalización de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>

                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Número de contacto:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>

                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Estado de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end items-center pt-8">
                                <button className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-lg text-white font-bold shadow">
                                    <FontAwesomeIcon icon={faPlus} className="text-lg pr-3" />
                                    Crear Solicitud
                                </button>
                            </div>
                        </div>       
                    </div>

                    {/* Duplicados adaptados a modo oscuro */}
                    <div className="flex flex-col items-center ml-auto mr-auto mt-6">
                        <div className="flex flex-col rounded-lg shadow-lg p-4 bg-transparent">
                            <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">
                              Has recibido una solicitud de servicio para la oferta:
                              <span className="block text-1xl text-green-500 dark:text-green-300">“Ofrezco servicio de plomería en el área metropolitana de San Salvador”</span>
                            </h2>
                            <div className="flex flex-row justify-center pl-6 pr-6 sm:pl-24 sm:pr-24 mt-4">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <div className="grid gap-3 w-full">
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Cliente:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Salario acordado:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Inicio de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Finalización de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Número de contacto:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Estado de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center pt-8">
                                <button className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-lg text-white font-bold shadow">
                                    <FontAwesomeIcon icon={faPlus} className="text-lg pr-3" />
                                    Crear Solicitud
                                </button>
                            </div>
                        </div>       
                    </div>

                    <div className="flex flex-col items-center ml-auto mr-auto mt-6">
                        <div className="flex flex-col rounded-lg shadow-lg p-4 bg-transparent">
                            <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">
                              Has recibido una solicitud de servicio para la oferta:
                              <span className="block text-1xl text-green-500 dark:text-green-300">“Ofrezco servicio de plomería en el área metropolitana de San Salvador”</span>
                            </h2>
                            <div className="flex flex-row justify-center pl-6 pr-6 sm:pl-24 sm:pr-24 mt-4">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <div className="grid gap-3 w-full">
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Cliente:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Salario acordado:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Inicio de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Finalización de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Número de contacto:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                        <div className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 dark:bg-green-600 rounded flex flex-row justify-between items-center">
                                          <span>Estado de contrato:</span>
                                          <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded">HOLA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center pt-8">
                                <button className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-lg text-white font-bold shadow">
                                    <FontAwesomeIcon icon={faPlus} className="text-lg pr-3" />
                                    Crear Solicitud
                                </button>
                            </div>
                        </div>       
                    </div>
            </div>

          </main>  
    );
}

export default ServiciosUser;