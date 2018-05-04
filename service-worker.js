/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/09/06/First-Artical/index.html","2703b42c0441ff4b8a50bbf320172676"],["/2017/09/06/模块化/index.html","79016efc697d3be2c77e90781ce56301"],["/2017/09/07/组件化/index.html","98d87a820e00bb33e7d570a088d8da0f"],["/2017/09/08/常用黑科技/index.html","968b8270c01c0e7d00152d6d67291d40"],["/2017/09/19/fixed背景图固定兼容性bug/index.html","5e4ab12746bac06f24f1418deb45242f"],["/2017/09/19/三栏布局/index.html","8c0e7e2b3dcd7b876d0c444f7be14d11"],["/2017/09/20/es6常用特性/index.html","0cc060063d4dcb85a00d94000fac3b0a"],["/2017/10/25/setTimeout的总结/index.html","6098e004d25062da4d99f10f5a24c07c"],["/2017/10/31/浏览器的渲染原理简介/index.html","15860162374c88cfdc99de48c00af3e9"],["/2017/11/02/node基础（上）/index.html","1cbfc9643bb1e10c37fb7702649ef861"],["/2017/11/10/全栈项目填坑（一）/index.html","425dce32cee2a08bf31b4db3544df0b6"],["/2017/11/10/全栈项目填坑（三）/index.html","0149d8d11c2f082f0131f2aedd6038fd"],["/2017/11/10/全栈项目填坑（二）/index.html","05ab3496400deaabf677ba19c15d8c2c"],["/2017/11/17/微信公众号开发（一基础配置）/index.html","3660ce9ab460675157195fd6859d3970"],["/2017/11/22/判断一个对象是否是数组/index.html","123b77fb5025558e56b252aea80fed33"],["/2017/12/01/依赖注入/index.html","3a9e3acfeb5d3a4c0a986ba6cef854c6"],["/2017/12/04/vue响应式原理（object（数组）的坑）/index.html","674080cd0efbf293596d8bfb26dc331f"],["/2018/01/10/vue组件面向对象的应用/index.html","d75784e5ed23a3f24efb22f855307451"],["/2018/01/19/设计模式（创建型)/index.html","babe686828349e7397ac0bf74427ae7b"],["/2018/01/26/浅谈前端安全/index.html","948fda1e2bb0fb6db83c73b16151702c"],["/2018/05/04/设计模式（观察者）/index.html","6ea95d12633b2908acf85faacebf2847"],["/archives/2017/09/index.html","68e02ed00040443bdec29b8ce6978bdd"],["/archives/2017/10/index.html","223638d3206ed37816ecf66405406dc0"],["/archives/2017/11/index.html","2876bf0801493b3e3d3795d7415d35eb"],["/archives/2017/12/index.html","1bc1376a41d7955c6edd68df533ff88b"],["/archives/2017/index.html","bf4f4434a0aa716929cd28118a937d6e"],["/archives/2017/page/2/index.html","679a20e62ba99c87e474ecb7b05952ed"],["/archives/2018/01/index.html","99ff61bd650dd297d6dcbb066fa2017d"],["/archives/2018/05/index.html","0960ddf7c4f3fad7b361920c7ea7ee9d"],["/archives/2018/index.html","32c7b31136064989e42b51505c682911"],["/archives/index.html","c91d2dc1c0e0268b34290de91110780d"],["/archives/page/2/index.html","8a0c16b219464612db018fe910326a78"],["/archives/page/3/index.html","58240d98aa68a768b2956db5e9f8d1de"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/alipay.jpg","da4d5886a6db8b0eb68641ba4048d88b"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/icon.png","b55d6b79e5422014de213065cfff8875"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/weixinma.jpg","8100b0364455e29644e08e500d0c6d70"],["/index.html","31f0c6e46bc64643f937fa661e5150cb"],["/main.507b3a.css","b9b1413784cad584eefbdf1c03117359"],["/main.507b3a.js","afa95507ebbb1e4fba6dacf2c04adb02"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","60a7f06c919abe81c8e0fd2338a25919"],["/page/3/index.html","13aab0b24c4a9576a018703181376da5"],["/slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["/tags/node/index.html","577668fe24d92bdad35f2c6febde278e"],["/tags/node开发/index.html","e6e7723705277f0795e1458742e86822"],["/tags/前端/index.html","b28946a976fb701ab2c05d3a54aea466"],["/tags/前端/page/2/index.html","d4ec6fdd347658ae1623534961c79e3a"],["/tags/前端安全/index.html","4ee37e2545a2a5d5723816c814b81648"],["/tags/前端开发/index.html","0254f4b91d2e0a3651debe2d2637b5b9"],["/tags/随笔/index.html","3aa45cedf6765cabaac62a721e966944"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







