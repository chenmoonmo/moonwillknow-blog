(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};e.r({});const t="precache-v1",n="runtime",s=["/_next/"];self.addEventListener("install",(e=>{console.log("worker installed"),e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(e=>{const s=[t,n];e.waitUntil(caches.keys().then((e=>e.filter((e=>!s.includes(e))))).then((e=>Promise.all(e.map((e=>caches.delete(e)))))).then((()=>self.clients.claim())))})),self.addEventListener("fetch",(e=>{e.request.url.startsWith(self.location.origin)&&e.respondWith(caches.match(e.request).then((t=>t||caches.open(n).then((t=>fetch(e.request).then((n=>t.put(e.request,n.clone()).then((()=>n)))))))))}))})();