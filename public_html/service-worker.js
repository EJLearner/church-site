"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/index.html","e72073ddf6774a5788871158b098cdc1"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/css/main.a6e475e0.css","5f0a306d55e405a328394aa5804785cf"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/js/main.d9e9ed49.js","833731973506959cbd7b3e4ce2a51e00"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/cePageStyles.d95c6967.scss","d95c696769a03f426789c4f442a6206c"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/cesquare.7d894490.png","7d8944905dbf20e5515fa3af80a33061"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/chrisedtopbanner.efbcd6ad.png","efbcd6adcf8c10df738eae5a86fe88f6"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-banner-2020.926d9cf1.png","926d9cf124274ae1fc9e8bacc7d6b35c"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-bible-study.04d6264b.png","04d6264b87928e0e935075019cdc29de"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-ce-sunday.b054a153.png","b054a15333f9973c145a0f8eab4e2606"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-christ-risen.cfdb9d02.png","cfdb9d02a4c3006db4c8b116cad8c11d"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-christmas-eve.c74b9623.png","c74b9623e16ba9f44213db6328aa7afd"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-holy-week.647ebfb9.png","647ebfb90099845bcde9d09e57e64463"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-leadership-prayer.e687f040.png","e687f040ff9a13ec9895deb3896274c3"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/christian-ed-home-mothers-fathers.4e968f3c.png","4e968f3c6604f7e40da4ca8f17ecaf26"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/communications.5bb44e25.png","5bb44e25ca801c975fc64fecc6b7a87a"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/discipleship.41d2fa66.png","41d2fa66fde600f19dff4515be22cfae"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/evangelism.24c01230.png","24c012303b7641658dbcf81de6b4dec3"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/finance.c4049f6e.png","c4049f6ea056672ebc6c4c47f76d7313"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/kids.76c93d47.jpg","76c93d47ea13c8d0084ca79f5975c93b"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/leadership.64fad9c8.png","64fad9c850d1fa8d504f49dd07db6d78"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/membership.fe75f64f.png","fe75f64ffcd7467aa307e86319217e9b"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/powerpointpicture.21194426.png","211944263985acfd44119f08ea84d2b8"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/retreat-picture.b0bb725d.jpg","b0bb725d7df0bb2fdae2d96b9d8b2684"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/vbsregpicture.a5b61ce5.png","a5b61ce52cc4b85839c75600e1936686"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/worship.161158f0.png","161158f0e2abe1cb4071afc9a5984d9d"],["C:/Users/rzrshrp/Google Drive/WebDev/church-site-react/build/static/media/yearginbio.36f52039.jpg","36f520391bde31e758c89486d6058e3e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,r){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=r),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(r){return new Response(r,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,r,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,r){if(0===e.length)return!0;var t=new URL(r).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return r.every(function(r){return!r.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var r=e[0],t=e[1],c=new URL(r,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(r){if(!r.ok)throw new Error("Request for "+t+" returned a response with status "+r.status);return cleanResponse(r).then(function(r){return e.put(t,r)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!r.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var r,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);r=urlsToCacheKeys.has(t);r||(t=addDirectoryIndex(t,"index.html"),r=urlsToCacheKeys.has(t));!r&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/index.html",self.location).toString(),r=urlsToCacheKeys.has(t)),r&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(r){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,r),fetch(e.request)}))}});