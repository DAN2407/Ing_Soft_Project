import React from 'react';

const TalentP = () => {
    return (
      <main>
        <section>
          <div className="px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden mt-20">
            <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-6xl">
                <span className="block text-green-500  xl:inline">Encuentre Rápido</span>
                <br></br>
                <span className="block text-green-500 xl:inline">Trabaje Rápido</span>
              </h1>
              <p className="paragraph sm:block aos-init aos-animate">
              Olvida el pasado, encuentra a los indicados aquí y en este lugar.
              </p>
            </div>
            <div className=" sm:block col-span-12 lg:col-span-6">
              <div className="w-full">
                <img className="aos-init aos-animate " src="https://lobbyfix.com/wp-content/uploads/2021/09/facility-management-1024x799.jpg" alt="work" >
                </img>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

export default TalentP;