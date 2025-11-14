import React from 'react';
import { Link } from 'react-router-dom';

const ContracsHistorial = () => {
    return (
            <main>
              <div className="pt-8">
                <div className="flex flex-col justify-center items-center h-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 m-4">
                        <div className="flex justify-between items-center">
                            <Link to="/talentPage/actividades/contratos/activas" className="py-2 px-4 rounded bg-white hover:bg-gray-500 text-black font-bold">
                                Activas
                            </Link>
                            <Link to="/talentPage/actividades/contratos/historial" className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-white font-bold">
                                Historial
                            </Link>
                            
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 m-4 overflow-y-auto">
                    <div className="flex flex-col items-center ml-40 mr-40  ">
                            <div className="flex flex-col rounded-lg shadow-lg p-8 m-4">
                                <h1 className="text-2xl font-bold">Titulo de la oferta</h1>
                                <div className="flex flex-row justify-start pl-24 pr-24">
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
                                    <h3 className="py-1 px-2 rounded text-red-700 text-1xl font-bold">
                                    
                                        Cancelado
                                    </h3>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
              </div>  
              <footer className=" bg-gray-600 text-white fixed inset-x-0 bottom-0 p-2 text-xs flex justify-between">
                        <div>
                            <p>© Copyright 2022 CONTRATASV LLC. All rights reserved</p>
                        </div>
                        <div className=" space-x-1">
    
                        </div>
              </footer>
    
            </main>
    );
}

export default ContracsHistorial;