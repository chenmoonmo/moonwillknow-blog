if(!self.define){let e,a={};const t=(t,i)=>(t=new URL(t+".js",i).href,a[t]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=a,document.head.appendChild(e)}else e=t,importScripts(t),a()})).then((()=>{let e=a[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let n={};const r=e=>t(e,c),f={module:{uri:c},exports:n,require:r};a[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(s(...e),n)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6cdc31d24a3e9800c8f9effc6c6ae20b"},{url:"/_next/static/8tbtYZfwrkTDKBKtoGOkt/_buildManifest.js",revision:"2937b49a02d42d4551afde1da4925f99"},{url:"/_next/static/8tbtYZfwrkTDKBKtoGOkt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/123-03205f2c66b2e955.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/172-beb336f2d2391763.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/207-efae6b6ec2610993.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/221-daf7bb05221e5387.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/230-126f96cfcdda8c2f.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/316.2fb82dc26dcbd9b8.js",revision:"2fb82dc26dcbd9b8"},{url:"/_next/static/chunks/352-ebac339bde463edb.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/405.75926b780ac2400b.js",revision:"75926b780ac2400b"},{url:"/_next/static/chunks/446.56627097beb4be34.js",revision:"56627097beb4be34"},{url:"/_next/static/chunks/47f59749.a89c136c175b6123.js",revision:"a89c136c175b6123"},{url:"/_next/static/chunks/522-fcbf22de40bf2798.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/586-1de76fef29c8f6d3.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/697-7cfcd645580e81a0.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/817.e7d2f6c05d144ae0.js",revision:"e7d2f6c05d144ae0"},{url:"/_next/static/chunks/967726e3.98f05e13e35afa07.js",revision:"98f05e13e35afa07"},{url:"/_next/static/chunks/980.5dcda5d3830e27b1.js",revision:"5dcda5d3830e27b1"},{url:"/_next/static/chunks/app/about/page-8426d76e7f63515b.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/error-e09d9d5767d37a3f.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/layout-e89ca330e8053c2f.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/page-9f2ce002dfad5a9e.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/posts/%5Bid%5D/layout-d299e945f4eb6fe1.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/posts/%5Bid%5D/loading-39c152647e21571f.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/posts/%5Bid%5D/page-9500d7cec318d07b.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/posts/layout-32f0e2bf78b13fec.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/app/posts/page-170a5526af6f94ba.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/e2b44779-8898a707eefb28c4.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/fed2d5a2-1886deb51d5eaac3.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/main-9c21e1b9aac58ab6.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/main-app-179784c0675bdf59.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/pages/_app-1e1a10c3009f340c.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/pages/_error-8110b1a9a1cf6faf.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-7ba4ce37bb2886fc.js",revision:"8tbtYZfwrkTDKBKtoGOkt"},{url:"/_next/static/css/8ac1afbdafaed6a2.css",revision:"8ac1afbdafaed6a2"},{url:"/_next/static/css/abb40b19e90b8fa0.css",revision:"abb40b19e90b8fa0"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"1608a09b"},{url:"/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"4aafdb68"},{url:"/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"a79f1c31"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"b6770918"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"cce5b8ec"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"ec17d132"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"07ef19e7"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"55fac258"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"dad44a7f"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"9f256b85"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"b18f59e1"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"d42a5579"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"7c187121"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"d3c882a6"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"ed38e79f"},{url:"/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"b74a1a8b"},{url:"/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"c3fb5ac2"},{url:"/_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"d181c465"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"6f2bb1df"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"70d8b0a5"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"e3f82f9d"},{url:"/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"47373d1e"},{url:"/_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"8916142b"},{url:"/_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"9024d815"},{url:"/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"0462f03b"},{url:"/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"7f51fe03"},{url:"/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"b7f8fe9b"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"572d331f"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"a879cf83"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"f1035d8d"},{url:"/_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"5295ba48"},{url:"/_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"939bc644"},{url:"/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"f28c23ac"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"8c5b5494"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"94e1e8dc"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"bf59d231"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"3b1e59b3"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"7c9bc82b"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"b4c20c84"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"74048478"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"ba21ed5f"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"d4d7ba48"},{url:"/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"03e9641d"},{url:"/_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"07505710"},{url:"/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"fe9cbbe1"},{url:"/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"e1e279cb"},{url:"/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"eae34984"},{url:"/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"fabc004a"},{url:"/_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"57727022"},{url:"/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"5916a24f"},{url:"/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"d6b476ec"},{url:"/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"9acaf01c"},{url:"/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"a144ef58"},{url:"/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"b4230e7e"},{url:"/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"10d95fd3"},{url:"/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"7a996c9d"},{url:"/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"fbccdabe"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"6258592b"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"a8709e36"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"d97aaf4a"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/cat.JPG",revision:"e4b3cde7ea7d923ca2607aa2f7dea319"},{url:"/favicon.ico",revision:"f2715fe7abff3d324a3466b1a1f06507"},{url:"/icons/icon-128x128.png",revision:"74e8731f85afcd630e7cff3ef7447090"},{url:"/icons/icon-144x144.png",revision:"538b37c7dcb6fc9f94706cd0f337962d"},{url:"/icons/icon-152x152.png",revision:"73994061229b4f894d3050245fa329a0"},{url:"/icons/icon-192x192.png",revision:"51135ccbf2cc2bc6540a33e0870ecebb"},{url:"/icons/icon-384x384.png",revision:"056542b23dcc19cda3ce6ea1c8829ffc"},{url:"/icons/icon-48x48.png",revision:"8c6d312aa0060c66402c44dd9d08b583"},{url:"/icons/icon-512x512.png",revision:"dd6ac4273aca4573f7fa832de0e67f34"},{url:"/icons/icon-72x72.png",revision:"ca0bd0e560740452eb3822de4749e5b6"},{url:"/icons/icon-96x96.png",revision:"0ca6b54f140fefc5cebe2e774b84f3aa"},{url:"/launch.png",revision:"d5e6f8fe735d8ac6127b16c8233da1cc"},{url:"/manifest.json",revision:"2c50c8fc32ccf6b221b96c3e332a69c3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:t,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
