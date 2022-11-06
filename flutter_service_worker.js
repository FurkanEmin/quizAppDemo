'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7a5f2255f5fb6ea1681a59263be3d2d8",
"index.html": "bb7be9eb9d8e2700fd9ab3fd3e4f3bbd",
"/": "bb7be9eb9d8e2700fd9ab3fd3e4f3bbd",
"main.dart.js": "1480c0f8c1d62e170c46874c84cb9dd7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3833b085886692eaa4f7a63ba3ad4c27",
".git/config": "f4ba7cc42dde4c14988b12ae047123de",
".git/objects/61/8fbc10fe979f28b3bb64d1bd0d34e0435101eb": "1927b2f991faf654247834e99094dbe6",
".git/objects/50/5a3aa617c768124403a2410b2c840161a9c1c3": "3417b215c183903ac6a9ebc2692fd5cf",
".git/objects/9b/437c61c9293904597d8ac1a4cad75d234ae767": "7fb27c139130ed5cf0da0caefbe3c812",
".git/objects/9e/bd64033cef8972464073aa757f8676d81df83d": "3cf3b82d27a0b30ea1909bf907736579",
".git/objects/9d/95a80a88f4fa23ebfa7a71561596cf34983b0e": "fa2c04641831c6f66be3ecb1685adf26",
".git/objects/a3/b5ac1612994378f53b63660adb86f9ccab0eb1": "544de236aab78aa2b4e5df6b9bdb2f40",
".git/objects/ac/776917bedb6c246c706bf22e5d72fc2e2865ef": "c1762dbc53a71a4927c39a18d2ab9ffe",
".git/objects/bb/4e50dc07e9b5b3d5a2a1ce6342313525da59bb": "8ccea17092db988f86f33f4e9aab790d",
".git/objects/be/d1bdb1428373b543a68cc44ed5dc4b0c7534dc": "ce7297207c897da8b69afa79c974f9d6",
".git/objects/b3/4eb193e3c52c095d2c3c975c808879743b23e1": "c5c67a1ee7eaa7007ca49a0c699957f1",
".git/objects/b3/2344ff96f0e7468143f88beda4e1d44eae28b3": "0883136f3c1447b8fd3a5f69216172dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1b7b26d17978682cd4bd5a32ea634028f3bd2": "e0e2fd7dbd274b1d55a3117762f4e16a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/20/ce0d4ab728b5fb0158738f6489dc113035fb19": "9cfeaed5b2228061c6a2b8107acb5dc6",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/5bccdea562fac9debf1224ca22eb8f0a781d43": "9a11208e2d271d5de074bbbdc554bdf3",
".git/objects/74/fae763bef1b3b4800cd1c404de767d411116cf": "bf182b5cbc892f5d3e69ed8708a6cc3d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/4d5f31e1b1d46e734915b360069ac65c18eea8": "561cf9651d9f14cc0ef20af81a91286e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/7c66edd85ba31e11c7fa03ea3f46b71460eaa7": "add97c196514556fcc78fd837636679e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/5a20c4b4908917ba494c17f293c8821e3f6d76": "60308ceeb81439f64e607267db402eaf",
".git/objects/6e/9571f95ee064d3f7483b043bb9c9e5758b1263": "a5464204f97b4cc844245b893d5b7b6d",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/99/8954d0ca0c9c4ac7f6cf7bef58f35be25b57ec": "51d77a5ae48b9ceba2a6f79b15bc1b04",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/c2/d77b29c8080bea793e626434bc742808e77028": "46274ceba7ac614a038f63167523e984",
".git/objects/f6/7448dd91331a34a0125e9b0a61aa24a4aaddaa": "4f3ab395605a9a21091e2d9938d38955",
".git/objects/f1/d8ecb5604ee13a01b606a55e8ed2abb5fbd3e5": "fc0204efac43fa3ba871b346d5d737a2",
".git/objects/e7/9c9e2a698275cac029267b699edd90de7451ba": "c7bfe92d4b45b492c106b1be6fb7a610",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/be992e68931157bff66dd3f33d62c78952ba36": "a9cfdfa79931df670ca07e0c65a13491",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4f/95c5410602000c58f8c11ffe771747a6a2298c": "b5ac56f637e86fc1f45c174eead51899",
".git/objects/71/8ac7c7fc5537d8a8f9a18516b20834d4c52e97": "2c08fb7d49d5088ffe8a0d7b9c5cd092",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/7d642e991014f49203f9a12b5bcebada773046": "ebbb98056195de65eb24875809e1ed68",
".git/objects/14/54d6f3f0566473429df83d25f595d6dcf3f9be": "3d649d7073f379294e93718c718ea237",
".git/objects/8e/2772eb54e10d5aa7f333c928c920c6ce3536bc": "e681426af563b9aac299750d089f4118",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd1aab048872341bb5a331b375a70fe7",
".git/logs/refs/heads/main": "6c16e18c459f142f2755665bd2c046ed",
".git/logs/refs/remotes/origin/main": "bac7c18a8a009f5eab78c4ba8cd3d1e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "731f2854a721442ee4565b919e2ccda1",
".git/refs/remotes/origin/main": "731f2854a721442ee4565b919e2ccda1",
".git/index": "82c458b31864f7b4caf7bc85d5a5f9ef",
".git/COMMIT_EDITMSG": "c9a48c4e8b7b85b533ea2b671d05e5d8",
"assets/images/demoTextImage.png": "a840ca1ea3c5c3bbc55a504fa455891b",
"assets/AssetManifest.json": "c313aa8b5a73819aeaa2fd86b06130f8",
"assets/NOTICES": "9f6472408e376ba0e4cc8ea05a7ca009",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "d99614de45b1f445425dc9f4e1c40a74",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
