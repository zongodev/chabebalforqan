'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1d55ce2471839d412fc7507ce44708f6",
".git/config": "7fed072ae19add13b8126ab2ac9e2c22",
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
".git/index": "a02867e2a4e77a8c5ebc25716db741d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "665e0a1e677f07d4318f2f814b2de762",
".git/logs/refs/heads/main": "22c261db703ad73e0364e1e9fabc1cd1",
".git/logs/refs/heads/master": "f77270b7bbd7802a757cf87408c0f5d4",
".git/logs/refs/remotes/origin/main": "ec6c7ca1a5e3e12f61c9e8bc95f176fa",
".git/logs/refs/remotes/origin/master": "aebb65f657f9c9d6ff4f71dac2dc7a69",
".git/objects/01/fa38b4fdc7c70262cd43f2b0e5edb0630e75e0": "4b4dd1080c813c07efef751da91a18e1",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "9a2741a9017f3e943ec0b7f327c2c020",
".git/objects/07/129d6e0ec2702bfed54cdf71b8a6fe6268230a": "2e03ed4d84feedbbcddf0a4efae3fe1b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/08/7240a4ca2211790b32c566ea1eb80f61a14c69": "1f410acdb3404a80cdf765aa0dc1b6b7",
".git/objects/0a/d8e0f28940f897ee9c310064e2010c317dfed4": "08266329fe6b85726012f27b2c056d0a",
".git/objects/0c/8e52aab2832199c45659c380b15f9565e439a4": "db9672bad40123d51bc1b1c1aeb6f18e",
".git/objects/0d/93be000eff9704745d1a5e463ef2efe1073d7a": "a0f15660c09e048b92d2193144582ccf",
".git/objects/11/dd5417fb0ab80174023c906a657c3cd64082e4": "7f3ae71b816afc256086f70c018c8286",
".git/objects/14/a7cf227dad43e0ecdc6f7238e8943e5715283e": "fcc1a30d734c68722dc0e339782fee58",
".git/objects/15/6dc1a202fc79fc3f2909e4d60b4c20bab0062b": "141da5201ac96c8ededd0da25df872b3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/18/80e4ba0afbea7524d6fddb0c7f8706ac6c0c06": "fd668bd1e619211dfa07cae351d6ddad",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/25/77c8b78ce3c527f3054220b422b0f4eab70bb5": "732ab079d469ef2bcd34e7ff2b4a117f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/2e/fa8fa49701ba892bb9747cbda79ccbb79d50ce": "d5f01623f30f2105fdd37b3cb3f5c76e",
".git/objects/30/1138a75e73db00bea7b69710cf7b48478759eb": "ce3ae4b3304633b7c05fd132a0621a2e",
".git/objects/38/efb8590a444227cdf48a2353831da5977ef923": "6619b65b991533884b9171b538929f57",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "7a45402238decbda5a1817c517e1f276",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "fe6c79adc440323303672a8ef701cbfd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/47/06b14bf409541a63aa222a2d5dfdf9ac08bdc8": "d3d994f34e688fa8197f4d7dfb9c614f",
".git/objects/47/c9a2a98a37a1424d257aad4057d42e1815a489": "9ac01548233edfb668d8151827573868",
".git/objects/48/2785da1c4f117f2b9feadd669b2bc66ee07979": "d760280cc485ad790041a3fd00b9b56c",
".git/objects/48/4afc78e9b79d90226d2f9e6d105becbfedd1a1": "fc6e17c0debbe935c783188e23d90489",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/51/d8715638eb12b2e8573741bd1cd2798ac73b56": "5371beb96dc0184220d3bdd3e46e3edb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/55/f03f8ad7bf0e7d28234211ea54868b38258802": "c92a48000a53bf63962ff060e93f3d09",
".git/objects/57/268793ed617e9d54e71a459665dff5ff351ba3": "d88c6561fa8fda78511d6220166b8ec5",
".git/objects/58/c5a994d255e9752c7fdfebb8368d5fd34d4bed": "1879f9cd2e80637f4c9a62831d9a69d8",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "426ccef613faa4fdaa7fe1ebbfb0334a",
".git/objects/5b/74964a30bef13badbea472b8806bbc18b6596d": "0ba419f82061ad201dbdc7512a4beb67",
".git/objects/5b/8aed50a23b91ddaaf04c271cfd732a3df07abe": "f6b120530d0c4d1b7cfe07c12b60b1d7",
".git/objects/5f/0a438bcf7a052a9004d690afeb1eda25250385": "1e2b923081cf638ae351bc1f065b1b34",
".git/objects/5f/2b6ff3d0fdc3468d409ec7813ae7b917cde4e7": "3dad33eb06f88c8c691edbd143c3cd7a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "2a7e1a5ee4e80fd645045d866db32950",
".git/objects/77/673752c706f743c6da5e7194d190ca2242e419": "cbb1207b89b82dc1f823d023fe34b613",
".git/objects/79/e08324afd108685a075d0099187ff1962e849a": "a6b91b7ed0691241f6e95c5549fe141e",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "c142607fdff32ec1b5768ea27f2544cc",
".git/objects/87/3656371ffd5553216bb8902f2d4728704f1717": "3fcf30bff1a2c7dd09af4086e06dcda6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/f213f9bc0eeaf0049a10d80fe1bd99de312ee9": "423523373de32f813e704083b19b172d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8e/d6abe7f69d14299bbcb70694222a1ee1e21ac7": "5f58abb62b779c3564eff453e7300ecd",
".git/objects/91/4a9be9b4d99291acdfd6ee91d30313f5dd4a6e": "767b612e753238679aa149bce7ecc53c",
".git/objects/91/6b195359d735e4d11e92c628813bf151b74736": "f8779a04a05064528f8de9889d8d1dae",
".git/objects/93/0082fd54b07f075fc9bd29dc7d6ee8d3c6bd70": "b659d353d6415301173df24e63f9ad7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/94/f1a734e47c826ad3421d206d90ccb7be059d35": "b5971ee07570872b52ba44e524a673e2",
".git/objects/96/394c805af8ee9c89ef5f29e383753747bca769": "e2011e6b00ba9c37c251f9943afab84e",
".git/objects/98/6e4ab2edf2568d6fe5bbbd4897a8a0cc096ba9": "e9ab78872960f7329262c214710359f8",
".git/objects/98/87ae64e9ea81c5653f9e1efc21c4f6be7ba63b": "2db5b8d54f092d7ec73c263b58ed8f04",
".git/objects/9e/39bd2caf1751aae6fe827f8266eb15052f686a": "0aa5cb03de6c88b0ec185ed93c6ce25a",
".git/objects/a0/7a4d41a9a9778abb765ac93efe5eddabc20c78": "336e843921c5786da89fd9b536d5ecb5",
".git/objects/a5/0bc8405029b13877a3374db5d6c0c36e142d8a": "10a25079d6b7ccee46f4dda5411bcb47",
".git/objects/ac/4ba7b62bed6d9399b7b573db49743a06a06b33": "0d84eaa68652fc67ebeef45c61792528",
".git/objects/ad/ea921f587e47a1a199b24ccdf113d3635b9e23": "bc47cafecfe71a4eb68c9fd24a241672",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/b3/a072017f21cce4e2091cc5d0b39eed5b0c279c": "51145648e62d45fc2e88b556f29ed77f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/b6/6010e3f8cbea1e8228e132c4f3403c79d7244d": "c156c2db66199043885940a362cb4138",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bf/349a5f2bed86e3a05cc2c99aa7a765d851531d": "935d08b1fe08ccec714b48a43bb3c168",
".git/objects/c2/fd16b0fd4e791554d5301542677e4669342858": "4a6715838013d9cef4e4875ce3af30bc",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/c6/5ccfce3d0c9bb77de11a74f86f78f9e7165e09": "8c75524f5011ff6c78398e5fb604764e",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "26e88664696468ae8d5ce0608760da7a",
".git/objects/cc/157151cc5cd1e0637c1d3314237a34c8ef404d": "fcb65c5df90dea425f97bc6d6733a97f",
".git/objects/d0/049a93e2be6017b14ad082607cccb5c03c0b29": "069406883dbe5a2127be985d09b3adbc",
".git/objects/d3/8a220756f37d92de240033b1ebc0e874e4bd37": "371cf40100eebbe7bde3c7279459422d",
".git/objects/d3/caebdee2c2ff5f1d1aa5a0e2cb96df1874e4b6": "361e5ab469dce454ce0ca64edd6627e3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/d9/c2bff055859669c74674d1678ea5b129834a18": "1e31cded79a32f190a5d604f7d69b2a5",
".git/objects/e5/03acb17558790daa11ddf5a5497fb3e2df2e03": "a605681021969e10c98cac6b88620c10",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/e8/52a19bc2772375d029eeb7792dc146bc689a14": "a9c720bef0a7b25311478804a98b1de2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/6cce2e2045aaff8076b6fa3f733e1a843120ef": "8e72cff1b17e3f02fff11442a8cdbfd9",
".git/objects/ee/b54c3c0324cd2efc9edb090c633f978b40baa2": "311e10ce77454e02ad66709a5bcb843a",
".git/objects/ef/0936707d36568d0bbe69e9d44600c01239257d": "2835f68d9d68decb6c1f8b825111f696",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/906a8359c83d959c92fbe25349aeb2b2b5f6b1": "17e8412c28c14c21d5d497bb3750d0d2",
".git/objects/f4/e5a58bb7fc9bf2f7f3b76c4bbc72ae4e483b5c": "9066b13a2507b13fb41591943b9ce3b6",
".git/objects/f4/e791edd8dd08117c96b8114358aadacc3459cf": "7fa2758bf4203deca5440c1c2b1d9778",
".git/objects/f9/eccd20a4df37f67ce870afd98aed3772fda142": "8f6c45b8e52a7124e18ee92d563b144e",
".git/objects/fc/b30fc2faee69aa549658c1a11cc059eb98b0a7": "2e0f855389b8b3e85f604a0b6c252465",
".git/objects/fd/168f65956abce5791628e89489e9ce4b2dc4de": "ea9f5754d3dbf01086bf5e05c5997e30",
".git/refs/heads/main": "5796f41f40f037ebe57cdf2d3e8e1cdf",
".git/refs/heads/master": "14969b11f7540821d77903e113ee93df",
".git/refs/remotes/origin/main": "5796f41f40f037ebe57cdf2d3e8e1cdf",
".git/refs/remotes/origin/master": "c96fc6debc485538240c29c8dc62cb89",
"assets/AssetManifest.bin": "0d0931be83a6f54484ca9b6eab6c3f92",
"assets/AssetManifest.bin.json": "c8c9d22578d3819b9995ab7b20363430",
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
"assets/assets/images/log.png": "94d27fafef461398bc2e844691921472",
"assets/assets/images/man.png": "be31028b6630146db77e25297b4eaba4",
"assets/assets/images/profile.png": "35660a21c8898d6f12e5e006aa5f9744",
"assets/assets/images/student.png": "b80a192cf2b0d7a400d045b5bdc402d0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cee991f8748fae46bf300ccd62fb2ab7",
"assets/NOTICES": "bc0fbf269748d8fd3bbd14da221f80bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "305ad94cdc50e0e53d0ac09f47fa5187",
"/": "305ad94cdc50e0e53d0ac09f47fa5187",
"main.dart.js": "8e2714d136f29f825a9c3a9a1bd380f8",
"manifest.json": "63cd1f452279364dd611da948691d3ad",
"version.json": "85d4837d7d866483c031c1889324da5f"};
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
