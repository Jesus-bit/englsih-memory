// components/Sidebar.js
"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faGraduationCap, faBook, faChartBar, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Icono de hamburguesa para abrir/cerrar el menú en dispositivos móviles */}
      <div className="fixed top-4 left-4 md:hidden z-50">
        <button onClick={toggleMenu} className="text-blue-600">
          <FontAwesomeIcon icon={faGraduationCap} />
        </button>
      </div>

      {/* Barra lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-18 bg-[#5A77DF] p-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-40`}
      >
        <div className="text-white font-bold text-xl mb-4"></div>
        <div className="text-white space-y-4">
          <div className="group relative">
            <div className='flex rounded-lg items-center justify-center p-2 hover:bg-[#4A60C0]'>
              <FontAwesomeIcon icon={faCreditCard} className="block w-full text-left cursor-pointer p-2 " />
            </div>
            <div className="absolute left-full top-0 bg-[#5A77DF] p-4 hidden group-hover:block">
              <a href="/tarjetas/todas" className="block hover:underline">Todas las Tarjetas</a>
              <a href="/tarjetas/nueva" className="block hover:underline">Crear Nueva Tarjeta</a>
              <a href="/tarjetas/categorias" className="block hover:underline">Categorías</a>
            </div>
          </div>
          <div className="group relative">
            <div className='flex rounded-lg items-center justify-center p-2 hover:bg-[#4A60C0]'>
              <FontAwesomeIcon icon={faGraduationCap} className="block w-full text-left cursor-pointer p-2" />
            </div>
            <div className="absolute left-full top-0 bg-[#5A77DF] p-4 hidden group-hover:block">
              <a href="/revision/diaria" className="block hover:underline">Revisión Diaria</a>
              <a href="/revision/quizzes" className="block hover:underline">Quizzes</a>
              <a href="/revision/juegos" className="block hover:underline">Juegos</a>
            </div>
          </div>
          <div className="group relative">
            <div className='flex rounded-lg items-center justify-center p-2 hover:bg-[#4A60C0]'>
              <FontAwesomeIcon icon={faBook} className="block w-full text-left cursor-pointer p-2" />
            </div>
            <div className="absolute left-full top-0 bg-[#5A77DF] p-4 hidden group-hover:block">
              <a href="/recursos/articulos" className="block hover:underline">Artículos</a>
              <a href="/recursos/videos" className="block hover:underline">Videos</a>
              <a href="/recursos/ejercicios" className="block hover:underline">Ejercicios de Pronunciación</a>
            </div>
          </div>
          <div className="group relative">
            <div className='flex rounded-lg items-center justify-center p-2 hover:bg-[#4A60C0]'>
              <FontAwesomeIcon icon={faChartBar} className="block w-full text-left cursor-pointer p-2" />
            </div>
            <div className="absolute left-full top-0 bg-[#5A77DF] p-4 hidden group-hover:block">
              <a href="/estadisticas/progreso" className="block hover:underline">Mi Progreso</a>
              <a href="/estadisticas/desafios" className="block hover:underline">Desafíos</a>
            </div>
          </div>
          <div className="group relative">
            <div className='flex rounded-lg items-center justify-center p-2 hover:bg-[#4A60C0]'>
              <FontAwesomeIcon icon={faUser} className="block w-full text-left cursor-pointer p-2" />
            </div>
            <div className="absolute left-full top-0 bg-[#5A77DF] p-4 hidden group-hover:block">
              <a href="/configuracion/perfil" className="block hover:underline">Mi Perfil</a>
              <a href="/configuracion/preferencias" className="block hover:underline">Preferencias de Estudio</a>
              <a href="/configuracion/soporte" className="block hover:underline">Soporte</a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para dispositivos móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
