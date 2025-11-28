'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Clave única para guardar el consentimiento en localStorage
const CONSENT_KEY = 'cookie_consent_websteel';

// Componente funcional en JavaScript (sin anotaciones de tipo)
const CookieConsentBanner = () => {
  // El estado será 'granted', 'denied' o null
  const [consent, setConsent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // 1. Cargar el estado del consentimiento al montar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedConsent = localStorage.getItem(CONSENT_KEY);
      setConsent(storedConsent);
      // Mostrar el banner solo si el consentimiento no ha sido dado previamente
      if (!storedConsent) {
        setIsVisible(true);
      }
    }
  }, []);

  // 2. Manejar la acción de Aceptar o Denegar
  const handleConsent = (status) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONSENT_KEY, status || 'denied'); // Guardar 'denied' si es null o no especificado
      setConsent(status);
      setIsVisible(false);

      if (status === 'granted') {
        console.log('Consentimiento de cookies ACEPTADO. Se cargan scripts de análisis.');
      } else {
        console.log('Consentimiento de cookies DENEGADO o no especificado.');
      }
    }
  };
  
  // Función placeholder para la configuración
  const handleConfigure = () => {
      // Por ahora, solo simula el guardado de configuración (equivalente a denegar)
      handleConsent('denied');
      // ¡IMPORTANTE! Reemplazamos alert() por console.error
      console.error("La funcionalidad de configuración avanzada aún no está implementada. Por defecto, se ha guardado su preferencia de privacidad (Denegada).");
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-sm shadow-2xl transition-all duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4">
        
        {/* Texto informativo */}
        <p className="text-sm text-gray-200 text-center md:text-left">
          Utilizamos cookies propias y de terceros para mejorar la navegación y analizar el tráfico. Al continuar, acepta su uso. Lea nuestra {' '}
          <Link 
            href="/politica-cookies" 
            className="text-indigo-400 hover:text-indigo-300 font-semibold underline transition-colors"
          >
            Política de Cookies.
          </Link>
        </p>

        {/* Botones de acción */}
        <div className="flex space-x-3 w-full md:w-auto justify-center">
          <button
            onClick={() => handleConsent('granted')}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg flex-shrink-0 w-1/2 md:w-auto"
          >
            Aceptar Todo
          </button>
          <button
            onClick={handleConfigure}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors shadow-lg flex-shrink-0 w-1/2 md:w-auto"
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
