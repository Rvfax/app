const CACHE_NAME = 'rvfax-app-v2.1';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'gosc.html',
  'admin.html',
  'Rfit.html',
  'favico.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
