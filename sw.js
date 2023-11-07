const CACHE_NAME = 'moneda';

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
      '/imagenes/',
      '/estilos/style.css'
    ]);
  })());
});
