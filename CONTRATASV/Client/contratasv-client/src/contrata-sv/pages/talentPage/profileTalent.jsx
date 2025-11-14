import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const ProfileTalent = () => {
    return (
    <main>
      <section className="flex flex-col items-center justify-center snap-y pt-8">
        <div className="flex flex-col rounded-lg shadow-lg pt-4 ">

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
        <div className="flex flex-col rounded-lg shadow-lg pt-8 sm:w-5/12 w-6/12">
          <div className="flex items-center justify-center pt-5 flex-col">
            <h1 className="text-gray-900 font-semibold text-xl mt-5">Acerca de mi</h1>
            
          </div>
          <div className="flex justify-between p-4 w-auto h-auto">
            <div className=" flex flex-col object-center">
                <h1 className=" uppercase text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nulla quis dui rutrum porta. Aliquam erat volutpat. Nulla eu dignissim leo, non eleifend justo. Vestibulum arcu metus, mollis bibendum blandit id, laoreet ac ipsum. Aenean interdum lacinia molestie. Fusce sollicitudin congue varius. In in nunc augue. Nulla facilisi. Nullam efficitur lobortis ipsum. Etiam tempor vel magna vitae varius. Sed faucibus arcu augue, nec molestie sapien fringilla id.</h1>
                
            </div>
          </div>
        </div>
      </section>
    </main>
    );
}   

export default ProfileTalent;