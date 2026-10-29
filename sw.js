// Sin caché: solo existe para que Android deje instalar la app y la ponga en el menú Compartir.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
