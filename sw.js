const CACHE_NAME = 'ma-ford-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './sw.js'
];

// Install and Cache Files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve Files from Cache when Offline or Cold-Starting
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
