'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "463271d45e7adcf5bf0193a18a639699",
"index.html": "25a79831f3eacb096c52feea323bf1d4",
"/": "25a79831f3eacb096c52feea323bf1d4",
"logosplash.png": "1a6a83d01338c85562c00c084550ba97",
"main.dart.js": "e3bca223610d3072b4b00a6b7f472a98",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"icons/Icon-192.png": "df131d4b28f990008bd2dfb81027d39f",
"icons/Icon-maskable-192.png": "df131d4b28f990008bd2dfb81027d39f",
"icons/Icon-maskable-512.png": "a1ba0fb9c1f6effd5283b5dc74f3a4c7",
"icons/Icon-512.png": "a1ba0fb9c1f6effd5283b5dc74f3a4c7",
"manifest.json": "5e7315eacda3bc4d107d65781307fd96",
"assets/AssetManifest.json": "93bca9acd94842cbceb734296e173e1f",
"assets/NOTICES": "3ea4e63bd8fe88439920652f03402038",
"assets/FontManifest.json": "5751dda4b506e2f43053504450689552",
"assets/AssetManifest.bin.json": "da1f4911d3ef77193cfda7e05f691333",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "90d90951216f7a91192e7d599678d1f7",
"assets/fonts/MaterialIcons-Regular.otf": "d395822894d11e1de40a2228c2ac3d6d",
"assets/assets/image/hero-bg.png": "26142aaf9a4a06afeda3ef31b41ac2c0",
"assets/assets/image/certificate.pdf": "4233442031451c18686994e234402907",
"assets/assets/image/logosplash.png": "1a6a83d01338c85562c00c084550ba97",
"assets/assets/image/english_flag.png": "f646ee2fb7231f6470e2677756ed2298",
"assets/assets/image/cambodia_flag.png": "15bec9f455e7b48fde646de02e2dfcc6",
"assets/assets/image/undraw_Page_not_found_re_e9o6.png": "c76c8dd46f67128b462344709ae462ed",
"assets/assets/image/image.jpeg": "7f22e646889498bc7da53501ecf63a38",
"assets/assets/image/Ministry_Invoice_FWP01340419-1709641400.pdf": "7482ba0c9df4d999a956bb0aeeab1299",
"assets/assets/image/imageAndPDF.png": "27dab9bd7239fee14269be003096faaa",
"assets/assets/image/LogoMLVT.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"assets/assets/icons/data-processing.png": "7fa3fd1765e8ac9a8561703acfb8b943",
"assets/assets/icons/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/icons/employment.png": "ff772e8393e90a60c897e054a091176b",
"assets/assets/icons/teamwork.png": "1063efbb94435bd25e57943169d2c9aa",
"assets/assets/icons/request.png": "4a1f236b2acc2df2efb1c24fe520bb2b",
"assets/assets/icons/dashboards.png": "6186e931fda6bbeec07d881d6f96328f",
"assets/assets/icons/group-users.png": "8caf3497d8121670ce9e46f19962f292",
"assets/assets/icons/faq.png": "7bfba3bb93bc634fd1b8e198d2b1972b",
"assets/assets/icons/browser.png": "b10ac2b74b1f8052198af5a50d985529",
"assets/assets/icons/Animation%2520-%25201720670629863.gif": "36510235d696c2fcbee04f60e6d4f6e8",
"assets/assets/icons/contract.png": "4b82917048026a3f4ddd4b38a4a5926b",
"assets/assets/doc/prokas_wp.jpg": "c86e8300e203791a355b6b8f0aa1b683",
"assets/assets/doc/prokas_04_2022.jpg": "9fb21ce74d933322ac7a9dc456292f5e",
"assets/assets/doc/prokas_new.jpg": "ceda29495323f69cb855e901ecdecc72",
"assets/assets/doc/prokas_09_2023_new.jpeg": "6c704e980d98fa79b99c02c2e807b410",
"assets/assets/fonts/Battambang%2520Bold.ttf": "d181e97d6231f4cb6cacbfcc84c7dc3e",
"assets/assets/fonts/SourceSansPro-Bold.otf": "1a2a157bfd94b250884c09f1bd57a0bb",
"assets/assets/fonts/SourceSansPro-Regular.otf": "5e1d162e634a102d7da8db597825a764",
"assets/assets/fonts/KhmerOSBattambang-Regular.ttf": "a680c425b92d3705c1b96c424c4b7208",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
