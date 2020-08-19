self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/testgame/',
       '/testgame/index.html',
       '/testgame/index.js',
       '/testgame/style.css',
       '/testgame/images/fox1.jpg',
       '/testgame/images/fox2.jpg',
       '/testgame/images/fox3.jpg',
       '/testgame/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
