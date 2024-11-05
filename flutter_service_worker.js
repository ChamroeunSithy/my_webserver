'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e9961ba543e699f341f21abbe03017f",
"version.json": "463271d45e7adcf5bf0193a18a639699",
"index.html": "5d4f0d663f266e712a163bea0cb3921a",
"/": "5d4f0d663f266e712a163bea0cb3921a",
"logosplash.png": "1a6a83d01338c85562c00c084550ba97",
"main.dart.js": "2bb24188c63a9475fbdb5ea65c08228e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"icons/Icon-192.png": "ab3aa79979c5a8f2bd85e20c5f25d9fb",
"icons/Icon-maskable-192.png": "ab3aa79979c5a8f2bd85e20c5f25d9fb",
"icons/Icon-maskable-512.png": "57d47017bc0af2f0e2e735614510f924",
"icons/Icon-512.png": "57d47017bc0af2f0e2e735614510f924",
"manifest.json": "5e7315eacda3bc4d107d65781307fd96",
"assets/AssetManifest.json": "d7b3e0dfd3077642fd308be37cd5c856",
"assets/NOTICES": "84b0f3594982b7e1f82515e58fb7ae78",
"assets/FontManifest.json": "3b1c2e7b2bde77477ad7ba9cd5be43af",
"assets/AssetManifest.bin.json": "5f4207b2a0264664147857b6b5b29d71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0d911a4cedb32ecf8046f7c89ec5e83b",
"assets/fonts/MaterialIcons-Regular.otf": "259d7e7c1a7ccd12705944f41f771065",
"assets/assets/image/Image-Only.png": "c66adaf85cfe3a11573403ec2a652deb",
"assets/assets/image/hero-bg.png": "26142aaf9a4a06afeda3ef31b41ac2c0",
"assets/assets/image/certificate.pdf": "4233442031451c18686994e234402907",
"assets/assets/image/logosplash.png": "1a6a83d01338c85562c00c084550ba97",
"assets/assets/image/english_flag.png": "f646ee2fb7231f6470e2677756ed2298",
"assets/assets/image/cambodia_flag.png": "15bec9f455e7b48fde646de02e2dfcc6",
"assets/assets/image/hero-bg-white.png": "1c167f3fe4c9c55fa0c929744627057c",
"assets/assets/image/undraw_Page_not_found_re_e9o6.png": "c76c8dd46f67128b462344709ae462ed",
"assets/assets/image/image.jpeg": "7f22e646889498bc7da53501ecf63a38",
"assets/assets/image/hero-bg-stroke.png": "1ce0f1794deb6378f4d19cf3f15fd735",
"assets/assets/image/Ministry_Invoice_FWP01340419-1709641400.pdf": "7482ba0c9df4d999a956bb0aeeab1299",
"assets/assets/image/imageAndPDF.png": "27dab9bd7239fee14269be003096faaa",
"assets/assets/image/LogoMLVT.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"assets/assets/image/LogoMLVTBlur.png": "e121def9ae4b7b2f64f11f2c2fea8401",
"assets/assets/icons/email.png": "49b9a54d1a66305ee959325dc2ebc7c6",
"assets/assets/icons/editing.png": "1d82dc8bb27f434e3b82414f6cd0eaa1",
"assets/assets/icons/self_renew.png": "984a1e1e9543313d71dc99c121c5b4fd",
"assets/assets/icons/renewable.png": "99e8a4688c6eb62d6491156132cd0135",
"assets/assets/icons/calendar-today.png": "1755ce73b4ab82c76c782789312ac852",
"assets/assets/icons/diploma.png": "192ba34014e6019be796e7f84ab9e972",
"assets/assets/icons/settings.png": "35c279ef9c74ceccda6a819f54a32969",
"assets/assets/icons/bills.png": "aab77de90b98e49bd1ed39e7811aeeda",
"assets/assets/icons/bussiness.png": "6531c54089382d870ef48ae4d141dc6a",
"assets/assets/icons/question.png": "fd69af025d1b0e64d49fe8085e08f4c4",
"assets/assets/icons/data-processing.png": "7fa3fd1765e8ac9a8561703acfb8b943",
"assets/assets/icons/visible.png": "7e0b9c129f4f1ed81c2d7c3cfea7f58d",
"assets/assets/icons/file.png": "c9ba20f730792a4f55b624560dc366d2",
"assets/assets/icons/visibility.png": "3773abb16e6426e12408bd6543bd7e7f",
"assets/assets/icons/down.png": "ba419593b7f90606732df37bd8ce88e1",
"assets/assets/icons/viber.png": "73c2e76e7bb79d6817f09cf5d3831dc9",
"assets/assets/icons/logout.png": "2866f3d528fc1b46801f482d49fc3d2b",
"assets/assets/icons/home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/icons/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/icons/employment.png": "ff772e8393e90a60c897e054a091176b",
"assets/assets/icons/termination.png": "708f2f232b5bef0848b41f83c3179b3b",
"assets/assets/icons/teamwork.png": "1063efbb94435bd25e57943169d2c9aa",
"assets/assets/icons/passport.png": "522a2345658b5a55944d253206888957",
"assets/assets/icons/request.png": "4a1f236b2acc2df2efb1c24fe520bb2b",
"assets/assets/icons/national.png": "b7f4df4dd5ad404cb88cbed1a3f573ea",
"assets/assets/icons/left.png": "dc65bf31e7978be6bdc0cf528802194c",
"assets/assets/icons/building.png": "04dcd89651dc8c9442de15a2def551db",
"assets/assets/icons/action/SeflRenew.png": "e6ca9ef51e1b6943b4fab9c60eff5e3a",
"assets/assets/icons/action/Renew.png": "3b79c78c47a38ca4f212ccf31b3bd9af",
"assets/assets/icons/action/Invoice.png": "8d80d7c0c1dfd352142e5f403a26e6ab",
"assets/assets/icons/action/Terminat.png": "d3e0bf25f7ebb227f846a916c74f224d",
"assets/assets/icons/action/EditPhoto.png": "4f7d24fa46454de6e23be6cdefbb0e59",
"assets/assets/icons/action/Invoice%2520Medical.png": "c33caebcb2700b28fa2fddfb7c69e45d",
"assets/assets/icons/action/Edit.png": "07132fb2508616d7b1c4730c335013b1",
"assets/assets/icons/action/Update%2520passport.png": "0c64e344dc5635c72264a3c595870d38",
"assets/assets/icons/office.png": "2969d5d7006e729b0500ffb1011edfc7",
"assets/assets/icons/dashboards.png": "6186e931fda6bbeec07d881d6f96328f",
"assets/assets/icons/invoice.png": "fd01d8c0f63bbccf409d84fa4ef1ca25",
"assets/assets/icons/error.png": "9effc58c23b38aed4da7903b0b0bdab9",
"assets/assets/icons/progress.gif": "22eb8aca8d90324d0025fa27ce6e016f",
"assets/assets/icons/group-users.png": "8caf3497d8121670ce9e46f19962f292",
"assets/assets/icons/company_location.png": "6f9e4664e12ac110e0f71b02444e822d",
"assets/assets/icons/calendar.png": "57f3a8708550f57c5ec13bc1a9a37681",
"assets/assets/icons/synchronize.png": "4d08cb0cfcc6dcf1a63dc7fce01aa010",
"assets/assets/icons/passport_update.png": "958ee4fa3f9d5a2326e46f22a3a369ae",
"assets/assets/icons/location.png": "1d740ad2a3dca0d7abd45e65739b3d0e",
"assets/assets/icons/pencil.png": "f8bfdeb0ddc29268be8877cad2c272e4",
"assets/assets/icons/invoice-icon.png": "7a08d229403a5d668fad00ad8a11fef2",
"assets/assets/icons/file.gif": "975774b863d948c762c2d51baeb90a9b",
"assets/assets/icons/edit.png": "ea274324f3f257f6441c8b959a4aad62",
"assets/assets/icons/faq.png": "7bfba3bb93bc634fd1b8e198d2b1972b",
"assets/assets/icons/construction1.png": "28245d255ee9135dfaf25726c44313d0",
"assets/assets/icons/browser.png": "b10ac2b74b1f8052198af5a50d985529",
"assets/assets/icons/construction.png": "bcdfe06d60077887f9ad723c3222796f",
"assets/assets/icons/edit-image.png": "fc5c5fbcc9ec8e08237ab9b63cae2bdf",
"assets/assets/icons/Animation%2520-%25201720670629863.gif": "36510235d696c2fcbee04f60e6d4f6e8",
"assets/assets/icons/more.png": "b4008243777476a4324153fcc19fae4e",
"assets/assets/icons/contract.png": "4b82917048026a3f4ddd4b38a4a5926b",
"assets/assets/icons/right.png": "b06c1d150619f1a79d5e43efee2382f1",
"assets/assets/icons/man-user.png": "c7d7c578320f8b5dad54d23e6991e946",
"assets/assets/icons/terminate.png": "9b7f22a4552dd67d9c8fcbab69c70ca3",
"assets/assets/icons/gender.png": "49052c474324a6043fed6a8e17a41117",
"assets/assets/icons/moreh.png": "48872501243cd173e89b04d1693ae5f2",
"assets/assets/doc/prokas_wp.jpg": "c86e8300e203791a355b6b8f0aa1b683",
"assets/assets/doc/prokas_04_2022.jpg": "9fb21ce74d933322ac7a9dc456292f5e",
"assets/assets/doc/prokas_new.jpg": "ceda29495323f69cb855e901ecdecc72",
"assets/assets/doc/prokas_09_2023_new.jpeg": "6c704e980d98fa79b99c02c2e807b410",
"assets/assets/fonts/fa-solid-900.ttf": "adec7d6f310bc577f05e8fe06a5daccf",
"assets/assets/fonts/SourceSansPro-Bold.otf": "1a2a157bfd94b250884c09f1bd57a0bb",
"assets/assets/fonts/SourceSansPro-Regular.otf": "5e1d162e634a102d7da8db597825a764",
"assets/assets/fonts/KhmerOSBattambang-Regular.ttf": "a680c425b92d3705c1b96c424c4b7208",
"assets/assets/fonts/Battambang-Bold.ttf": "d181e97d6231f4cb6cacbfcc84c7dc3e",
"assets/assets/fonts/fa-regular-400.ttf": "370dd5af19f8364907b6e2c41f45dbbf",
"assets/assets/fonts/fa-brands-400.ttf": "56c8d80832e37783f12c05db7c8849e2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
