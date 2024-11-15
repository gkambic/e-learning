import { withNextVideo } from 'next-video/process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración adicional de Next.js
  reactStrictMode: true, // Mejora la detección de errores
  images: {
    domains: ['example.com'], // Si necesitas cargar imágenes de dominios externos
  },
  webpack: (config, { isServer }) => {
    if (isServer && process.env.NODE_ENV === 'development') {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Evita problemas de certificado en desarrollo
    }
    return config;
  },
};

export default withNextVideo(nextConfig);
