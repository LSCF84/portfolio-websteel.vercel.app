'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Clave única para guardar el consentimiento en localStorage
const CONSENT_KEY = 'cookie_consent_websteel';

const CookieConsentBanner = () => {
  const [consent, setConsent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedConsent = localStorage.getItem(CONSENT_KEY);
      setConsent(storedConsent);
      if (!storedConsent) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleConsent = (status) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONSENT_KEY, status || 'denied');
      setConsent(status);
      setIsVisible(false);

      if (status === 'granted') {
        console.log('Consentimiento de cookies ACEPTADO. Se cargan scripts de análisis.');
      } else {
        console.log('Consentimiento de cookies DENEGADO o no especificado.');
      }
    }
  };
  
  const handleConfigure = () => {
      handleConsent('denied');
      console.error("La funcionalidad de configuración avanzada aún no está implementada. Por defecto, se ha guardado su preferencia de privacidad (Denegada).");
  }

  if (!isVisible) return null;

  return (
    // CAMBIOS DE ESTILO AQUÍ: Fondo más claro, texto oscuro
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-sm shadow-xl border-t border-gray-200 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4">
        
        {/* Texto informativo - Color ajustado */}
        <p className="text-sm text-gray-800 text-center md:text-left">
          Utilizamos cookies propias y de terceros para mejorar la navegación y analizar el tráfico. Al continuar, acepta su uso. Lea nuestra {' '}
          <Link 
            href="/politica-cookies" 
            className="text-indigo-600 hover:text-indigo-800 font-semibold underline transition-colors" // Enlace a Política de Cookies ajustado
          >
            Política de Cookies.
          </Link>
        </p>

        {/* Botones de acción (mantendremos los colores, ya que funcionan con los acentos de la web) */}
        <div className="flex space-x-3 w-full md:w-auto justify-center">
          <button
            onClick={() => handleConsent('granted')}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg flex-shrink-0 w-1/2 md:w-auto"
          >
            Aceptar Todo
          </button>
          <button
            onClick={handleConfigure}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors shadow-lg flex-shrink-0 w-1/2 md:w-auto" // Botón Configurar ajustado a gris claro
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
