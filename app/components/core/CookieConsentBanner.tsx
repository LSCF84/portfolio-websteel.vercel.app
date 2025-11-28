// ... otras importaciones
import CookieConsentBanner from './components/core/CookieConsentBanner'; // Asegúrate que la ruta sea correcta

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Tu contenido principal de la aplicación */}
        {children}
        
        {/* Aquí es donde se añade el banner de cookies */}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
