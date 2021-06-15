// const isLocalhost = Boolean(
//     window.location.hostname === 'localhost' ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === '[::1]' ||
//     // 127.0.0.0/8 are considered localhost for IPv4.
//     window.location.hostname.match(
//         /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );

// install service worker
let CACHE_NAME = 'site-static'
let assets = [
    '/',
    '/budget-app/',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/vendors~main.chunk.js',
    '/favicon.ico',
    '/logo192.png'
]

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // Open a cache and cache our files
                console.log('caching shell assets')
                return cache.addAll(assets)
            })
    )
})


// activate service worker
this.addEventListener('activate', event => {
    console.log('Service worker has been Activated')
})


// fetch event
this.addEventListener('fetch', (event) => {
    console.log(event.request.url)
    event.respondWith(
        caches.match(event.request).then((response) => {
            console.log(response)
            return response || fetch(event.request)
        })
    );
});
