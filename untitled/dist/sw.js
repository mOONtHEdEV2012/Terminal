const cacheName = 'terminal-cache-v1';
const assetsToCache = [
    'index.html',
    'styles.css',
    'script.js',
    'manifest.json',
    'icon-192.png',
    'icon-512.png'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(assetsToCache))
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});