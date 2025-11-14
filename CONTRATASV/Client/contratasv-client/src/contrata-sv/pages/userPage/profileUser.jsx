import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const ProfileUser = () => {
    return (
    <main>
      
        <div className="flex items-center justify-center ">
            <div className="flex flex-col rounded-lg shadow-lg pt-8 ">
                <div className="flex items-center justify-center pt-10 flex-col">
                    <img src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg" alt="PFP" className="rounded-full w-32"/>
                    <h1 className="text-gray-900 font-semibold text-xl mt-5">DUMMY</h1>
                    <h1 className="text-gray-500 text-sm">Las Arboledas, Lourdes</h1>
                    
                </div>
            <div className="flex justify-between p-4">
            <div className=" flex flex-col object-center">
                <h1 className=" uppercase text-gray-500">Información de contacto</h1>
                <h2 className="text-gray-900 font-semibold text-xl">Número de contacto: <h2 className="text-green-800"> 7689-4785</h2></h2>
                <h2 className="text-gray-900 font-semibold text-xl">Correo Electronico: <h2 className="text-green-800"> dummytest@test.com</h2></h2>
            </div>
            <button className="w-14 h-14 self-center rounded-full bg-green-800 hover:bg-green-500 text-white hover:text-black ">
                <h1>
                    <FontAwesomeIcon icon={faPen} className="cursor-pointer"/>
                </h1>
            </button>
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

export default ProfileUser;