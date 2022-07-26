declare let self: ServiceWorkerGlobalScope;

let CACHE = "1.0.0" + "::ZiyiMember";

self.addEventListener("message", (event) => {
  console.log("Hello from util.");
  console.log("es6+ syntax test:");
  let foo = { message: "working" };
  console.log(foo?.message);
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object
  //     window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event?.data);
});

export {};
