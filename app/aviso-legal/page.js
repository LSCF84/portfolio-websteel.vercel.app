// app/aviso-legal/page.js

import React from 'react';
// Asegúrate de importar los componentes o estilos que uses para el diseño principal
// Por ejemplo, si tienes un LayoutWrapper o un Header/Footer
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export default function AvisoLegalPage() {
    return (
        // Utiliza las mismas clases y estructura de contenedor que usas en tu página principal
        <div className="main-content-wrapper"> 
            
            {/* Si tienes un Header/Nav, inclúyelo aquí si no lo gestiona un layout global */}
            
            <main className="container py-5">
                <h1 className="text-center mb-5">Aviso Legal y Descargo de Responsabilidad</h1>

                <section id="objeto" className="mb-4">
                    <h2 className="section-title">1. Objeto del Sitio Web</h2>
                    <p>Este sitio web (`lscf84.github.io`) es un **portafolio personal** desarrollado por L.Sergio Camacho con el propósito exclusivo de exhibir proyectos de desarrollo web y demostrar experiencia técnica.</p>
                </section>

                <section id="garantias" className="mb-4">
    <h2 className="section-title">2. Exclusión de Garantías (Disclaimer)</h2>
    <p>El código y los proyectos mostrados en este portafolio y en el repositorio asociado son presentados en su estado actual (&quot;as is&quot;). Se informa que:</p>
    <ul>
        <li>**Carácter Demostrativo:** La mayoría de los proyectos son pruebas de concepto o versiones simplificadas. No se garantiza su rendimiento, seguridad o que estén libres de errores.</li>
        <li>**Responsabilidad del Uso:** El titular no se hace responsable del uso, ni de las consecuencias derivadas, que el visitante pueda darle al código fuente, los proyectos, o cualquier otra información técnica aquí expuesta.</li>
    </ul>
</section>
                
                {/* Añade secciones adicionales como: Propiedad Intelectual, Contacto, etc. */}

            </main>
            
            {/* Si tienes un Footer, inclúyelo aquí si no lo gestiona un layout global */}
        </div>
    );
}
