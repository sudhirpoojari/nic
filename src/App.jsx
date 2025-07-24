import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>

 <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">NIC</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About US</a>
      <a className="mr-5 hover:text-gray-900">Contact Us</a>
      <a className="mr-5 hover:text-gray-900">Gallery</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">NIC Gallery</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Safer Internet Day DC | SP| CEO Speech</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/src/assets/image/ceo-farewall.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">ZP UDUPI</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">UDUPI Karnataka</h2>
          <p className="leading-relaxed text-base">ZP CEO Farewall Function attended by DIO NIC</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/src/assets/image/nicdelhistaff visit.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Resource Person</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">NIC Udupi</h2>
          <p className="leading-relaxed text-base">Resource person came to NIC to meet DIO</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/src/assets/image/gpele2.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">GP Election </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Udupi UDUPI</h2>
          <p className="leading-relaxed text-base">Election branch visit  Taluk center with NIC  for Reservation randamization for Grama Panchayath</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/src/assets/image/newceonicvisit.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">CEO Visit to NIC</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Udupi Karnataka</h2>
          <p className="leading-relaxed text-base">CEO Visit to NIC during nammashala project discussion</p>
        </div>
      </div>
    </div>
  </div>
</section>




       
    </>
  )
}

export default App
