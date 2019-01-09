self.addEventListener('install', function (event) {
    console.log('installed', event);

    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log('files are added');
                cache
                    .addAll(cacheFiles)
                    .then(function () {
                        return self.skipWaiting();
                    });
            })
    )
});


self.addEventListener('activate', function (event) {
    console.log('activated', event);

    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return Promise.all(cacheNames.map((cacheKey) => {
                    if (cacheKey !== CACHE_NAME) {
                        console.log('deleting cache', cacheKey);
                        return caches.delete(cacheKey);
                    }
                    return Promise.resolve();
                }))
            })
    );

    return self.clients.claim();
});


self.addEventListener('fetch', function (event) {
    console.log('fetched', event);

    event.respondWith(
        caches
            .match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                const requestClone = event.request.clone();

                return fetch(requestClone)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        const responseClone = response.clone();

                        return caches
                            .open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseClone);
                                return response;
                            });
                    })
            })
    )
});
