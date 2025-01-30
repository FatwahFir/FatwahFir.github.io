'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "8ec477068b69acbb457a4056283c73ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "49ce9e074a279056f46998ef2e78542f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b036444993ad1e145f4d9ecba85e18b",
".git/logs/refs/heads/main": "f879744147674db22265b9cb57774bd5",
".git/logs/refs/remotes/origin/main": "65f677478d13c8133b3d4f084e72dd34",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/20/7862401f1142a61944cb59a6b21a725be37033": "ebc7c8a06879e5bc6478adda8d40efe8",
".git/objects/29/ebbb9df93dd1fc8c8d837de770ab36516b0ef2": "bdf2b0d3418eb4f53f68aa28b73fa7c9",
".git/objects/2a/d2f815d80edecccf135ba776d58dec77c98661": "fd0ac25a34c140edd448b9bf86ed1924",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/093e82a02433eeb35518893abf680f16faac94": "0afe10a4ad6c278022b7297e448a13f1",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/35/84d976280b465d622dae5158bf4d0ce86aaa9b": "19c1f8e2b216f9291aab39c4e0b6688c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/a2fe875bdbe235d797327b09467c2dab51ceb0": "e6f54d115463032df9be19b3b5c4be1d",
".git/objects/3c/5153abb66cc569cde8385e6fa10b2aff21f7d5": "8c8fee80f457a23cc84e39b066d86ad6",
".git/objects/3e/b0c248a060f11b5f2e83dd8bc159e52d5da68b": "64e220e30f46ce664e4ec078f7e6d690",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/10e7aa5b62c6838bf5486ed1a4e30a53890b99": "be8d70e37a16ba0de049b9fc1faca64f",
".git/objects/4d/b892250ac3cb650a5636fc29f45f243e49f67d": "8676dd009027d4f9bb8dd4103cd3a739",
".git/objects/56/9ffb3507101c319c1d967e121b0f7f1124b103": "7a604a8fa7cbe63a9a0d9649b6274a14",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/67/be92f9341444c10e1d796dbde8194a86eaa653": "0f8b995fdcb4b7fd66be64936293fcb1",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/78/eaa85a61bb832b6e43494e1f8f319b57ce3334": "88a251360986dbb141eb84fbe8965313",
".git/objects/7b/a388f5ba27bac750d8e54505ecfa7299ebcdfa": "3347fa274f98a035d503b58dbd280fa6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ab69cc179feebfca6b8244f5d87554d0881ac0": "560bd162991a9beb4a663017ce69d4c0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e04379869d4864b75e431dbd158c9c0182824e": "304d49513eae75167581bdded508dad0",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/f58c06d931b0f0595308277decbcdd095ffa9a": "6dd0517054bcf189d0fa399c26bcfb41",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a2/57cda98cd4202c7d9bf9dec8ed4304b02e86df": "e344cca308c915c876ecbfe3b0ef6611",
".git/objects/a2/72f3fb5ad6eff8eace16b696e8de445d9d1077": "83381d67e147d3abf025081df8445bad",
".git/objects/a2/ca1531b8d68e668c2393692bb9cd56a1ad7582": "9a3f55ffe00bfeb4525d7596cb18b8ff",
".git/objects/a3/94c6b6ddb3ffedd652e29c2aaf15ee1d5f4061": "65cfc995c580df213cf2bb3cb23d31d9",
".git/objects/aa/9aa95a850456441f60ec474021276482efa8b6": "e574fc01ab1d903682ceffd6e78e9eec",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3b69d1e417e63ae5b36ba6e088546c9b7dd8e6": "461873223a40ea73e4e05e1b82f39676",
".git/objects/bc/3d063ec1f79dc6f8f26bcbf2504bfc7225ac04": "cac9d56af672359cc8eba5c8e350ae08",
".git/objects/bf/de87d91cd735e577ff9cdae2c09bb020109ae5": "abbc54b386dee8e022fa63f9083bfe67",
".git/objects/c1/b511572f7256724d20a135fcf7af58f9c2f5aa": "724a5f3d1a0c4d3608c75eec9eab5487",
".git/objects/ce/78f920a35e3d80dd3cf393e1d38bc3ee73d26c": "ba35e6ee43d1155694f70f10b7120d8c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/1d316f24dde00e2d079305220931fe5b9aca35": "1b4d5dca76a4ae488ce84c835c2de68d",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/8c94e3f323923090eaf94e1444b44b272167fd": "db6220f124384e99cd60d9facde21024",
".git/objects/dd/df74b2913a1414f0d1315de3dfcd9c5abc461a": "7fa4757a2007f85518230d8ca17d6ba5",
".git/objects/e1/7d3b1cc293fa6d84fdc788f7303d5e88872b77": "5d4755cd390887dcf4bcb4f67b792ceb",
".git/objects/e3/9698f966886835721ab3c9682fe8b79f2b6518": "64db276d235563bf367c775cb3e6594f",
".git/objects/ea/d2c42a698d0869c8905f8e42d29b769cb29afc": "07e2f5d4a9ab06a5ecc262590c643398",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4495a6672d0157bb3572015c20af0225506c83": "b6619f63dc1d7c3356f4593502644005",
".git/objects/ec/f0c719e5152040adff3615b9c7a2fb2c5b2df0": "bf76ee28c6975699d114e3a2e6818408",
".git/objects/f1/7755c9564ed37fc6be3783b8f13f73f76c171b": "50d52fd1a6a2969ea0867a215d2d7377",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/0067e102db975975bb3c9c23276e1a645d9ee3": "fcf1052fd6d05a958a067f4f6e20b48d",
".git/objects/fa/e289e77cb19e3bc9f08ab8d222911afb34b0f5": "3adff3b0a1473893a3d4909c9f107556",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "225fd9979b78b4d504ad1a227527d2ab",
".git/refs/remotes/origin/main": "225fd9979b78b4d504ad1a227527d2ab",
"assets/AssetManifest.bin": "8def616adf581393f4c3213df6789cec",
"assets/AssetManifest.bin.json": "5cd72af840f07de686cd14edb1fcad1c",
"assets/AssetManifest.json": "5954315f70e0a1a43f05a1e1176eb0cb",
"assets/assets/images/Cover-ACQ.png": "e9d03ace6bc6d3d316ea866401640670",
"assets/assets/images/Cover-IPSMART.png": "5fce964c6effd0e9b0dbc208c8967a35",
"assets/assets/images/Cover-Mereset-Kakdara.png": "e350cd6c501f35e39594b4f09c2f8701",
"assets/assets/images/Cover-SIPESAT.png": "dff5334a9393226df8e5e9c394ec445f",
"assets/assets/images/dribbble.png": "4728c9253648650affd4abfc6e074b6b",
"assets/assets/images/facebook.png": "bf1f7cf4d9dd68b2142a02ec6d33df26",
"assets/assets/images/firebase.png": "c911d672405a3c9144eed22c86251dae",
"assets/assets/images/flutter.png": "11730d08fa60e5d497c6827f65288e85",
"assets/assets/images/github.png": "8efd52cd4877c081c22d47cd533af5a1",
"assets/assets/images/instagram.png": "0f0892af581ab30201a9e45136ea9102",
"assets/assets/images/laravel.png": "c839e1ed048eee27877c8b2b91560937",
"assets/assets/images/linkedin.png": "33ad08d7b7e1b56c5e124df35593e6cd",
"assets/assets/images/mereset_kakdara.jpg": "1bcddad4f100c03aa8dc011f6710218a",
"assets/assets/images/mysql.png": "a6bc9c2b554da673ea35c557f92f1cdc",
"assets/assets/images/ppob.jpg": "8d7cd0df711832c5264967a9511ffc27",
"assets/assets/images/siesta_2.jpg": "549865a86b6b121999a9eab742141c5f",
"assets/assets/images/siesta_3.jpg": "b964b1e689b67f0a12c0a699d54c8474",
"assets/assets/videos/acq.mp4": "dcee2e064a548e53ad821161fa8e5be5",
"assets/assets/videos/attendance.mp4": "9356d28726845016d2dde4c5a407798e",
"assets/assets/videos/chat_app.mp4": "0c1436e5723151f8e692e45d26a59015",
"assets/assets/videos/ipsmart.mp4": "87134e15d42c9f3670697e9b71f0e244",
"assets/assets/videos/todo_list.mp4": "fd1a616b62ea0a78fa64512846897283",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b89a7c7c376977224f372386fcf3c604",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "fa4bf96bf0a0726977adaa2a597287fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "101e03321625cfa07196670349d86c8c",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
