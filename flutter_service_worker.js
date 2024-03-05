'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0f740adbc22dda0f2e89f6062f9d140e",
".git/config": "8f9b62025e7df372e31754282a0f4373",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f62c286f0fe6bf438230ea95528eadd6",
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
".git/index": "3d8cd798e911d9a16dcb92c192961608",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aca51e9e70ff9fed75ec33bd74330140",
".git/logs/refs/heads/main": "ae31431f64301eadf083b8da318e9199",
".git/logs/refs/remotes/origin/main": "199708764011d20e3628185809f0eba1",
".git/objects/00/5ee8e4711dbeb0d99779eb798493a08c9cb153": "acdb6f0d87d4bb4a755394306e828ac0",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/fa38b4fdc7c70262cd43f2b0e5edb0630e75e0": "fa291b742bb152e440f6bf2ae4e24e87",
".git/objects/04/33187320dea61aa23d1c5810082aeb510f8120": "3a8ec6008227db8cdd91ca6ecb103622",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/fe0697b5951e306807ea7b96abebc801852a7d": "8580e5ae5df5e6c80065a5aded77ef81",
".git/objects/08/7240a4ca2211790b32c566ea1eb80f61a14c69": "133fbf79e740eb67b0321b50af2d2fb2",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/25/77c8b78ce3c527f3054220b422b0f4eab70bb5": "1f4105d5ad67ba21eb45b80e39b225da",
".git/objects/26/8c0f1609a06f624ee9bc33b54239dcfbf634ed": "fe070d4258144573ddee7d2f0d31a754",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/fa8fa49701ba892bb9747cbda79ccbb79d50ce": "3030a992fefe6371f1ca6d59c2a5ef97",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/6b2f90842b332ef031bd7782d03fd9957b83f3": "943d6e182a7762a6c84d4c5bc57e34af",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/3b344ad3f06625c00a739ab3f600bc60013b09": "048c6c276a4ec845a965ee7579a53305",
".git/objects/3a/c54e20e42ab63c7e4968837eac7fae8426a5b2": "de75f9ba61c8cc9d0e8d5cc002ffa0e8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/3f/f87e06b950fa7c94ab4fc2e84653f22faaa762": "57e7a146f1b30b8f2349f671612c7712",
".git/objects/43/efd7bdb84688af00b6ed1a73338c27f48fae01": "48a5eb7f3a46c819485b218d3d150b91",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/2785da1c4f117f2b9feadd669b2bc66ee07979": "2ed01308517e6612ebc2b8cdf0cdd1e2",
".git/objects/4b/e179b9e0b4fbda0abaf03de5b0ab875075651b": "392cc6309ac42ba6e40e6ba6e9586170",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4e/c74b7d61657c72921e1d0457ba2b5f77af418d": "5fc59307ce080677ed1b9a0d563604d9",
".git/objects/51/d8715638eb12b2e8573741bd1cd2798ac73b56": "e9802321d71883ff5ef7465917a7180e",
".git/objects/52/9708affa51fcafcfcb5f0651c4ff667e9b8536": "391caa80987601ffed853de8120bab89",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/268793ed617e9d54e71a459665dff5ff351ba3": "56bf69e4d149e39f24f61952e88a7f25",
".git/objects/5b/8aed50a23b91ddaaf04c271cfd732a3df07abe": "cef5288e17a7a17d7ec65e76b8c30479",
".git/objects/66/9a959c79d064c0cf6017b471285131102c4c03": "3b567c8020ef8fa2ae2e39b5605d9d30",
".git/objects/66/a3a55907a77f43e2e178b5f8298f9d4f417c44": "de4c06b058bcfb43d4f3f40c50ec7f4a",
".git/objects/6b/51917d487b0ab57e10a2120369efc7f668a2e4": "56d1ee3ac539acfba8f4f80535534233",
".git/objects/72/bc232688a1799b933cb3bf4d52b79717f943c0": "af4c9a6e571f9a15b12bfe98b54a81f1",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/0082fd54b07f075fc9bd29dc7d6ee8d3c6bd70": "cb5dfd3c1e86c987c3e848f6115d1423",
".git/objects/94/f1a734e47c826ad3421d206d90ccb7be059d35": "71ef00bf198791e95ebfad6b92821031",
".git/objects/96/394c805af8ee9c89ef5f29e383753747bca769": "236d55a25ae03718c378ce40c1fce22d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/96/87781b4fb9d2c498eb5966a98c4312b89d913b": "93b00c0a83243433a7bf6aed47f65978",
".git/objects/97/9c4e0362b2df9fe91733dbe8b025f429309f49": "a406d5ea15afc0f0937673237049a7bd",
".git/objects/97/b7a487e146236b61ee68bfc0e55248381d0eb7": "56dea4545517d21d5ff60accb9e2062e",
".git/objects/98/46f54fdecb90b64faf11758a39f70e771fd9a1": "da93159c00dda9fb8aedc7670e78744a",
".git/objects/9e/39bd2caf1751aae6fe827f8266eb15052f686a": "f1c344f6cebe7f83c5bc36b642bbbcab",
".git/objects/a5/0bc8405029b13877a3374db5d6c0c36e142d8a": "a9a481869b38a14ce19bcff824531c10",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ad/7f708016015a213ff4a7fe8d1f3b0e54a1bf35": "6c5028f58ba380f1009147ba9ca0a427",
".git/objects/ad/ea921f587e47a1a199b24ccdf113d3635b9e23": "b600016b112f2a73c23dc04312417e3b",
".git/objects/b5/54df9eab093cf012d8d31543ba173ab3c8a69c": "ffd39ac64409ad99ac9b5af2fb554061",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/f35087ccf29060899a01fa5143770764e1be90": "fc18eec19fd162d814ca07f0d31f3c64",
".git/objects/c6/5ccfce3d0c9bb77de11a74f86f78f9e7165e09": "8b696184ddc9ab680b561ce3c23f9fbd",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cb/4e5b69a94ba1619de666d8e295a7a7c8c35485": "76b54b7ce51261eed9c1fb0c1b1b1aac",
".git/objects/ce/1d8d5732bc5b5c7a41377f6124db7acc72b759": "0db73c0f5fc3a22f8ee34619dbfb39a0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/c2bff055859669c74674d1678ea5b129834a18": "55aabf5a8214836b7e3ffa8de6cdafb0",
".git/objects/db/b9022cfd78dd760d7f5107ba4a986f91b8a2b1": "bb50a8bf2e1caa94c4719c4209c0f2d8",
".git/objects/de/d5d0c04ab4d928fff484cb6dc896249fd1d876": "ed1fc8225fd0d2b0ab943d61dcb3898a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e5/03acb17558790daa11ddf5a5497fb3e2df2e03": "9206116d7f2148a7850d16c34b607326",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/52a19bc2772375d029eeb7792dc146bc689a14": "23cb2a496a5a37b6eda7b9bf20fd0d8f",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/b4509f45122520fbfd775bdfe0cf1bb6c78364": "b2386edeeac48ed454aad6e9a4aeb2de",
".git/objects/f3/906a8359c83d959c92fbe25349aeb2b2b5f6b1": "3dd71fc4019ad03fdcac34fcbfecd0c6",
".git/objects/f4/e791edd8dd08117c96b8114358aadacc3459cf": "0ce8ba9aac288e3d3f6b58225fa80d72",
".git/objects/f5/26ab85ac9a3a13072ee8101ac46570ab24dd85": "b86079de53b581d79cd6748cdf7a805a",
".git/objects/f6/40bcdb5e726aa806debc0689e6f4adb7ea8bb2": "35de6f96f1ac3bb1d86b1ab535c88e36",
".git/objects/f8/46571516313303f5248f95c92e249937c95aee": "a98dea5abb13423145d1460458344ee3",
".git/objects/f9/cb2ac281562dfc426ec178755ecd92afb7dc2b": "4c23447313685874060a36526b451dff",
".git/objects/f9/eccd20a4df37f67ce870afd98aed3772fda142": "ac2f39e46091ff189d139f7ac1e96ed3",
".git/objects/fc/b30fc2faee69aa549658c1a11cc059eb98b0a7": "7229c6f3d5d9f61bd05f047b7c92ae22",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/168f65956abce5791628e89489e9ce4b2dc4de": "94226c1e27eb046b88c1e4bedd34b992",
".git/objects/fe/7f7892cbd0ed09b8028ec4caf310486ca73d70": "3b37ae7d8ddd671bc2f0984f8177b799",
".git/objects/fe/f946d35a32891c4dce6468ed64f18de63ce181": "4d2044bfd12aed2aa63a60cdccf25a61",
".git/ORIG_HEAD": "6bd415a2cbcf6c692ea45bda0301580e",
".git/refs/heads/main": "3673692543616832289a827c3d49b959",
".git/refs/remotes/origin/main": "3673692543616832289a827c3d49b959",
"assets/AssetManifest.bin": "0d0931be83a6f54484ca9b6eab6c3f92",
"assets/AssetManifest.json": "331de4a0d3764e0042917b43883f57c6",
"assets/assets/excel/chabeb.csv": "a086f5103582eebc7895e934460e5c51",
"assets/assets/fonts/alfont_com_AlFont_com_ae_Granada.ttf": "c76a45b9c9d5853a27655b61e503a009",
"assets/assets/fonts/AmiriQuran-Regular.ttf": "be55fb5add67bc49aad82a9aca4cd710",
"assets/assets/fonts/Gulzar-Regular.ttf": "68e87b4583b193f7df1918bd100cc7c5",
"assets/assets/fonts/OFL.txt": "ceb3ce59b8b9f8c132f419a72c9798bd",
"assets/assets/fonts/VIP-Hakm-Bold-2016.ttf": "093ed6d7aa427230d68bafec642c6251",
"assets/assets/images/BG.png": "847cb6ec2dcebe4f01313cad2a1a8123",
"assets/assets/images/bgweb.jpg": "1c2cce5342d8b0e6db07d04de5d1618c",
"assets/assets/images/cheikh.png": "51dc76c16cba979b16c2b3008ba37573",
"assets/assets/images/dgbg.jpg": "0ed9b77109f3b735a3e48a5cab7225f0",
"assets/assets/images/log.jpg": "7d11286dc4281faecfd4411baa811146",
"assets/assets/images/log.png": "11b9610871354853d529a0c6e3051657",
"assets/assets/images/man.png": "be31028b6630146db77e25297b4eaba4",
"assets/assets/images/profile.png": "35660a21c8898d6f12e5e006aa5f9744",
"assets/assets/images/student.png": "b80a192cf2b0d7a400d045b5bdc402d0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a59b92593eb0a8c6e76f8a945afd660a",
"assets/NOTICES": "2bfed3f03f238792a317b8bee15235bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "af48dd1efb07a5740c85b971fb7fd9dd",
"/": "af48dd1efb07a5740c85b971fb7fd9dd",
"main.dart.js": "5a576640618be20e771c385a1cbb5abb",
"manifest.json": "63cd1f452279364dd611da948691d3ad",
"version.json": "85d4837d7d866483c031c1889324da5f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
