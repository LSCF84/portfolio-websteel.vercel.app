// app/aviso-legal/page.js

import React from 'react';
// Si tienes componentes reutilizables como Header/Footer, impórtalos aquí si es necesario

export default function AvisoLegalPage() {
    return (
        // Utilizamos un contenedor exterior para centrar el contenido en la vista
        <div className="flex justify-center py-10 px-4 min-h-screen">
            
            {/* Contenedor principal con estilo de tarjeta: 
              bg-white: Fondo blanco
              shadow-lg: Sombra para destacar la tarjeta
              rounded-lg: Esquinas redondeadas
              p-8: Relleno interior grande
              max-w-4xl: Limita el ancho para mejorar la lectura (ajusta este valor si es necesario)
              w-full: Asegura que ocupe todo el ancho disponible hasta el límite max-w
            */}
            <main className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
                
                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-900">
                    Aviso Legal y Descargo de Responsabilidad
                </h1>

                <section id="objeto" className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-700 border-b pb-2">1. Objeto del Sitio Web</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Este sitio web (<a href="https://lscf84.github.io" className="text-blue-600 hover:underline">lscf84.github.io</a>) es un <strong className="font-bold">portafolio personal</strong> desarrollado por L.Sergio Camacho con el propósito exclusivo de exhibir proyectos de desarrollo web y demostrar experiencia técnica.
                    </p>
                </section>

                <section id="garantias" className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-700 border-b pb-2">2. Exclusión de Garantías (Disclaimer)</h2>
                    <p className="text-gray-600 leading-relaxed">
                        El código y los proyectos mostrados en este portafolio y en el repositorio asociado son presentados en su estado actual (&quot;as is&quot;). Se informa que:
                    </p>
                    <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
                        <li>
                            <strong className="font-semibold">Carácter Demostrativo:</strong> La mayoría de los proyectos son pruebas de concepto o versiones simplificadas. No se garantiza su rendimiento, seguridad o que estén libres de errores.
                        </li>
                        <li>
                            <strong className="font-semibold">Responsabilidad del Uso:</strong> El titular no se hace responsable del uso, ni de las consecuencias derivadas, que el visitante pueda darle al código fuente, los proyectos, o cualquier otra información técnica aquí expuesta.
                        </li>
                    </ul>
                </section>
                
                <section id="contacto" className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-700 border-b pb-2">3. Contacto</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Para cualquier pregunta o comentario relacionado con este aviso legal, por favor, utilice el formulario de contacto o los datos proporcionados en la página principal del portafolio.
                    </p>
                </section>

            </main>
        </div>
    );
}
