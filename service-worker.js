self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('.m3u8') || url.pathname.endsWith('.ts')) {
    // ভিডিও ফাইল হলে কিছু না করো (bypass)
    return;
  }
  // অন্যসব ফাইলের জন্য fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
