import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
// IMPORTAR EL COMPONENTE DEL BANNER
import CookieConsentBanner from './components/core/CookieConsentBanner'; 

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Portfolio de L.Sergio Camacho | Desarrollador de Software",
    description:
        "Portfolio profesional de L.Sergio Camacho, Tecnico IT y desarrollador de software con experiencia en desarrollo web y aplicaciones Python.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#fafafc] via-[#e2e2e2] to-[#cbd5e1]`}
            >
                {children}
                
                {/* AÑADIR EL BANNER DE COOKIES AL FINAL DEL BODY */}
                <CookieConsentBanner />
            </body>
        </html>
    );
}
