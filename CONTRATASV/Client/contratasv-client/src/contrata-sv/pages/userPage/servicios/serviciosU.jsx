import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FiltersService from './filters.jsx';

const ServiciosUser = () => {
    return (
          <main className="pt-10 overflow-scroll snap-y">
              <div className="grid ">
                  <h1 className="text-2xl mt-20 font-bold text-center">¿Que Deseas buscar?</h1>
                  <input className="bg-gray-300 focus:ring-1 focus:ring-green-600 s p-4 mx-auto w-9/12" type="text" placeholder="Buscar"/>
              </div>
              <FiltersService/>
              <div className="bg-white rounded-lg shadow-lg p-8 m-4 overflow-y-auto ">
                    <div className="flex flex-col items-center ml-auto mr-auto  ">
                        <div className="flex flex-col rounded-lg shadow-lg p-4">
                            <h2 className="text-2xl text-slate-800 font-bold">Has recibido una solicitud de servicio para la oferta: <h3 className="text-1xl text-green-500">“Ofrezco servicio de plomería en el área metropolitana de San Salvador”</h3></h2>
                            <div className="flex flex-row justify-center pl-24 pr-24">
                                <div className="flex flex-col items-start justify-start">
                                    <div>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Cliente: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Salario acordado: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Inicio de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Finalizacion de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Numero de contacto: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Estado de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex justify-end items-center pt-8">
                                <button className="py-1 px-2 rounded bg-green-700 hover:bg-green-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faPlus} className="text-1xl pr-4 cursor-pointer"/>
                                    Crear Solicitud
                                </button>
                            </div>
                        </div>       
                    </div>
                    <div className="flex flex-col items-center ml-auto mr-auto  ">
                        <div className="flex flex-col rounded-lg shadow-lg p-4">
                            <h2 className="text-2xl text-slate-800 font-bold">Has recibido una solicitud de servicio para la oferta: <h3 className="text-1xl text-green-500">“Ofrezco servicio de plomería en el área metropolitana de San Salvador”</h3></h2>
                            <div className="flex flex-row justify-center pl-24 pr-24">
                                <div className="flex flex-col items-start justify-start">
                                    <div>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Cliente: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Salario acordado: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Inicio de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Finalizacion de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Numero de contacto: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Estado de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex justify-end items-center pt-8">
                                <button className="py-1 px-2 rounded bg-green-700 hover:bg-green-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faPlus} className="text-1xl pr-4 cursor-pointer"/>
                                    Crear Solicitud
                                </button>
                            </div>
                        </div>       
                    </div>
                    <div className="flex flex-col items-center ml-auto mr-auto  ">
                        <div className="flex flex-col rounded-lg shadow-lg p-4">
                            <h2 className="text-2xl text-slate-800 font-bold">Has recibido una solicitud de servicio para la oferta: <h3 className="text-1xl text-green-500">“Ofrezco servicio de plomería en el área metropolitana de San Salvador”</h3></h2>
                            <div className="flex flex-row justify-center pl-24 pr-24">
                                <div className="flex flex-col items-start justify-start">
                                    <div>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Cliente: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Salario acordado: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Inicio de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Finalizacion de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Numero de contacto: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Estado de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex justify-end items-center pt-8">
                                <button className="py-1 px-2 rounded bg-green-700 hover:bg-green-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faPlus} className="text-1xl pr-4 cursor-pointer"/>
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