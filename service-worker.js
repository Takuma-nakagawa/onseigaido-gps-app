const cacheName = "gps-audio-cache-v1";
const filesToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./style.css",
  "./script.js",
  "./001_ずんだもん（ノーマル）_ここは３D造形先端….wav",
  // 必要な他のファイルをここにリストアップ
];

// インストール時にキャッシュする
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// キャッシュからデータを提供
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
