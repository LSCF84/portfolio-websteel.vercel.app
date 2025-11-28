import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
// Importar Link de next/link si se necesita para alguna navegación interna en el futuro
// import Link from 'next/link'; 

export default function Home() {
    // 1. DATA: EXPERIENCIA LABORAL
    const experiences = [
        {
            title: "Técnico IT Nivel 3 → Nivel 4",
            company: "Grupo Microsyscom",
            period: "Nov. 2020 – Mar. 2025",
            description: "",
            projects: [
                "Implementación de sistema de gestión de tickets",
                "Implementación de sistemas firewall",
                "Configuración de plataforma de virtualización",
                "Administración de identidades y credenciales",
                "Automatización de tareas repetitivas",
                "Gestión de CPD VMWARE",
                "Implementación de plataformas de soporte y asistencia remota para clientes corporativos",
            ],
            technologies: ["Gestión de Incidencias (Ticketing)", "Ciberseguridad y Seguridad Perimetral","CPD","Plataformas de Asistencia Remota", "Virtualización", "Automatización"],
            image: "/company_logo/Microsyscom_generico.png",
        },
        // ... (el resto de tus experiencias, se mantiene la estructura)
        {
            title: "Técnico instalador",
            company: "Productos Telefónicos",
            period: "Sep. 2005 – Ene. 2006",
            description: "",
            projects: [
                "Configuración y mantenimiento de routers Cisco y switches Cisco Catalyst",
                "Instalación de infraestructura de redes (Fibra Óptica FTTH)",
                "Instalación de tecnologías de acceso (Cobre, ADSL, XDSL, VDSL)",
                "Mantenimiento de líneas de voz y datos (RTB, RDSI)",
            ],
            technologies: [
                "Cisco Routers",
                "Cisco Catalyst Switches",
                "Fibra Óptica (FTTH)",
                "ADSL",
                "XDSL",
                "VDSL",
                "RTB",
                "RDSI",
            ],
            image: "/company_logo/movistar.png",
        },
    ];

    // 2. DATA: PROYECTOS ANTIGUOS
    const projects = [
        {
            image: "/projects_logo/kf.png",
            domain: "https://web.archive.org/web/20110208232115/http://www.kfibergroup.com/",
            name: "KFibergroup.com",
        },
        {
            image: "/projects_logo/Inforusia.png",
            domain: "https://web.archive.org/web/20020630234856/http://www.inforusia.com/",
            name: "Inforusia.com",
        },
        // Aquí puedes descomentar tus otros proyectos si los necesitas:
        // {
        //    image: "/projects_logo/blockheadapp.png",
        //    domain: "https://taskmanager.goyocancio.es",
        //    name: "Task Manager",
        // },
        // ...
    ];

    // 3. DATA: PORTAFOLIOS ACTUALES 🟢
    const currentPortfolios = [
        {
            image: "/projects_logo/jrdev-lscf.vercel.app.png", 
            domain: "https://jrdev-lscf.vercel.app/",
            name: "Portafolio Desarrollador Junior",
        },
        {
            image: "/projects_logo/portfolio-main-lscf.vercel.app.png", 
            domain: "https://portfolio-main-lscf.vercel.app/",
            name: "Portafolio Principal (Main)",
        },
       {
            image: "/projects_logo/lscf-central.vercel.app.png", 
            domain: "https://lscf-coredigital.vercel.app/",
            name: "LSCF Core Digital",
        },
    ];

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <Header />

            {/* Work Experience Section*/}
            <section id="experience">
                <div className="container mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Experiencia Laboral
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Proyectos Personales
                        </h2>
                    </div>

                    {/* Descripción principal */}
                    <p className="text-xs md:text-base mb-2 text-justify">
                    De forma paralela a mis trabajos, he desarrollado proyectos personales para aplicar mis conocimientos y probar nuevas tecnologías.

Los dos primeros que se presentan (Inforusia.com y kfibergroup.com) fueron realizados para la consultoría KF Ibergroup. Aunque ya no están en línea, se conservan y pueden consultarse en Internet Archive. Actualmente, sigo trabajando en proyectos para una asociación sin ánimo de lucro.
                    </p>
                    
                    {/* -------------------------------------------------- */}
                    {/* SECCIÓN 1: PROYECTOS ANTIGUOS (Mapeo de 'projects') */}
                    {/* -------------------------------------------------- */}

                    <p className="text-xs md:text-base mb-2 mt-4 text-justify">
                        Aquí puedes ver proyectos antiguos:
                    </p>

                    {/* Projects row (Antiguos) */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center mb-10">
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null;
                            }
                            return (
                                <div key={index} className="">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* -------------------------------------------------- */}
                    {/* 🟢 SECCIÓN 2: PORTAFOLIOS ACTUALES (Mapeo de 'currentPortfolios') 🟢 */}
                    {/* -------------------------------------------------- */}

                    <p className="text-xs md:text-base mb-8 text-justify">
                        Y aquí mi Portafolio de Desarrollador Junior actual:
                    </p>

                    {/* Projects row (Actuales) */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {currentPortfolios.map((project, index) => {
                             if (!project || !project.image || !project.domain) {
                                return null;
                            }
                            return (
                                <div key={`current-${index}`} className="">
                                    <ProjectItem project={project} /> 
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <footer className="text-center text-xs md:text-sm text-gray-500">
                {/* Contenido existente del copyright */}
                © {new Date().getFullYear()} L.Sergio Camacho. Todos los derechos
                reservados.

                {/* AÑADIR EL SEPARADOR Y EL ENLACE DEL DISCLAIMER */}
                <span className="mx-2">|</span> {/* Separador visual */}

                <a 
                    href="/aviso-legal" // Ruta de la página creada en app/aviso-legal/page.js
                    className="hover:underline" // Estilo de Tailwind para subrayar al pasar el ratón
                >
                    Aviso Legal
                </a>
            </footer>
        </div>
    );
}
