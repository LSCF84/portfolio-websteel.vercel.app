import React from 'react';
// La importación de Link ha sido eliminada ya que Next.js no puede resolverla en este entorno.

// Este componente está diseñado para funcionar como la página 404 personalizada en Next.js.
// Para el App Router, debe ser renombrado a 'not-found.jsx' y colocado en la carpeta 'app/'.
// Si usas el Pages Router, debe ser '404.jsx' en la carpeta 'pages/'.

export default function NotFound() {
  // El diseño utiliza las clases de Tailwind CSS tal como se definieron en la versión HTML
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center p-4">
      
      {/* Contenedor principal de la tarjeta de error */}
      <div className="max-w-xl w-full text-center p-8 md:p-12 bg-white rounded-xl shadow-2xl border border-gray-300">

        {/* Código de Error Grande y Llamativo */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 mb-6 animate-pulse">
          404
        </h1>

        {/* Mensaje de Error Gracioso */}
        <p className="text-3xl md:text-4xl font-bold mb-4">
          ¡Houston, tenemos un... 404! 🚀
        </p>

        {/* Explicación Amigable */}
        <p className="text-gray-600 mb-8 text-lg">
          Parece que esta página se fue de vacaciones y no dejó nota. O quizás fue abducida por aliens. En cualquier caso, no está aquí.
        </p>

        {/* Botón de Llamada a la Acción (Volver al Inicio) */}
        {/* CORRECCIÓN: Revertimos al elemento <a> nativo, ya que la importación de 'next/link' falló. */}
        <a 
          href="/" // Usamos <a> para una navegación simple a la raíz.
          className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Icono de Casa (Home) */}
          <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Rescatarme (Ir a Inicio)
        </a>
        
        {/* Enlace de Soporte */}
        <p className="mt-8 text-sm text-gray-500">
          Si crees que los aliens son culpables, puedes <a href="mailto:l.sergio.camacho.fernandez@gmail.com" className="text-sky-600 hover:text-sky-700 underline font-semibold">reportar el error aquí</a>.
        </p>
      </div>

    </div>
  );
}
