/* Guarda o app no aparelho para abrir sem internet.
   Ao publicar uma versão nova, mude o número abaixo (ex.: ficha-v2) para forçar a troca dos arquivos guardados. */
const VERSION = "ficha-v2";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/im-fell-english-sc-latin-400-normal.woff2",
  "./fonts/im-fell-english-latin-400-normal.woff2",
  "./fonts/im-fell-english-latin-400-italic.woff2",
  "./fonts/alegreya-sans-latin-400-normal.woff2",
  "./fonts/alegreya-sans-latin-500-normal.woff2",
  "./fonts/alegreya-sans-latin-700-normal.woff2",
  "./favicon.ico",
  "./icons/favicon-16.png",
  "./icons/favicon-32.png",
  "./icons/favicon-96.png",
  "./icons/apple-touch-icon.png",
  "./icons/android/icon-192.png",
  "./icons/android/icon-512.png",
  "./icons/android/maskable-192.png",
  "./icons/android/maskable-512.png",
  "./icons/android/monochrome-192.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  /* A página: tenta a internet primeiro (pega a versão mais nova) e usa a cópia guardada se estiver offline */
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  /* Fontes, ícones e o resto: usa a cópia guardada na hora e atualiza por trás */
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
