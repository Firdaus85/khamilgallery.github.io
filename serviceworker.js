const cacheName='v1';
const cacheAssets=[
    'index.html',
    'style.css',
    '/js/main.js',
    'browserconfig.xml',
    'favicon.ico',
    'site.webmanifest'

];


//INSTALL
self.addEventListener('install', e=>{
    console.log('Service Worker: installed');

    e.waitUntil(
        caches
        .open(cacheName)
        .then(Cache=>{
            console.log('Service Worker:Caching files');
            Cache.addAll(cacheAssets);
        })
        .then(()=>self.skipWaiting())
    );

});

//ACTIVATE
self.addEventListener('activate', e=>{
    console.log('Service Worker: Activated');

});

//FETCH EVENT
self.addEventListener('fetch', e=>{
    console.log('service Worker: Fetching');
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
