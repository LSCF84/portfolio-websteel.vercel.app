import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
    // Data for work experiences
    const experiences = [
        {
            title: "Técnico IT Nivel 3 → Nivel 4",
            company: "Microsyscom",
            period: "Nov. 2020 – Mar. 2025",
            description: "",
            // "description: "Optimización de Soporte Técnico: Liderazgo en la implementación y mantenimiento de un sistema de gestión de tickets avanzado, logrando optimizar significativamente la gestión de solicitudes de soporte técnico y mejorar los tiempos de respuesta. Modernización de Infraestructura de Red: Revisión y mejora integral de la infraestructura de red, incluyendo la evaluación, selección y migración exitosa a nuevas operadoras de fibra y la implementación de sistemas firewall robustos, fortaleciendo la conectividad y la seguridad perimetral. Expansión de Servicios IT: Ampliación y configuración estratégica de la plataforma de virtualización, lo que permitió la incorporación de nuevos servicios internos críticos y mejoró la eficiencia y capacidad de respuesta general de la infraestructura IT. Fortalecimiento de la Seguridad: Administración proactiva de identidades y gestión segura de credenciales, elevando la política de seguridad de la información de la empresa y minimizando riesgos. Garantía de Continuidad Operativa: Resolución experta de incidencias de Nivel 3 y 4 en entornos críticos, asegurando la continuidad operativa y minimizando el tiempo de inactividad de los sistemas esenciales para el negocio.",
            projects: [
                "Implementación de sistema de gestión de tickets",
                "Implementación de sistemas firewall",
                "Configuración de plataforma de virtualización",
                "Administración de identidades y credenciales",
                "Automatización de tareas repetitivas",
            ],
            technologies: ["Sistemas de gestión de tickets", "Firewall", "Virtualización", "Automatización"],
            image: "/company_logo/microsyscom.png",
        },
        // {
        //     title: "Analista en Prácticas",
        //     company: "KPMG",
        //     period: "Mar. 2023 - Ago. 2023",
        //     description:
        //         "Colaboración con el departamento de Estrategia (Technology Enablement) participando en proyectos de desarrollo y transformación digital para clientes corporativos. Esta experiencia me permitió adquirir una visión global del ciclo de vida de proyectos tecnológicos en entornos corporativos, decidiendo posteriormente orientar mi carrera hacia equipos más pequeños, donde pudiera tener mayor impacto directo en el desarrollo.",
        //     technologies: [
        //         "Quality Assurance",
        //         "Documentación Técnica",
        //         "Presentaciones Ejecutivas",
        //         "Consultoría Tecnológica",
        //     ],
        //     image: "/company_logo/kpmg.png",
        // },
        {
            title: "Técnico IT / Técnico de Campo (Técnico Electromecánico)",
            company: "Tokheim Koppens Ibérica",
            period: "Dic. 2019 – Mar. 2020",
            description: "Implementación de Sistemas de Suministro",
            projects: [
                "Instalación y puesta en marcha de surtidores de combustible",
                "Configuración de consolas de monitoreo de tanques (Veeder Root)",
                "Implementación de cableado estructurado",
                "Mantenimiento preventivo y correctivo de equipos",
                
            ],
            technologies: [
                "Sistemas Electromecánicos",
                "Consolas Veeder Root",
                "Cableado estructurado",
                "Mantenimiento preventivo y correctivo de equipos",
            ],
            image: "/company_logo/Tokeim.png",
        },
        {
            title: "Soporte Técnico Especializado",
            company: "Alertaphone",
            period: "Sep. 2019 - Dic. 2019",
            description: "Soporte Técnico Especializado",
            projects: [
                "Diagnóstico y reparación de hardware y software en dispositivos móviles y equipos informáticos",
                "Gestión de la cadena de suministro y control de inventario",
                "Instalación y personalización avanzada de sistemas operativos",
                "Manejo de incidencias y gestión de la cadena de suministro",
            ],
            technologies: [
                "Soporte Multiplataforma",
                "Logística",
                "Manejo de incidencias",
                // "Inteligencia Artificial",
                // "Ciencia de Datos",
                "Manejo de inventario",
            ],
            image: "/company_logo/alertaphone.png",
        },
        {
            title: "Soporte Técnico y Gestión de Servicio al Cliente IT",
            company: "PCccomponentes",
            period: "Ago. 2016 - Sep. 2019",
            description: "",
            projects: [
                "Soporte técnico y resolución de incidencias (Hardware/Software)",
                "Diagnóstico y reparación avanzada de equipos informáticos",
                "Control de stock y coordinación con fabricantes/proveedores",
                "Asesoramiento técnico y capacitación a clientes",
                "Optimización de procesos de atención y soporte",
            ],
            technologies: [
                "Diagnóstico Hardware/Software",
                "Gestión de Stock",
                "Servicio al Cliente IT",
                // "Inteligencia Artificial",
                // "Ciencia de Datos",
                "Manejo de incidencias",
            ],
            image: "/company_logo/PCccomponentes.png",
        },
        {
            title: "Tecnico electronico",
            company: "Indra",
            period: "Jul. 2016 – Ago. 2016",
            description: "",
            projects: [
                "Implementación de microsoldadura (SMD) y reballing",
                "Diagnóstico y mantenimiento de hardware crítico",
                "Operaciones en sala limpia (ISO Clase 7)",
                "Testeo y montaje de sistemas electrónicos de precisión",
                "Supervisión de procesos productivos",
            ],
            technologies: [
                "Microsoldadura (SMD)",
                "Reballing",
                "Clean Room (ISO Clase 7)",
                // "Inteligencia Artificial",
                // "Ciencia de Datos",
                "Control de Calidad (ISO)",
            ],
            image: "/company_logo/indra.png",
        },
        {
            title: "Técnico y Responsable de área y Servicio",
            company: "Bq readers",
            period: "Jun. 2011 - Mar. 2016",
            description: "Liderazgo en la Mejora Continua (ITIL/Service Desk)",
            projects: [
                "Implementación de mejoras continuas (ITIL/Service Desk)",
                "Implementación de mejoras continuas (ITIL/Service Desk)",
                "Implantación y monitorización de KPIs",
                "Optimización de la cadena de servicio y logística",
                "Elaboración de documentación de procesos internos",
                "Gestión de compras internas (procurement)",
                "Administración de Infraestructura Cloud (Azure/AWS)",
                "Resolución de incidencias N2/N3 (Android, Linux, Windows)",
                "Control de Calidad de Producto (QA)",
                "Soldadura SMD y soporte avanzado de hardware",
                "Selección, formación y evaluación de personal técnico",
                "Elaboración de informes técnicos para clientes",
            ],
            technologies: [
                "ITIL",
                "KPIs",
                "Logística",
                "Azure",
                "Amazon AWS",
                "VPN Gateway",
                "Balanceadores de carga",
                "Android",
                "Linux",
                "Windows",
                "Control de Calidad (QA)",
                "Soldadura SMD",
            ],
            image: "/company_logo/Bq_readers.png",
        },
        {
            title: "Responsable de IT",
            company: "Kfibergroup",
            period: "Oct. 2008 – Jul. 2011",
            description: "",
            projects: [
                "Gestión de CPD e infraestructura de red (LAN)",
                "Configuración de routers Cisco y switches Cisco Catalyst/Dell",
                "Administración de firewalls Fortigate y VPNs (Site-to-Site, SSL)",
                "Administración de virtualización Hyper-V",
                "Instalación y configuración de SO (Windows, Linux, Mac)",
                "Migración a soluciones VoIP",
                "Implementación y mantenimiento de sistemas ERP/CRM",
                "Soporte remoto avanzado (RealVNC,VPN, TeamViewer)",
                "Gestión de cuentas y onboarding de clientes/personal",
            ],
            technologies: [
                "CPD",
                "Networking",
                "Cisco Catalyst/Dell Switches",
                "Fortigate Firewall",
                "VPN",
                "Hyper-V",
                "Windows",
                "Linux",
                "Mac",
                "VoIP",
                "ERP/CRM",
                "RealVNC",
            ],
            image: "/company_logo/kfibergroup.png",
        },
        {
            title: "Técnico/Comercial",
            company: "Urende",
            period: "Mar. 2008 – Oct. 2008",
            description: "",
            projects: [
                "Diagnóstico y reparación de equipos informáticos (Hardware/Software)",
                "Resolución de problemas de conectividad de datos",
                "Mantenimiento de hardware y sistemas",
                "Gestión de la atención y satisfacción del cliente",
                "Estrategias de venta técnica de material informático",
            ],
            technologies: [
                "Diagnóstico Hardware/Software",
                "Troubleshooting de Conectividad",
                "IoVenta TécnicaT",
                // "Inteligencia Artificial",
                // "Ciencia de Datos",
            ],
            image: "/company_logo/urende.png",
        },
        {
            title: "Técnico/Comercial",
            company: "Pc Box",
            period: "Sep. 2007 – Feb. 2008",
            description: "",
            projects: [
                
                "Diagnóstico avanzado y troubleshooting de conectividad",
                "Soporte remoto (VPN, VNC, RDP) y multi-plataforma",
                "Gestión de cuentas de usuario (correo, VPN, VoIP)",
                "Mantenimiento y gestión del CPD",
                "Instalación, actualización y reparación de hardware/software",
                "Capacitación en TI y asistencia a usuarios no técnicos",
            ],
            technologies: [
                "Diagnóstico Hardware/Software",
                "Windows",
                "Linux",
                "Mac",
                "Onboarding",
                "Soporte al Cliente",
                "Troubleshooting",
                "Administración de Sistemas Operativos",
                "Instalación, modificación y reparación de hardware",
                "Gestión de cuentas y onboarding de servicios",
            ],
            image: "/company_logo/pcbox.png",
        },
        {
            title: "Técnico",
            company: "Kfibergroup",
            period: "Ene. 2006 – Sep. 2007",
            description: "",
            projects: [
                "Soporte técnico N1/N2 y resolución de incidentes",
                "Diagnóstico avanzado y troubleshooting de conectividad",
                "Soporte remoto (VPN, VNC, RDP) y multi-plataforma",
                "Gestión de cuentas de usuario (correo, VPN, VoIP)",
                "Mantenimiento y gestión del CPD",
                "Instalación, actualización y reparación de hardware/software",
                "Capacitación en TI y asistencia a usuarios no técnicos",
            ],
            technologies: [
                "Soporte N1/N2",
                "Troubleshooting",
                "VPN",
                "VNC",
                "RDP",
                "Windows",
                 "Linux",
                "Mac",
                "VoIP",
                "CPD",
                "Routers",
                
            ],
            image: "/company_logo/kfibergroup.png",
        },
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

    // Sample project data
    const projects = [
        {
            image: "/projects_logo/kf.png",
            domain: "https://web.archive.org/web/20110208232115/http://www.kfibergroup.com/",
        },
        {
            image: "/projects_logo/Inforusia.png",
            domain: "https://web.archive.org/web/20020630234856/http://www.inforusia.com/",
        },
        
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://taskmanager.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://travelblog.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://weatherapp.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://portfolio.goyocancio.es",
        // },
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

                    <p className="text-xs md:text-base mb-2 text-justify">
                    De forma paralela a mis trabajos, he desarrollado proyectos personales para aplicar mis conocimientos y probar nuevas tecnologías.

Los dos primeros que se presentan (Inforusia.com y kfibergroup.com) fueron realizados para la consultoría KF Ibergroup. Aunque ya no están en línea, se conservan y pueden consultarse en Internet Archive. Actualmente, sigo trabajando en proyectos para diversas asociaciones sin ánimo de lucro.
                    </p>
                    <p className="text-xs md:text-base mb-8  text-justify">
                        Aquí puedes ver algunos de ellos:
                    </p>

                    {/* Projects row */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {/* Restore the map */}
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null; // Keep the check and null return
                            }
                            return (
                                <div key={index} className="">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <footer className="text-center text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} L.Sergio Camacho. Todos los derechos
                reservados.
            </footer>
        </div>
    );
}
