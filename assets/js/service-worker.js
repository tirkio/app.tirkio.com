const cacheName = 'tirkio-cache-v1';
const resourcesToCache = [
  '/',
  '/wealth.html',
  '/provisions.html',
  '/assets.html',
  '/retirement.html',
  '/assets/css/style.css',
  '/assets/images/favicon-192x192.png',
  '/assets/images/favicon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
