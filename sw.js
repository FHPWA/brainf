const cacheVersion = "Brainf-2019.11.1";
const urlsToPrefetch = [
	"/PWA.Brainf/",
	"/PWA.Brainf/index.html",
	"/PWA.Brainf/scripts/brainf.js",
	"/PWA.Brainf/images/appicons/squircle-256.png",

	"/css/theme/auto.css",
	"/css/theme/black.css",
	"/css/theme/dark.css",
	"/css/theme/light.css",
	"/css/main.css",
	"/css/settings.css",
	"/scripts/navbar.js",
	"/scripts/script.js",
	"/scripts/settings.js",
	"/fonts/FiraSansNF.woff2",
];

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(cacheVersion).then(function (cache) {
			return cache.addAll(urlsToPrefetch);
		})
	);
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		caches.keys().then(function (keyList) {
			return Promise.all(keyList.map(function (key) {
				if (key !== cacheVersion) {
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
	event.respondWith(fromNetwork(event.request, 400).catch(function () {
		return fromCache(event.request);
	}));
});

function fromNetwork(request, timeout) {
	return new Promise(function (fulfill, reject) {
		var timeoutId = setTimeout(reject, timeout);
		fetch(request).then(function (response) {
			clearTimeout(timeoutId);
			fulfill(response);
		}, reject);
	});
}

function fromCache(request) {
	return caches.open(cacheVersion).then(function (cache) {
		return cache.match(request).then(function (matching) {
			return matching || Promise.reject('no-match');
		});
	});
}
