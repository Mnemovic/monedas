const cache_name = "resume-cache"

const pre_cached = [".", "estilos/style.css","imagenes/"]

self.addEventListener("install", event => {
    async function preCacheResources(){
        //eliminar cache previo
        if ('caches' in window) {
            caches.keys().then(function(cacheNames) {
              cacheNames.forEach(function(cacheName) {
                if (cacheName.startsWith(cache_name)) {
                  caches.delete(cacheName);
                }
              });
            });
          }          
        //crear cache
        const cache = await caches.open(cache_name);
        cache.addAll(pre_cached);
    }
    event.waitUntil(preCacheResources());
});

self.addEventListener("fetch", event =>  {
    async function returnCachedResource(){
        const cache = await caches.open(cache_name);
        const cachedResponse = await cache.match(event.request.url);

        if (cachedResponse){
            return cachedResponse;
        }else{
            const fetchResponse = await fetch(event.request.url);
            cache.put(event.request.url, fetchResponse.clone());
            return fetchResponse
        }
    }
    event.respondWith(returnCachedResource());
});