self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("hava-app").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
      ]);
    })
  );
});
