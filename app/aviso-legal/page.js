import React from 'react';

export default function AvisoLegalPage() {
    return (
        // Utilizamos un contenedor exterior para centrar el contenido en la vista
        <div className="flex justify-center py-10 px-4 min-h-screen">
            
            {/* Contenedor principal con estilo de tarjeta: */}
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
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-700 border-b pb-2">2. Exclusión de Garantías</h2>
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
                
                <section id="propiedad-y-referencias" className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-700 border-b pb-2">3. Propiedad y Referencias (Exclusión de Garantías)</h2>
                    
                    <h3 className="text-lg font-bold mt-4 mb-2 text-gray-800">Propiedad Intelectual y Referencia Profesional</h3>
                    <p className="text-gray-600 leading-relaxed">
                        &quot;Los nombres de empresas, marcas comerciales y logotipos (incluyendo aquellos que aparecen en las secciones de Experiencia y Formación) se utilizan únicamente con fines referenciales e informativos para documentar la trayectoria profesional. Dichos elementos son propiedad intelectual de sus respectivos dueños, y su inclusión en este portfolio no implica ningún tipo de afiliación, patrocinio o respaldo oficial por parte de estas entidades.&quot;
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-2">
                        &quot;Los elementos gráficos genéricos que acompañan a las entradas de experiencia son elegidos por el autor de este portfolio para representar el área funcional del puesto.&quot;
                    </p>

                    <h3 className="text-lg font-bold mt-4 mb-2 text-gray-800">Declaración de Propiedad de Contenido</h3>
                    <p className="text-gray-600 leading-relaxed">
                        &quot;Todos los proyectos de software y herramientas listados en la sección 'Proyectos' y enlazados a repositorios de código (como GitHub) son creaciones personales, independientes y propiedad exclusiva de Luis Sergio Camacho Fernández.&quot;
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-2">
                        &quot;Este contenido fue desarrollado fuera del ámbito laboral y no utiliza, revela, ni está basado en código, metodologías o información confidencial obtenida de empleadores anteriores o actuales.&quot;
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-2 italic">
                        &quot;Este portfolio se proporciona 'tal cual', sin garantías expresas o implícitas de ningún tipo.&quot;
                    </p>
                </section>
                
                <section id="contacto" className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-700 border-b pb-2">4. Contacto</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Para cualquier pregunta o comentario relacionado con este aviso legal, por favor, utilice el formulario de contacto o los datos proporcionados en la página principal del portafolio.
                    </p>
                </section>

            </main>
        </div>
    );
}
