"use strict";var CACHE_NAME="order-splitter-cache-v0.5.1",urlsToCache=["/","/styles.css","/all.min.js"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Opened cache"),e.addAll(urlsToCache)}))}),self.addEventListener("activate",function(e){var t=[CACHE_NAME];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return t.indexOf(e)===-1}).map(function(e){return caches.delete(e)}))}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t?t:fetch(e.request)}))});