self.addEventListener('fetch', (event) => {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(null, { status: 503, statusText: 'Service Unavailable' });
      })
    );
  });
  