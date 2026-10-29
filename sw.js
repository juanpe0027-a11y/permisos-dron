// Sin caché: existe para que Android deje instalar la app y la ponga en el menú Compartir.
// La página se pide siempre al servidor (sin la caché del navegador) para ver la última versión.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request, { cache:'no-store' }).catch(() => fetch(e.request)));
});
