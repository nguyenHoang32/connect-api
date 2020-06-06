const cacheName = 'v1';
const cacheAssets = [
    './',
    '../src'
];
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(cacheAssets)
        })
        
    )
});

self.addEventListener('active', function(){

});

self.addEventListener('fetch', function(e){
    const request = e.request;
    e.respondWith(
        caches.match(request).then((res) => {
            return res || fetch(request)
        })
    )
});